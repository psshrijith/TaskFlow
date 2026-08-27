import { useState } from "react";
import Dropdown from "../DropDown";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import type { Task, TaskCardProps } from "../../types/types";

type ModalProps = {
  isOpenModal: boolean;
  setIsOpenModal: (isOpen: boolean) => void;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

type TaskFormData = Omit<TaskCardProps, "tags"> & {
  tags: string;
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

const Modal = ({ isOpenModal, setIsOpenModal, setTasks }: ModalProps) => {
  const [taskData, setTaskData] = useState<TaskFormData>({
    title: "",
    description: "",
    status: "todo",
    priority: "high",
    dueDate: "",
    tags: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    dueDate: "",
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
    };

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

    if (
      validationErrors.title ||
      validationErrors.description ||
      validationErrors.dueDate
    ) {
      setErrors(validationErrors);
      return;
    }

    setErrors({
      title: "",
      description: "",
      dueDate: "",
    });

    const task = {
      id: crypto.randomUUID(),
      title: taskData.title.trim(),
      description: taskData.description.trim(),
      taskStatus: taskData.status,
      priority: taskData.priority,
      dueDate: taskData.dueDate,
      tags: taskData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    };

    setTasks((previousTasks) => {
      const updatedTasks = [...previousTasks, task];

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      return updatedTasks;
    });

    setIsOpenModal(false);
  };

  const updateTaskData = (field: keyof typeof taskData, value: string) => {
    setTaskData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const buttonDisable = !taskData.title.trim() || !taskData.description.trim();

  if (!isOpenModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md">
      <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-zinc-950 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
        <ModalHeader setIsOpenModal={setIsOpenModal} />

        <div className="max-h-[calc(100vh-210px)] space-y-5 overflow-y-auto px-6 py-6 sm:px-8">
          <div className="space-y-2">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">Title</label>

            <input
              type="text"
              required
              name="title"
              onChange={handleChange}
              value={taskData.title}
              placeholder="What needs to be done?"
              className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:bg-white/[0.05] focus:ring-2 ${errors.title ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/10" : "border-white/10 focus:border-white/30 focus:ring-white/10"}`}
            />
            {errors.title && <p className="text-xs text-red-400">{errors.title}</p>}
          </div>

          <div className="space-y-2">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
              Description
            </label>

            <textarea
              name="description"
              onChange={handleChange}
              rows={4}
              value={taskData.description}
              placeholder="Add some details about this task..."
              className={`w-full resize-none rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:bg-white/[0.05] focus:ring-2 ${errors.description ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/10" : "border-white/10 focus:border-white/30 focus:ring-white/10"}`}
            />
            {errors && (
              <p className="text-xs text-red-400">{errors.description}</p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <Dropdown
                label="Status"
                value={taskData.status}
                options={statusOptions}
                onChange={(value) => updateTaskData("status", value)}
              />
            </div>

            <div>
              <Dropdown
                label="Priority"
                value={taskData.priority}
                options={priorityOptions}
                onChange={(value) => updateTaskData("priority", value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
              Due date
            </label>

            <input
              type="date"
              name="dueDate"
              value={taskData.dueDate}
              onChange={handleChange}
              className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-gray-300 outline-none transition focus:bg-white/[0.05] focus:ring-2 ${errors.dueDate ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/10" : "border-white/10 focus:border-white/30 focus:ring-white/10"}`}
            />
            {errors.dueDate && <p className="text-xs text-red-400">{errors.dueDate}</p>}
          </div>

          <div className="space-y-2">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">Tags</label>

            <input
              type="text"
              name="tags"
              onChange={handleChange}
              value={taskData.tags}
              placeholder="react, typescript, frontend"
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-white/30 focus:bg-white/[0.05] focus:ring-2 focus:ring-white/10"
            />

            <p className="text-xs text-gray-600">Separate tags with commas</p>
          </div>
        </div>

        <ModalFooter
          handleCreateTask={handleCreateTask}
          setIsOpenModal={setIsOpenModal}
          disabled={buttonDisable || !taskData.dueDate}
        />
      </div>
    </div>
  );
};

export default Modal;
