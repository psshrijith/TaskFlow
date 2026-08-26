import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import TaskList from "../components/TaskList";
import type {Task} from "../types/types"

const Dashboard = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  return (
    <div className="min-h-screen flex">
      <SideBar />

      <main className="flex-1">
        <div className="flex justify-end p-4">
          <button
            className="p-2 bg-black text-white rounded-md"
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
        <TaskList tasks={tasks}/>
      </main>
    </div>
  );
};

export default Dashboard;
