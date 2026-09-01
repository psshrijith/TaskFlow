import { FormattedMessage, useIntl } from "react-intl";
import type { Priority, Task, TaskStatus } from "../../types/types";
import Dropdown from "../DropDown";

type TaskPropertiesProps = {
  task: Task;
  isEditing: boolean;
  onStatusChange: (status: TaskStatus) => void;
  onPriorityChange: (priority: Priority) => void;
};

const statusClassNames = {
  todo: "border-gray-500/30 bg-gray-500/10 text-gray-300",
  "in-progress": "border-amber-400/30 bg-amber-400/10 text-amber-200",
  done: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
};

const priorityClassNames = {
  high: "text-rose-300",
  medium: "text-amber-200",
  low: "text-sky-200",
};

const TaskProperties = ({
  task,
  isEditing,
  onStatusChange,
  onPriorityChange,
}: TaskPropertiesProps) => {
  const intl = useIntl();
  const statusOptions: { label: string; value: TaskStatus }[] = [
    { label: intl.formatMessage({ id: "task.status.todo" }), value: "todo" },
    {
      label: intl.formatMessage({ id: "task.status.inProgress" }),
      value: "in-progress",
    },
    { label: intl.formatMessage({ id: "task.status.done" }), value: "done" },
  ];

  const priorityOptions: { label: string; value: Priority }[] = [
    { label: intl.formatMessage({ id: "task.priority.high" }), value: "high" },
    {
      label: intl.formatMessage({ id: "task.priority.medium" }),
      value: "medium",
    },
    { label: intl.formatMessage({ id: "task.priority.low" }), value: "low" },
  ];

  return (
    <aside className="h-fit rounded-3xl bg-zinc-900/90 p-3 shadow-2xl shadow-black/20 xl:sticky xl:top-8">
      <p className="px-3 pb-3 pt-2 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
        <FormattedMessage id="task.details" />
      </p>

      <div className="rounded-2xl bg-white/3 px-3 py-4">
        <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
          <FormattedMessage id="task.status" />
        </p>
        {isEditing ? (
          <div className="mt-2">
            <Dropdown
              label=""
              value={task.taskStatus}
              options={statusOptions}
              onChange={(value) => onStatusChange(value as TaskStatus)}
            />
          </div>
        ) : (
          <span
            className={`mt-2 inline-flex rounded-full border px-2.5 py-1 text-xs ${statusClassNames[task.taskStatus]}`}
          >
            {intl.formatMessage({
              id: `task.status.${task.taskStatus === "in-progress" ? "inProgress" : task.taskStatus}`,
            })}
          </span>
        )}
      </div>

      <div className="mt-2 rounded-2xl bg-white/3 px-3 py-4">
        <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
          <FormattedMessage id="task.priority" />
        </p>
        {isEditing ? (
          <div className="">
            <Dropdown
              label=""
              value={task.priority}
              options={priorityOptions}
              onChange={(value) => onPriorityChange(value as Priority)}
            />
          </div>
        ) : (
          <p
            className={`mt-2 text-sm font-medium ${priorityClassNames[task.priority]}`}
          >
            {intl.formatMessage({ id: `task.priority.${task.priority}` })}
          </p>
        )}
      </div>

      <div className="mt-2 rounded-2xl bg-white/3 px-3 py-4">
        <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
          <FormattedMessage id="task.dueDate" />
        </p>
        <p className="mt-2 text-sm font-medium text-gray-200">{task.dueDate}</p>
      </div>
    </aside>
  );
};

export default TaskProperties;
