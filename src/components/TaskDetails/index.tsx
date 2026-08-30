import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate, useParams } from "react-router-dom";
import type { Task } from "../../types/types";
import TaskContent from "./TaskContent";
import TaskHeader from "./TaskHeader";
import TaskProperties from "./TaskProperties";

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
    setEditState({ isEditing: true, draftTask: { ...task }, titleError: "" });
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

        <TaskHeader
          task={editedTask}
          isEditing={editState.isEditing}
          titleError={editState.titleError}
          onTitleChange={(title) => updateDraft({ title })}
          onEdit={startEditing}
          onSave={saveTask}
          onCancel={cancelEditing}
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_13rem]">
          <TaskContent
            task={editedTask}
            isEditing={editState.isEditing}
            onDescriptionChange={(description) => updateDraft({ description })}
          />
          <TaskProperties task={task} />
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
