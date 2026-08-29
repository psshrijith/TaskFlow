import { fireEvent, render, screen } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import { describe, expect, it, jest } from "@jest/globals";
import enMessages from "../../en.json";
import TaskCard from "../TaskCard";

describe("TaskCard", () => {
  const baseProps = {
    id: "task-1",
    title: "Build the dashboard",
    description: "Implement the dashboard layout and task list cards.",
    tags: ["frontend", "ui"],
    status: "in-progress" as const,
    priority: "high" as const,
    dueDate: "2026-09-01",
    handleDeleteTask: jest.fn(),
    handleView: jest.fn(),
  };

  it("renders task details correctly", () => {
    render(
      <IntlProvider locale="en" messages={enMessages}>
        <TaskCard {...baseProps} />
      </IntlProvider>,
    );

    expect(screen.getByText("Build the dashboard")).toBeTruthy();
    expect(screen.getByText("Implement the dashboard layout and task list cards.")).toBeTruthy();
    expect(screen.getByText("Due: 2026-09-01")).toBeTruthy();
    expect(screen.getByText("In Progress")).toBeTruthy();
    expect(screen.getByText("frontend")).toBeTruthy();
    expect(screen.getByText("ui")).toBeTruthy();
  });

  it("calls handleView when the view button is clicked", () => {
    render(
      <IntlProvider locale="en" messages={enMessages}>
        <TaskCard {...baseProps} />
      </IntlProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: /view/i }));

    expect(baseProps.handleView).toHaveBeenCalledWith("task-1");
  });

  it("calls handleDeleteTask when the delete button is clicked", () => {
    render(
      <IntlProvider locale="en" messages={enMessages}>
        <TaskCard {...baseProps} />
      </IntlProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: /delete task/i }));

    expect(baseProps.handleDeleteTask).toHaveBeenCalledWith("task-1");
  });
});
