import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import SimpleDashboard from "./components/simple-dashboard";
import ChartsPage from "./pages/charts";
import PineScriptsPage from "./pages/pine-scripts";
import ScreenersPage from "./pages/screeners";
import MarketDataPage from "./pages/market-data";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={SimpleDashboard} />
      <Route path="/charts" component={ChartsPage} />
      <Route path="/pine-scripts" component={PineScriptsPage} />
      <Route path="/screeners" component={ScreenersPage} />
      <Route path="/market-data" component={MarketDataPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
