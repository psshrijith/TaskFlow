import type { TaskCardProps } from "../types/types";

const statusConfig = {
  todo: {
    label: "Todo",
    className: "bg-gray-500/10 text-gray-400 border-gray-500/20",
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-green-500/10 text-green-400 border-green-500/20",
  },
  done: {
    label: "Completed",
    className: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
};

const priorityConfig = {
  high: "bg-red-500/10 text-red-400 border-red-500/20",
  medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  low: "bg-gray-500/10 text-gray-400 border-gray-500/20",
};

const TaskCard = ({
  title,
  priority,
  description,
  tags,
  status,
  dueDate,
}: TaskCardProps) => {
  return (
    <article className="flex h-[260px] w-[95%] max-w-[360px] flex-col rounded-xl border border-gray-800 bg-gray-900 p-5 shadow-sm transition hover:border-gray-700 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-base font-semibold text-white">{title}</h2>

        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium ${
            priorityConfig[priority]
          }`}
        >
          {priority}
        </span>
      </div>

      <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-400">
        {description}
      </p>

      <p className="mt-3 text-sm text-gray-500">
        Due: {dueDate}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {(Array.isArray(tags) ? tags : []).map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-gray-700 bg-gray-800 px-2 py-1 text-xs text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-gray-800 pt-4">
        <span
          className={`rounded-full border px-2.5 py-1 text-xs font-medium ${
            statusConfig[status].className
          }`}
        >
          {statusConfig[status].label}
        </span>

        <button className="text-sm text-gray-500 transition hover:text-white">
          View →
        </button>
      </div>
    </article>
  );
};

export default TaskCard;
