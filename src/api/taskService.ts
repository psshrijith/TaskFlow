import { fetchGraphQL } from "../lib/graphqlClient";
import type { Task } from "../types/types";

type TaskNode = {
  id: string;
  title: string;
  description: string | null;
  status: Task["taskStatus"];
  priority: Task["priority"];
  due_date: string | null;
};

// GraphQL Query Documents
const GET_TASKS_QUERY = `
  query GetTasks {
    tasksCollection(orderBy: [{ created_at: DescNullsLast }]) {
      edges {
        node {
          id
          title
          description
          status
          priority
          due_date
        }
      }
    }
  }
`;

const GET_TASK_BY_ID_QUERY = `
  query GetTaskById($id: UUID!) {
    tasksCollection(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          title
          description
          status
          priority
          due_date
        }
      }
    }
  }
`;

const CREATE_TASK_MUTATION = `
  mutation CreateTask($objects: [tasksInsertInput!]!) {
    insertIntoTasksCollection(objects: $objects) {
      records {
        id
        title
        description
        status
        priority
        due_date
      }
    }
  }
`;

const UPDATE_TASK_MUTATION = `
  mutation UpdateTask($set: tasksUpdateInput!, $id: UUID!) {
    updateTasksCollection(set: $set, filter: { id: { eq: $id } }) {
      records {
        id
        title
        description
        status
        priority
        due_date
      }
    }
  }
`;

const DELETE_TASK_MUTATION = `
  mutation DeleteTask($id: UUID!) {
    deleteFromTasksCollection(filter: { id: { eq: $id } }) {
      affectedCount
    }
  }
`;

export const taskService = {
  async getTasks(userToken?: string): Promise<Task[]> {
    const data = await fetchGraphQL(GET_TASKS_QUERY, {}, userToken);
    const edges = data?.tasksCollection?.edges || [];

    return edges.map(({ node }: { node: TaskNode }) => ({
      id: node.id,
      title: node.title,
      description: node.description || "",
      taskStatus: node.status,
      priority: node.priority,
      dueDate: node.due_date || "",
    }));
  },

  async getTaskById(id: string, userToken?: string): Promise<Task | null> {
    const data = await fetchGraphQL(GET_TASK_BY_ID_QUERY, { id }, userToken);
    const edges = data?.tasksCollection?.edges || [];

    if (edges.length === 0) return null;

    const node = edges[0].node;
    return {
      id: node.id,
      title: node.title,
      description: node.description || "",
      taskStatus: node.status,
      priority: node.priority,
      dueDate: node.due_date || "",
    };
  },

  async createTask(task: Omit<Task, "id">, userToken?: string): Promise<Task> {
    const variables = {
      objects: [
        {
          title: task.title,
          description: task.description,
          status: task.taskStatus,
          priority: task.priority,
          due_date: task.dueDate,
        },
      ],
    };

    const data = await fetchGraphQL(CREATE_TASK_MUTATION, variables, userToken);
    const record = data?.insertIntoTasksCollection?.records[0];

    return {
      id: record.id,
      title: record.title,
      description: record.description || "",
      taskStatus: record.status,
      priority: record.priority,
      dueDate: record.due_date || "",
    };
  },

  async updateTask(id: string, changes: Partial<Task>, userToken?: string): Promise<Task> {
    const setPayload: Record<string, unknown> = {};
    if (changes.title !== undefined) setPayload.title = changes.title;
    if (changes.description !== undefined) setPayload.description = changes.description;
    if (changes.taskStatus !== undefined) setPayload.status = changes.taskStatus;
    if (changes.priority !== undefined) setPayload.priority = changes.priority;
    if (changes.dueDate !== undefined) setPayload.due_date = changes.dueDate;
    setPayload.updated_at = new Date().toISOString();

    const data = await fetchGraphQL(UPDATE_TASK_MUTATION, { set: setPayload, id }, userToken);
    const record = data?.updateTasksCollection?.records[0];

    return {
      id: record.id,
      title: record.title,
      description: record.description || "",
      taskStatus: record.status,
      priority: record.priority,
      dueDate: record.due_date || "",
    };
  },

  async deleteTask(id: string, userToken?: string): Promise<void> {
    await fetchGraphQL(DELETE_TASK_MUTATION, { id }, userToken);
  },
};
