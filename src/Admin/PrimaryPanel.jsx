import { Outlet } from "react-router"
const PrimaryPanel = () => {
  return (
    <div className='w-8/10 h-screen p-10 bg-bg text-black rounded-l-4xl shadow-[-10px_0px_30px_rgba(0,0,0,1)] '>
        <Outlet/>
    </div>
  )
}

export default PrimaryPanel