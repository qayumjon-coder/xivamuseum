import { Navigate, Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import AdminLayout from "./Admin/AdminLayout";
import DashboardPage from "./pages/Admin/DashboardPage";
import UsersPage from "./pages/Admin/UsersPage";
import SettingsPage from "./pages/Admin/SettingsPage";
import GalleryPage from "./pages/Admin/GalleryPage";
import ContactPage from "./pages/Admin/ContactPage";
import NewsPage from "./pages/Admin/NewsPage";
import CollectionPage from "./pages/Admin/CollectionPage";
import Announcement from "./pages/Admin/Announcement";
import Employees from "./pages/Admin/Employees";
import Admins from "./pages/Admin/Admins";

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      {/* Admin panel */}
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="gallery" element={<GalleryPage/>}/>
        <Route path="contact" element={<ContactPage/>}/>
        <Route path="news" element={<NewsPage/>}/>
        <Route path="collection" element={<CollectionPage/>}/>
        <Route path="announcement" element={<Announcement/>}/>
        <Route path="employees" element={<Employees/>}/>        
        <Route path="admins" element={<Admins/>}/>
      </Route>
    </Routes>
  );
}

export default App;
