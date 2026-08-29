import { render, screen } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "@jest/globals";
import enMessages from "../../en.json";
import NavBar from "../NavBar";

describe("NavBar", () => {
  it("renders the navbar content", () => {
    render(
      <IntlProvider locale="en" messages={enMessages}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </IntlProvider>,
    );

    expect(screen.getByText("TaskFlow")).toBeTruthy();
    expect(screen.getByText("Product")).toBeTruthy();
    expect(screen.getByText("Resources")).toBeTruthy();
    expect(screen.getByRole("link", { name: "Sign Up" })).toHaveAttribute("href", "/signup");
  });
});
