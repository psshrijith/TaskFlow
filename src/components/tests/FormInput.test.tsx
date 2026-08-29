import { fireEvent, render, screen } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "@jest/globals";
import enMessages from "../../en.json";
import FormInput from "../FormInput";

describe("FormInput", () => {
  it("renders email and password fields", () => {
    render(
      <IntlProvider locale="en" messages={enMessages}>
        <MemoryRouter>
          <FormInput />
        </MemoryRouter>
      </IntlProvider>,
    );

    expect(screen.getByLabelText("Email")).toBeTruthy();
    expect(screen.getByLabelText("Password")).toBeTruthy();
    expect(screen.getByText("Forgot password?")).toBeTruthy();
  });

  it("updates the input values when typing", () => {
    render(
      <IntlProvider locale="en" messages={enMessages}>
        <MemoryRouter>
          <FormInput />
        </MemoryRouter>
      </IntlProvider>,
    );

    const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "secret123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("secret123");
  });
});
