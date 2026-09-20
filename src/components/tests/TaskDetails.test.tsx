import { render, screen } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { describe, expect, it } from "@jest/globals";
import enMessages from "../../en.json";
import TaskDetails from "../TaskDetails";
import authReducer from "../../store/slices/authSlice";
import taskReducer from "../../store/slices/taskSlice";

const mockTask = {
  id: "task-1",
  title: "Build landing page",
  description: "Design and implement the landing page hero section.",
  taskStatus: "todo" as const,
  priority: "medium" as const,
  dueDate: "2026-09-10",
  tags: ["frontend", "marketing"],
};

const createMockStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      tasks: taskReducer,
    },
    preloadedState: {
      auth: {
        token: "fake-token",
        user: { id: "user-1", email: "test@example.com" },
        isLoading: false,
        error: null,
      },
      tasks: {
        tasks: [mockTask],
        isLoading: false,
        error: null,
      },
    },
  });

describe("TaskDetails", () => {
  it("renders the selected task details", () => {
    const store = createMockStore();

    render(
      <Provider store={store}>
        <IntlProvider locale="en" messages={enMessages}>
          <MemoryRouter initialEntries={["/task/task-1"]}>
            <Routes>
              <Route path="/task/:taskId" element={<TaskDetails />} />
            </Routes>
          </MemoryRouter>
        </IntlProvider>
      </Provider>,
    );

    expect(screen.getByText("Build landing page")).toBeTruthy();
    expect(screen.getByText("Design and implement the landing page hero section.")).toBeTruthy();
    expect(screen.getByText("Todo")).toBeTruthy();
    expect(screen.getByText("2026-09-10")).toBeTruthy();
    expect(screen.getByText("frontend")).toBeTruthy();
    expect(screen.getByText("marketing")).toBeTruthy();
  });
});
