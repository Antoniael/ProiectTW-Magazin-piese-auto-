import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css"; // Aceasta este linia obligatorie care încarcă designul

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);