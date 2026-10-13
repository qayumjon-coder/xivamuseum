import React from 'react'
import Sidebar from './components/Sidebar'
import PrimaryPanel from './PrimaryPanel'

const Dashboard = () => {
    return (
        <div className='min-h-screen flex bg-primary text-text-wt'>
            <Sidebar />
            <PrimaryPanel/>
        </div>
    )
}

export default Dashboard