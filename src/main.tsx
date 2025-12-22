import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import { initGA } from "./app/analytics/ga";

initGA();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
