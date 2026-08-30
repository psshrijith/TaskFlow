import { useIntl } from "react-intl";
import type { Task } from "../../types/types";
import EditableText from "../EditableText";
import EditActions from "../EditActions";

type TaskHeaderProps = {
  task: Task;
  isEditing: boolean;
  titleError: string;
  onTitleChange: (title: string) => void;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
};

const TaskHeader = ({
  task,
  isEditing,
  titleError,
  onTitleChange,
  onEdit,
  onSave,
  onCancel,
}: TaskHeaderProps) => {
  const intl = useIntl();

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="min-w-0 flex-1">
        <EditableText
          value={task.title}
          label={intl.formatMessage({ id: "task.title" })}
          isEditing={isEditing}
          onChange={onTitleChange}
          inputClassName="text-3xl font-semibold tracking-tight sm:text-4xl"
          renderValue={(title) => (
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h1>
          )}
        />
        {titleError && <p className="mt-2 text-sm text-red-400">{titleError}</p>}
      </div>

      <EditActions isEditing={isEditing} onEdit={onEdit} onSave={onSave} onCancel={onCancel} />
    </div>
  );
};

export default TaskHeader;
