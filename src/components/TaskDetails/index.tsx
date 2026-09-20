import { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { Task } from "../../types/types";
import TaskContent from "./TaskContent";
import TaskHeader from "./TaskHeader";
import TaskProperties from "./TaskProperties";
import type { AppDispatch, RootState } from "../../store";
import { fetchTaskByIDRequest } from "../../store/slices/taskSlice";

type EditState = {
  isEditing: boolean;
  draftTask: Task | null;
  titleError: string;
};

const TaskDetails = () => {
  const navigate = useNavigate();
  const { taskId } = useParams<{ taskId: string }>();
  const intl = useIntl();
  const dispatch = useDispatch<AppDispatch>();

  const token = useSelector((state: RootState) => state.auth.token) || localStorage.getItem("supabase_token");
  const { tasks, isLoading } = useSelector((state: RootState) => state.tasks);

  const [editState, setEditState] = useState<EditState>({
    isEditing: false,
    draftTask: null,
    titleError: "",
  });

  useEffect(() => {
    if (taskId && token) {
      dispatch(fetchTaskByIDRequest({ id: taskId, token: token || undefined }));
    }
  }, [dispatch, taskId, token]);

  const task = tasks.find((item) => item.id === taskId);

  if (isLoading && !task) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
        <p className="text-gray-400">Loading task details...</p>
      </div>
    );
  }

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

    setEditState({ isEditing: false, draftTask: null, titleError: "" });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#27272a_0,_#09090b_42rem)] px-4 py-6 text-white sm:px-8 sm:py-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="mb-6 inline-flex rounded-lg px-2 py-1 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
        >
          <FormattedMessage id="task.back" />
        </button>

        <section className="rounded-3xl border border-white/10 bg-zinc-900/80 p-2 shadow-2xl shadow-black/20 backdrop-blur sm:p-6">
          <TaskHeader
            task={editedTask}
            isEditing={editState.isEditing}
            titleError={editState.titleError}
            onTitleChange={(title) => updateDraft({ title })}
            onEdit={startEditing}
            onSave={saveTask}
            onCancel={cancelEditing}
          />
        </section>

        <div className="mt-6 grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_18rem] xl:gap-8">
          <TaskContent
            task={editedTask}
            isEditing={editState.isEditing}
            onDescriptionChange={(description) => updateDraft({ description })}
          />
          <TaskProperties
            task={editedTask}
            isEditing={editState.isEditing}
            onStatusChange={(taskStatus) => updateDraft({ taskStatus })}
            onPriorityChange={(priority) => updateDraft({ priority })}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
