import { Outlet } from "react-router";
const PrimaryPanel = ({ minimize }) => {
  return (
    <div
      className={`${minimize ? "w-38/40" : "w-8/10"} transition-all ease duration-500  h-screen p-10 bg-bg text-black rounded-l-4xl shadow-[-10px_0px_30px_rgba(0,0,0,1)]`}
    >
      <Outlet />
    </div>
  );
};

export default PrimaryPanel;
