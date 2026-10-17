import { Outlet } from "react-router";
const PrimaryPanel = ({ minimize }) => {
  return (
    <div
      className={`${minimize ? "lg:w-36/40 xl:w-37/40 2xl:w-38/40" : "w-9/11"} h-screen p-5 bg-bg text-black rounded-l-4xl shadow-[-10px_0px_30px_rgba(0,0,0,1)] transition-all ease duration-500`}
    >
      <Outlet />
    </div>
  );
};

export default PrimaryPanel;
