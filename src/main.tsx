import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { IntlProvider } from "react-intl";
import enMessages from "./en.json";
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/Theme/ThemeProvider.tsx';
import { UserProvider } from './context/User/UserProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntlProvider locale="en" messages={enMessages}>
      <ThemeProvider>
        <UserProvider>
        <App />
        </UserProvider>
      </ThemeProvider>
   </IntlProvider>
  </StrictMode>,
)
