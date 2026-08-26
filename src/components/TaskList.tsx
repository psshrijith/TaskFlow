import type {Task} from "../types/types";
import TaskCard from "./TaskCard";

type TaskListProps = {
    tasks : Task[];
}
const TaskList = ({tasks}: TaskListProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-3">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          description={task.description}
          tags={task.tags}
          status={task.taskStatus}
          priority={task.priority}
          dueDate={task.dueDate}
        />
      ))}
    </div>
  );
};

export default TaskList;
