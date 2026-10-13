import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import Dashboard from "./Admin/Dashboard";

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/admin" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
