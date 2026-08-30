import { FormattedMessage } from "react-intl";
import type { Task } from "../../types/types";
import RichTextEditor from "../RichTextEditor";

type TaskContentProps = {
  task: Task;
  isEditing: boolean;
  onDescriptionChange: (description: string) => void;
};

const TaskContent = ({ task, isEditing, onDescriptionChange }: TaskContentProps) => (
  <main className="space-y-6 rounded-2xl border border-white/10 bg-zinc-900 p-6">
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
        <FormattedMessage id="task.description" />
      </p>
      <div className="mt-3 max-w-2xl leading-7 text-gray-300">
        {isEditing ? (
          <RichTextEditor value={task.description} onChange={onDescriptionChange} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: task.description }} />
        )}
      </div>
    </div>

    <div>
      {task.tags.length > 0 && (
        <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
          <FormattedMessage id="task.tags" />
        </p>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        {(Array.isArray(task.tags) ? task.tags : []).map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 bg-zinc-800 px-2 py-1 text-xs text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </main>
);

export default TaskContent;
