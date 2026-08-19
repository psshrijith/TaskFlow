import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../components/SideBar";
import { useState } from "react";
import Modal from "../components/Modal";

const Dashboard = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);

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
                {isOpenModal && <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>}
           </div>
        </main>
    </div>
  );
};

export default Dashboard;
