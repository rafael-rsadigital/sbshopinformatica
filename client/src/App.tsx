/* Design: Oficina Azul-Cobalto — a navegação pública conecta a home editorial a páginas de serviço específicas e acionáveis. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import { serviceConfigs } from "./pages/serviceConfigs";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/assistencia-impressoras"><ServicePage config={serviceConfigs["assistencia-impressoras"]} /></Route>
      <Route path="/assistencia-notebooks"><ServicePage config={serviceConfigs["assistencia-notebooks"]} /></Route>
      <Route path="/contrato-manutencao-empresarial"><ServicePage config={serviceConfigs["contrato-manutencao-empresarial"]} /></Route>
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
