import "./App.css";
import AppRoutes from "./routes/route";
import { Navigation } from "./layout/navigation";
import { Footer } from "./layout/footer";

function App() {
  return (
    <div>
      <Navigation />
      <div>
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
