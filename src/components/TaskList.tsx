import type {Task} from "../types/types";
import TaskCard from "./TaskCard";

type TaskListProps = {
    tasks : Task[];
    handleDeleteTask : (taskId: string | number ) => void;
}
const TaskList = ({tasks, handleDeleteTask}: TaskListProps) => {

  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          tags={task.tags}
          status={task.taskStatus}
          priority={task.priority}
          dueDate={task.dueDate}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
