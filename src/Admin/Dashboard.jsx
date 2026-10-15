import { useState } from 'react'
import Sidebar from './components/Sidebar'
import PrimaryPanel from './PrimaryPanel'

const Dashboard = () => {
    const [active, setActive] = useState("dashboard");

    return (
        <div className='min-h-screen flex bg-primary text-text-wt'>
            <Sidebar active={active} setActive={setActive}/>
            <PrimaryPanel/>
        </div>
    )
}

export default Dashboard