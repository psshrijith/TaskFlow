import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, jest } from "@jest/globals";
import Dropdown from "../DropDown";

const options = [
  { label: "Todo", value: "todo" },
  { label: "Completed", value: "done" },
];

describe("Dropdown", () => {
  it("shows the selected option and opens the menu", () => {
    render(
      <Dropdown
        label="Status"
        options={options}
        value="todo"
        onChange={jest.fn()}
      />
    );

    expect(screen.getByText("Todo")).toBeTruthy();
    expect(screen.queryByText("Completed")).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: /Todo/ }));

    expect(screen.getByText("Completed")).toBeTruthy();
  });

  it("calls onChange and closes the menu when an option is selected", () => {
    const onChange = jest.fn();

    render(
      <Dropdown
        label="Status"
        options={options}
        value="todo"
        onChange={onChange}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /Todo/ }));
    fireEvent.click(screen.getByRole("button", { name: "Completed" }));

    expect(onChange).toHaveBeenCalledWith("done");
    expect(screen.queryByRole("button", { name: "Completed" })).toBeNull();
  });
});