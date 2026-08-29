import { render, screen } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it } from "@jest/globals";
import enMessages from "../../en.json";
import TaskDetails from "../TaskDetails";

describe("TaskDetails", () => {
  beforeEach(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify([
        {
          id: "task-1",
          title: "Build landing page",
          description: "Design and implement the landing page hero section.",
          taskStatus: "todo",
          priority: "medium",
          dueDate: "2026-09-10",
          tags: ["frontend", "marketing"],
        },
      ]),
    );
  });

  it("renders the selected task details", () => {
    render(
      <IntlProvider locale="en" messages={enMessages}>
        <MemoryRouter initialEntries={["/task/task-1"]}>
          <Routes>
            <Route path="/task/:taskId" element={<TaskDetails />} />
          </Routes>
        </MemoryRouter>
      </IntlProvider>,
    );

    expect(screen.getByText("Build landing page")).toBeTruthy();
    expect(screen.getByText("Design and implement the landing page hero section.")).toBeTruthy();
    expect(screen.getByText("Todo")).toBeTruthy();
    expect(screen.getByText("2026-09-10")).toBeTruthy();
    expect(screen.getByText("frontend")).toBeTruthy();
    expect(screen.getByText("marketing")).toBeTruthy();
  });
});
