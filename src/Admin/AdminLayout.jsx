import { useState } from "react";
import Sidebar from "./components/Sidebar";
import PrimaryPanel from "./PrimaryPanel";

const AdminLayout = () => {
  const [minimize, setMinimize] = useState(false);

  return (
    <div className="min-h-screen flex bg-side">
      <Sidebar minimize={minimize} setMinimize={setMinimize}/>
      <PrimaryPanel minimize={minimize}/>
    </div>
  );
};

export default AdminLayout;
