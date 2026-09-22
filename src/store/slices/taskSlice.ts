import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../../types/types";

interface TaskState {
  tasks: Task[];
  isLoading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    fetchTasksRequest: (state, action: PayloadAction<{ token?: string } | undefined>) => {
      void action;
      state.isLoading = true;
      state.error = null;
    },
    fetchTasksSuccess: (state, action: PayloadAction<Task[]>) => {
      state.isLoading = false;
      state.tasks = action.payload;
    },
    fetchTasksFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    createTaskRequest: (
      state,
      action: PayloadAction<{ task: Omit<Task, "id">; token?: string }>
    ) => {
      void action;
      state.isLoading = true;
      state.error = null;
    },
    createTaskSuccess: (state, action: PayloadAction<Task>) => {
      state.isLoading = false;
      state.tasks = [action.payload, ...state.tasks]
    },
    createTaskFailure: (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
    },
    fetchTaskByIDRequest: (state, action: PayloadAction<{token?: string; id: string}>) => {
      void action;
      state.isLoading = true;
      state.error = null;
    },
    fetchTaskByIDSuccess: (state, action: PayloadAction<Task>) => {
      state.isLoading = false;
      state.tasks.push(action.payload);
    },
    fetchTaskByIDFailure: (state, action:PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteTaskRequest:(state, action: PayloadAction<{token: string; id: string}>) => {
      void action;
      state.isLoading = true;
      state.error = null;
    },
    deleteTaskSuccess: (state, action: PayloadAction<Task>) => {
      state.isLoading = false;
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    deleteTaskFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});


export const {
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksFailure,
  createTaskRequest,
  createTaskSuccess,
  createTaskFailure,
  fetchTaskByIDRequest,
  fetchTaskByIDSuccess,
  fetchTaskByIDFailure,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskFailure,
} = taskSlice.actions;

export default taskSlice.reducer;
