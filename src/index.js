import React from "react";
import ReactDOM from "react-dom/client";
import { DarkModeContexProvider } from "./context/DarkModeContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContexProvider>

      <App />
    </DarkModeContexProvider>
  </React.StrictMode>
);
