import { useState } from "react";
import Dropdown from "./DropDown";
import { label } from "motion/react-client";

type ModalProps = {
  isOpenModal: boolean;
};

const statusOptions = [
  { label: "Todo", value: "todo" },
  { label: "In Progress", value: "in-progress" },
  { label: "Completed", value: "done" },
];

const priorityOptions = [
    {label: "High", value: "high"},
    {label: "medium", value: "medium"},
    {label: "low", value: "low"}
]

const Modal = ({ isOpenModal }: ModalProps) => {
  if (!isOpenModal) {
    return null;
  }

  const [status, setStatus] = useState("todo");
  const [priority, setPriority] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-800 px-6 py-5">
          <div>
            <h2 className="text-lg font-semibold text-white">Create task</h2>

            <p className="mt-1 text-sm text-gray-500">
              Add a new task to your workspace.
            </p>
          </div>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-xl text-gray-500 transition hover:bg-gray-800 hover:text-white"
          >
            ×
          </button>
        </div>

        <div className="space-y-5 px-6 py-6">
          <div className="space-y-2 flex flex-col gap-0.5">
            <label className="text-sm font-medium text-gray-200">Title</label>

            <input
              type="text"
              placeholder="What needs to be done?"
              className="w-full rounded-lg border border-gray-800 bg-gray-900 px-3 py-2.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
            />
          </div>

          <div className="space-y-2 flex flex-col gap-0.5">
            <label className="text-sm font-medium text-gray-200">
              Description
            </label>

            <textarea
              rows={4}
              placeholder="Add some details about this task..."
              className="w-full resize-none rounded-lg border border-gray-800 bg-gray-900 px-3 py-2.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 flex flex-col gap-0.5">
              <Dropdown
                label="Status"
                value={status}
                options={statusOptions}
                onChange={setStatus}
              />
            </div>

            <div className="space-y-2 flex flex-col gap-0.5">
              <Dropdown
                label="Priority"
                value={priority}
                options={priorityOptions}
                onChange={setPriority}
            />
            </div>
          </div>

          <div className="space-y-2 flex flex-col gap-0.5">
            <label className="text-sm font-medium text-gray-200">
              Due date
            </label>

            <input
              type="date"
              className="w-full rounded-lg border border-gray-800 bg-gray-900 px-3 py-2.5 text-sm text-gray-300 outline-none transition focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
            />
          </div>

          <div className="space-y-2 flex flex-col gap-0.5">
            <label className="text-sm font-medium text-gray-200">Tags</label>

            <input
              type="text"
              placeholder="react, typescript, frontend"
              className="w-full rounded-lg border border-gray-800 bg-gray-900 px-3 py-2.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
            />

            <p className="text-xs text-gray-600">Separate tags with commas.</p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-gray-800 bg-gray-950 px-6 py-4">
          <button
            type="button"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-400 transition hover:bg-gray-900 hover:text-white"
          >
            Cancel
          </button>

          <button
            type="button"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-200"
          >
            Create task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
