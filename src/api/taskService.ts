import { fetchGraphQL } from "../lib/graphqlClient";
import type { Task } from "../types/types";

interface TaskRow {
  id: string;
  title: string;
  description?: string;
  status: Task["taskStatus"];
  priority: Task["priority"];
  due_date?: string;
  tags?: string[];
}

const GET_TASKS_QUERY = `
  query GetTasks {
    tasks(order_by: { created_at: desc }) {
      id
      title
      description
      status
      priority
      due_date
    }
  }
`;

const GET_TASK_BY_ID_QUERY = `
  query GetTaskById($id: uuid!) {
    tasks_by_pk(id: $id) {
      id
      title
      description
      status
      priority
      due_date
    }
  }
`;

const CREATE_TASK_MUTATION = `
  mutation CreateTask($object: tasks_insert_input!) {
    insert_tasks_one(object: $object) {
      id
      title
      description
      status
      priority
      due_date
    }
  }
`;

const UPDATE_TASK_MUTATION = `
  mutation UpdateTask($id: uuid!, $set: tasks_set_input!) {
    update_tasks_by_pk(pk_columns: { id: $id }, _set: $set) {
      id
      title
      description
      status
      priority
      due_date
    }
  }
`;

const DELETE_TASK_MUTATION = `
  mutation DeleteTask($id: uuid!) {
    delete_tasks_by_pk(id: $id) {
      id
    }
  }
`;

export const taskService = {
  async getTasks(userToken?: string): Promise<Task[]> {
    const data = await fetchGraphQL<{ tasks?: TaskRow[] }>(GET_TASKS_QUERY, {}, userToken);
    const rows = data?.tasks || [];

    return rows.map((row: TaskRow) => ({
      id: row.id,
      title: row.title,
      description: row.description || "",
      taskStatus: row.status,
      priority: row.priority,
      dueDate: row.due_date || "",
      tags: row.tags || [],
    }));
  },

  async getTaskById(id: string, userToken?: string): Promise<Task | null> {
    const data = await fetchGraphQL<{ tasks_by_pk?: TaskRow }>(GET_TASK_BY_ID_QUERY, { id }, userToken);
    const row = data?.tasks_by_pk;
    if (!row) return null;

    return {
      id: row.id,
      title: row.title,
      description: row.description || "",
      taskStatus: row.status,
      priority: row.priority,
      dueDate: row.due_date || "",
      tags: row.tags || [],
    };
  },

  async createTask(task: Omit<Task, "id">, userId: string, userToken?: string): Promise<Task> {
    const object = {
      user_id: userId,
      title: task.title,
      description: task.description,
      status: task.taskStatus,
      priority: task.priority,
      due_date: task.dueDate,
    };

    const data = await fetchGraphQL<{ insert_tasks_one?: TaskRow }>(CREATE_TASK_MUTATION, { object }, userToken);
    const row = data?.insert_tasks_one;
    if (!row) throw new Error("Failed to create task");

    return {
      id: row.id,
      title: row.title,
      description: row.description || "",
      taskStatus: row.status,
      priority: row.priority,
      dueDate: row.due_date || "",
      tags: row.tags || [],
    };
  },

  async updateTask(id: string, changes: Partial<Task>, userToken?: string): Promise<Task> {
    const set: Record<string, unknown> = {};
    if (changes.title !== undefined) set.title = changes.title;
    if (changes.description !== undefined) set.description = changes.description;
    if (changes.taskStatus !== undefined) set.status = changes.taskStatus;
    if (changes.priority !== undefined) set.priority = changes.priority;
    if (changes.dueDate !== undefined) set.due_date = changes.dueDate;
    set.updated_at = new Date().toISOString();

    const data = await fetchGraphQL<{ update_tasks_by_pk?: TaskRow }>(UPDATE_TASK_MUTATION, { id, set }, userToken);
    const row = data?.update_tasks_by_pk;
    if (!row) throw new Error("Failed to update task");

    return {
      id: row.id,
      title: row.title,
      description: row.description || "",
      taskStatus: row.status,
      priority: row.priority,
      dueDate: row.due_date || "",
      tags: row.tags || [],
    };
  },

  async deleteTask(id: string, userToken?: string): Promise<void> {
    await fetchGraphQL<{ delete_tasks_by_pk?: { id: string } }>(DELETE_TASK_MUTATION, { id }, userToken);
  },
};