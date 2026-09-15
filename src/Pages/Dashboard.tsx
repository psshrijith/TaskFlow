import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
import TaskList from "../components/TaskList";
import type { Task } from "../types/types";
import EmptyState from "../components/EmptyState";
import type { RootState } from "../store";
import { taskService } from "../api/taskService";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.auth.token) || localStorage.getItem("supabase_token");

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const filteredTasks =
    searchValue.trim() === ""
      ? tasks
      : tasks.filter(
          (item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.description.toLowerCase().includes(searchValue.toLowerCase()),
        );

  useEffect(() => {
    async function loadTasks() {
      if (token) {
        try {
          const apiTasks = await taskService.getTasks(token);
          setTasks(apiTasks || []);
        } catch (err) {
          console.error("Failed to fetch tasks from API:", err);
        }
      }
    }
    loadTasks();
  }, [token]);

  const handleDeleteTask = (taskId: string | number) => {
    setTasks((prev) => {
      const updated = prev.filter((task) => task.id !== taskId);
      localStorage.setItem("tasks", JSON.stringify(updated));
      return updated;
    });
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleView = (taskId: string | number) => {
    navigate(`/task/${taskId}`);
  };

  return (
    <>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-5 sm:px-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
            Workspace
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-white">
            My tasks
          </h1>
        </div>

        <div className="flex justify-between gap-3">
          <button
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
            onClick={() => setIsOpenModal(true)}
          >
            <FontAwesomeIcon icon={faPlus} />
            Create Task
          </button>

          <div className="relative">
            <FontAwesomeIcon
              icon={faSearch}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={searchValue}
              placeholder="Search tasks"
              onChange={handleSearch}
              className="w-full rounded-lg border border-white/20 bg-zinc-900 py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        {isOpenModal && (
          <Modal
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
            setTasks={setTasks}
          />
        )}
      </div>

      {filteredTasks.length > 0 ? (
        <TaskList
          tasks={filteredTasks}
          handleDeleteTask={handleDeleteTask}
          handleView={handleView}
        />
      ) : (
        <EmptyState
          title="No tasks yet"
          description="Create your first task to start organizing your work."
        />
      )}
    </>
  );
};

export default Dashboard;
