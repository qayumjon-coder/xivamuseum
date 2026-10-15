import { Navigate, Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import AdminLayout from "./Admin/AdminLayout";
import DashboardPage from "./pages/Admin/DashboardPage";
import UsersPage from "./pages/Admin/UsersPage";
import SettingsPage from "./pages/Admin/SettingsPage";

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
