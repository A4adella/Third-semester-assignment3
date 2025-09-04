import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destination from "./pages/destination";
import Home from "./pages/home";
import Crew from "./pages/crew";
import Technology from "./pages/technology";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;

