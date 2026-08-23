import { useState } from "react";
import Dropdown from "../DropDown";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";

type ModalProps = {
  isOpenModal: boolean;
  setIsOpenModal: (isOpen: boolean) => void;
};

const statusOptions = [
  { label: "Todo", value: "todo" },
  { label: "In Progress", value: "in-progress" },
  { label: "Completed", value: "done" },
];

const priorityOptions = [
  { label: "High", value: "high" },
  { label: "Medium", value: "medium" },
  { label: "Low", value: "low" },
];

const Modal = ({ isOpenModal, setIsOpenModal }: ModalProps) => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    taskStatus: "todo",
    priority: "high",
    dueDate: "",
    tags: "",
  });
  
  const [errors, setErrors] = useState({
    title: "",
    description : "",
    dueDate: ""
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setTaskData((previousTask) => ({
      ...previousTask,
      [name]: value,
    }));
  };

  const handleValidation = () => {

    const newErrors = {
      title: "",
      description: "",
      dueDate: "",
    }

    if (!taskData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!taskData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!taskData.dueDate) {
      newErrors.dueDate = "Due date is required";
    }

    return newErrors;
  };

  const handleCreateTask = () => {
    const validationErrors = handleValidation();
    console.log("validation erorrs", validationErrors);

    if (
    validationErrors.title ||
    validationErrors.description ||
    validationErrors.dueDate
  ) {
    setErrors(validationErrors);
    return;
  }

    setErrors({
      title :  "",
      description : "",
      dueDate: ""
    }
    );

    const task = {
      id: crypto.randomUUID(),
      title: taskData.title.trim(),
      description: taskData.description.trim(),
      taskStatus: taskData.taskStatus,
      priority: taskData.priority,
      dueDate: taskData.dueDate,
      tags: taskData.tags.split(",").map((tag) => tag.trim()),
    };

    const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    localStorage.setItem("tasks", JSON.stringify([...existingTasks, task]));

    setIsOpenModal(false);
  };

  const updateTaskData = (field: keyof typeof taskData, value: string) => {
    setTaskData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  if (!isOpenModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 shadow-2xl">
        <ModalHeader setIsOpenModal={setIsOpenModal} />

        <div className="space-y-5 px-6 py-6">
          <div className="space-y-2 flex flex-col gap-0.5">
            <label className="text-sm font-medium text-gray-200">Title</label>

            <input
              type="text"
              required
              name="title"
              onChange={handleChange}
              value={taskData.title}
              placeholder="What needs to be done?"
              className="w-full rounded-lg border border-gray-800 bg-gray-900 px-3 py-2.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
            />
            {errors && <p className="text-sm text-red-400">{errors.title}</p>}
          </div>

          <div className="space-y-2 flex flex-col gap-0.5">
            <label className="text-sm font-medium text-gray-200">
              Description
            </label>

            <textarea
              name="description"
              onChange={handleChange}
              rows={4}
              value={taskData.description}
              placeholder="Add some details about this task..."
              className="w-full resize-none rounded-lg border border-gray-800 bg-gray-900 px-3 py-2.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
            />
            {errors && <p className="text-sm text-red-400">{errors.description}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 flex flex-col gap-0.5">
              <Dropdown
                label="Status"
                value={taskData.taskStatus}
                options={statusOptions}
                onChange={(value) => updateTaskData("taskStatus", value)}
              />
            </div>

            <div className="space-y-2 flex flex-col gap-0.5">
              <Dropdown
                label="Priority"
                value={taskData.priority}
                options={priorityOptions}
                onChange={(value) => updateTaskData("priority", value)}
              />
            </div>
          </div>

          <div className="space-y-2 flex flex-col gap-0.5">
            <label className="text-sm font-medium text-gray-200">
              Due date
            </label>

            <input
              type="date"
              name="dueDate"
              value={taskData.dueDate}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-800 bg-gray-900 px-3 py-2.5 text-sm text-gray-300 outline-none transition focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
            />
          </div>

          <div className="space-y-2 flex flex-col gap-0.5">
            <label className="text-sm font-medium text-gray-200">Tags</label>

            <input
              type="text"
              name="tags"
              onChange={handleChange}
              placeholder="react, typescript, frontend"
              className="w-full rounded-lg border border-gray-800 bg-gray-900 px-3 py-2.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
            />

            <p className="text-xs text-gray-600">Separate tags with commas.</p>
          </div>

          <ModalFooter
            handleCreateTask={handleCreateTask}
            setIsOpenModal={setIsOpenModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
