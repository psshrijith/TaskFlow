export type Task = {
  id: string;
  title: string;
  description: string;
  taskStatus: "todo" | "in-progress" | "done";
  priority: "high" | "medium" | "low";
  dueDate: string;
  tags: string[];
};

export type Priority = "high" | "medium" | "low";

export type TaskStatus = "todo" | "in-progress" | "done";

export type TaskCardProps = {
  title: string;
  priority: Priority;
  description: string;
  tags: string[];
  status: TaskStatus;
  dueDate: string;
};