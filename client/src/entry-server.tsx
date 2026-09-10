/* Design: Oficina Azul-Cobalto — o HTML inicial precisa nascer completo no servidor para SEO e manter a mesma árvore no cliente. */
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

export function render() {
  return renderToString(
    <Router ssrPath="/">
      <App />
    </Router>,
  );
}
