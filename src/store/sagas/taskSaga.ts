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
  fetchTaskByIDFailure,
  fetchTaskByIDSuccess,
  fetchTaskByIDRequest,
  deleteTaskRequest,
  deleteTaskFailure,
  deleteTaskSuccess
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
  action: PayloadAction<{ task: Omit<Task, "id">; token?: string }>
): Generator<unknown, void, Task> {
  try {
    const { task, token } = action.payload;
    const newTask: Task = yield call(taskService.createTask, task, token);
    yield put(createTaskSuccess(newTask));
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to create task";
    yield put(createTaskFailure(errorMessage));
  }
}

function* handleFetchTaskByID(action: PayloadAction<{id:string; token:string}>): Generator<unknown, void, Task> {
  try{
    const {id, token} = action.payload;
    const task: Task = yield call(taskService.getTaskById, id, token);
    yield put(fetchTaskByIDSuccess(task));
  }
  catch(err: unknown){
    const errorMessage = err instanceof Error ? err.message : "Failed to fetch the task";
    yield put(fetchTaskByIDFailure(errorMessage))
  }
}

function* handleDeleteTaskByID(action: PayloadAction<{token: string; id: string;}>): Generator<unknown, void, Task>{
  try{
    const {id, token} = action.payload;
    yield call(taskService.deleteTask, id, token);
    yield put(deleteTaskSuccess(id));
  }
  catch(err:unknown){
    const errorMessage = err instanceof Error ? err.message : "Failed to delete the task";
    yield put(deleteTaskFailure(errorMessage));
  }
}

export function* watchTaskSaga() {
  yield all([
    takeLatest(fetchTasksRequest.type, handleFetchTasks),
    takeLatest(createTaskRequest.type, handleCreateTask),
    takeLatest(fetchTaskByIDRequest.type, handleFetchTaskByID),
    takeLatest(deleteTaskRequest.type, handleDeleteTaskByID)
  ]);
}
