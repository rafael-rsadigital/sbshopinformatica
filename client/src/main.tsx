/* Design: Oficina Azul-Cobalto — a hidratação deve preservar a página editorial pré-renderizada e ativar a navegação no cliente. */
import { hydrateRoot } from "react-dom/client";
import { Router } from "wouter";
import App from "./App";
import "./index.css";
import "./local-assets.css";

hydrateRoot(
  document.getElementById("root")!,
  <Router>
    <App />
  </Router>,
);
