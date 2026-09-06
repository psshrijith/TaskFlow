import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import enMessages from "./en.json";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/Theme/ThemeProvider.tsx";
import { UserProvider } from "./context/User/UserProvider.tsx";
import { store } from "./store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <IntlProvider locale="en" messages={enMessages}>
        <ThemeProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </ThemeProvider>
      </IntlProvider>
    </Provider>
  </StrictMode>
);
