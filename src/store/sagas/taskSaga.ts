import type { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { taskService } from "../../api/taskService";
import type { Task } from "../../types/types";
import {
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksFailure,
  createTaskRequest,
  createTaskSuccess,
  createTaskFailure,
} from "../slices/taskSlice";

function* handleFetchTasks(
  action: PayloadAction<{ token?: string } | undefined>
): Generator<unknown, void, Task[]> {
  try {
    const token = action.payload?.token;
    const tasks: Task[] = yield call(taskService.getTasks, token);
    yield put(fetchTasksSuccess(tasks));
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to fetch tasks";
    yield put(fetchTasksFailure(errorMessage));
  }
}

function* handleCreateTask(
  action: PayloadAction<{ task: Omit<Task, "id">; userId: string; token?: string }>
): Generator<unknown, void, Task> {
  try {
    const { task, userId, token } = action.payload;
    const newTask: Task = yield call(taskService.createTask, task, userId, token);
    yield put(createTaskSuccess(newTask));
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to create task";
    yield put(createTaskFailure(errorMessage));
  }
}

export function* watchTaskSaga() {
  yield all([
    takeLatest(fetchTasksRequest.type, handleFetchTasks),
    takeLatest(createTaskRequest.type, handleCreateTask),
  ]);
}
