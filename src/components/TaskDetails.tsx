import { useNavigate, useParams } from "react-router-dom";
import type { Task } from "../types/types";

const TaskDetails = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();

  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]") as Task[];
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Task not found</h2>
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="mt-4 text-sm text-gray-400 transition hover:text-white"
          >
            ← Back to dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-3xl">
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="mb-6 text-sm text-gray-400 transition hover:text-white"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-semibold tracking-tight text-white">{task.title}</h1>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-400">
          <span className="rounded-full border border-white/10 bg-zinc-900 px-2.5 py-1 text-xs text-gray-300">
            {task.taskStatus}
          </span>
          <span>•</span>
          <span>{task.priority}</span>
          <span>•</span>
          <span>{task.dueDate}</span>
        </div>

        <div className="mt-8 space-y-6 rounded-2xl border border-white/10 bg-zinc-900 p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Description</p>
            <p className="mt-3 max-w-2xl leading-7 text-gray-300">{task.description}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Tags</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {task.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-zinc-800 px-2 py-1 text-xs text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
