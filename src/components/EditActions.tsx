import { FormattedMessage } from "react-intl";

type EditActionsProps = {
  isEditing: boolean;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
};

const EditActions = ({ isEditing, onEdit, onSave, onCancel }: EditActionsProps) => {
  if (!isEditing) {
    return (
      <button
        type="button"
        onClick={onEdit}
        className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-gray-200 transition hover:border-white/30 hover:bg-white hover:text-zinc-900"
      >
        <FormattedMessage id="task.edit" />
      </button>
    );
  }

  return (
    <div className="flex shrink-0 gap-2">
      <button
        type="button"
        onClick={onCancel}
        className="rounded-xl border border-white/15 px-3.5 py-2 text-sm font-medium text-gray-300 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
      >
        <FormattedMessage id="task.cancel" />
      </button>
      <button
        type="button"
        onClick={onSave}
        className="rounded-xl bg-white px-3.5 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-gray-200"
      >
        <FormattedMessage id="task.save" />
      </button>
    </div>
  );
};

export default EditActions;
