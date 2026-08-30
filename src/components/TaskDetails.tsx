import { useNavigate, useParams } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import type { Task } from "../types/types";
import { useState } from "react";
import EditableText from "./EditableText";
import EditActions from "./EditActions";
import RichTextEditor from "./RichTextEditor";

type EditState = {
  isEditing: boolean;
  draftTask: Task | null;
  titleError: string;
};

const TaskDetails = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const intl = useIntl();
  const [editState, setEditState] = useState<EditState>({
    isEditing: false,
    draftTask: null,
    titleError: "",
  });

  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]") as Task[];
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">
            <FormattedMessage id="task.notFound" />
          </h2>
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="mt-4 text-sm text-gray-400 transition hover:text-white"
          >
            <FormattedMessage id="task.backToDashboard" />
          </button>
        </div>
      </div>
    );
  }

  const editedTask = editState.draftTask ?? task;

  const startEditing = () => {
    setEditState({
      isEditing: true,
      draftTask: { ...task},
      titleError: "",
    });
  };

  const updateDraft = (changes: Partial<Task>) => {
    setEditState((current) => ({
      ...current,
      draftTask: current.draftTask ? { ...current.draftTask, ...changes } : current.draftTask,
      titleError: "",
    }));
  };

  const cancelEditing = () => {
    setEditState({ isEditing: false, draftTask: null, titleError: "" });
  };

  const saveTask = () => {
    const nextTitle = editedTask.title.trim();

    if (!nextTitle) {
      setEditState((current) => ({
        ...current,
        titleError: intl.formatMessage({ id: "task.requiredTitle" }),
      }));
      return;
    }

    const updatedTasks = tasks.map((item) =>
      item.id === task.id ? { ...editedTask, title: nextTitle } : item,
    );

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setEditState({ isEditing: false, draftTask: null, titleError: "" });
  };

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-3xl">
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="mb-6 text-sm text-gray-400 transition hover:text-white"
        >
          <FormattedMessage id="task.back" />
        </button>

        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <EditableText
              value={editedTask.title}
              label={intl.formatMessage({ id: "task.title" })}
              isEditing={editState.isEditing}
              onChange={(title) => updateDraft({ title })}
              inputClassName="text-3xl font-semibold tracking-tight"
              renderValue={(title) => (
                <h1 className="text-3xl font-semibold tracking-tight text-white">{title}</h1>
              )}
            />
            {editState.titleError && (
              <p className="mt-2 text-sm text-red-400">{editState.titleError}</p>
            )}
          </div>

          <EditActions
            isEditing={editState.isEditing}
            onEdit={startEditing}
            onSave={saveTask}
            onCancel={cancelEditing}
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-400">
          <span className="rounded-full border border-white/10 bg-zinc-900 px-2.5 py-1 text-xs text-gray-300">
            {intl.formatMessage({
              id: `task.status.${task.taskStatus === "in-progress" ? "inProgress" : task.taskStatus}`,
            })}
          </span>
          <span>•</span>
          <span>
            {intl.formatMessage({ id: `task.priority.${task.priority}` })}
          </span>
          <span>•</span>
          <span>{task.dueDate}</span>
        </div>

        <div className="mt-8 space-y-6 rounded-2xl border border-white/10 bg-zinc-900 p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
              <FormattedMessage id="task.description" />
            </p>
            <div className="mt-3 max-w-2xl leading-7 text-gray-300">
              {editState.isEditing ? (
                <RichTextEditor
                  value={editedTask.description}
                  onChange={(description) => updateDraft({ description })}
                />
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
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
