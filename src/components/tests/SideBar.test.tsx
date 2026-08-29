import { fireEvent, render, screen } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "@jest/globals";
import enMessages from "../../en.json";
import SideBar from "../SideBar";

describe("SideBar", () => {
  it("renders navigation items and toggles collapse state", () => {
    render(
      <IntlProvider locale="en" messages={enMessages}>
        <MemoryRouter>
          <SideBar />
        </MemoryRouter>
      </IntlProvider>,
    );

    expect(screen.getByRole("link", { name: /Dashboard/i })).toBeTruthy();
    expect(screen.getByRole("link", { name: /Settings/i })).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: /expand sidebar/i }));

    expect(screen.getByText("TaskFlow")).toBeTruthy();
    expect(screen.getByRole("link", { name: /Dashboard/i })).toBeTruthy();
  });
});
