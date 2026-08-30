import { FormattedMessage } from "react-intl";
import type { Task } from "../../types/types";
import RichTextEditor from "../RichTextEditor";

type TaskContentProps = {
  task: Task;
  isEditing: boolean;
  onDescriptionChange: (description: string) => void;
};

const TaskContent = ({ task, isEditing, onDescriptionChange }: TaskContentProps) => (
  <main className="min-h-80 space-y-8 rounded-3xl border border-white/10 bg-zinc-900/90 p-6 shadow-2xl shadow-black/20 sm:p-8">
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
        <FormattedMessage id="task.description" />
      </p>
      <div className="mt-4 max-w-3xl leading-7 text-gray-300">
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
      <div className="mt-4 flex flex-wrap gap-2">
        {(Array.isArray(task.tags) ? task.tags : []).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-zinc-800 px-2.5 py-1 text-xs text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </main>
);

export default TaskContent;
