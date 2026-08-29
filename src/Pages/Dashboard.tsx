import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../components/SideBar";
import { useState } from "react";
import Modal from "../components/Modal";
import TaskList from "../components/TaskList";
import type {Task} from "../types/types"

const Dashboard = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(() =>
    JSON.parse(localStorage.getItem("tasks") || "[]"),
  );

   const handleDeleteTask = (taskId: string | number) => {
    setTasks((prev) => prev.filter((tasks) => tasks.id !== taskId));
  }

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <SideBar />

      <main className="min-h-screen flex-1 bg-[radial-gradient(circle_at_top_right,rgba(63,63,70,0.2),transparent_35%)]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-5 sm:px-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
              Workspace
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-white">
              My tasks
            </h1>
          </div>

          <button
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
            onClick={() => setIsOpenModal(true)}
          >
            <FontAwesomeIcon icon={faPlus} />
            Create Task
          </button>
        </div>

        <div className="flex items-center justify-center">
          {isOpenModal && (
            <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} setTasks={setTasks} />
          )}
        </div>
        <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask}/>
      </main>
    </div>
  );
};

export default Dashboard;
