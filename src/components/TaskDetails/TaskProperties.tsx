import { FormattedMessage, useIntl } from "react-intl";
import type { Task } from "../../types/types";

type TaskPropertiesProps = {
  task: Task;
};

const TaskProperties = ({ task }: TaskPropertiesProps) => {
  const intl = useIntl();

  return (
    <aside className="h-fit divide-y divide-white/10 rounded-2xl border border-white/10 bg-zinc-900 px-5">
      <div className="py-4">
        <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
          <FormattedMessage id="task.status" />
        </p>
        <span className="mt-2 inline-flex rounded-full border border-white/10 bg-zinc-800 px-2.5 py-1 text-xs text-gray-300">
          {intl.formatMessage({
            id: `task.status.${task.taskStatus === "in-progress" ? "inProgress" : task.taskStatus}`,
          })}
        </span>
      </div>

      <div className="py-4">
        <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
          <FormattedMessage id="task.priority" />
        </p>
        <p className="mt-2 text-sm text-gray-300">
          {intl.formatMessage({ id: `task.priority.${task.priority}` })}
        </p>
      </div>

      <div className="py-4">
        <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
          <FormattedMessage id="task.dueDate" />
        </p>
        <p className="mt-2 text-sm text-gray-300">{task.dueDate}</p>
      </div>
    </aside>
  );
};

export default TaskProperties;
