import "./App.css";
import AppRoutes from "./routes/route";
import { Navigation } from "./components/nav";

function App() {
  return (
    <div>
      <Navigation />
      <AppRoutes />
    </div>
  );
}

export default App;
