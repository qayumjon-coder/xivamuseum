import React from 'react'
import { MdSpaceDashboard } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

const Sidebar = () => {
    const [isActive, setIsActive] = React.useState(false);
    const links = [
        { name: 'Dashboard', icon: <MdSpaceDashboard size={20} /> },
        { name: 'Users', icon: <FaUsers size={20} /> },
        { name: 'Settings', icon: <IoMdSettings size={20} /> }
    ]

    return (
        <div className='w-2/10 h-screen p-[0.1px]'>
            <div className='flex items-center bg-bg mx-5 rounded-xl gap-10 mt-10 py-2.5'>
                <button>
                    <img className="w-20" src="/logo.png" alt="Logo" />
                </button>
                <h2 className="text-text-wt text-[22px]">Sidebar</h2>
            </div>

            {/* Bu yerda linklar bor bro */}

            <div className='flex flex-col gap-2.5 mt-10 mx-5'>
                <ul>
                    {links.map((link, i) => (
                        <li key={i} className='w-full mb-0.5'>
                            <button onClick={() => setIsActive(true)} className='relative flex w-full items-center gap-5 p-2 rounded-xl cursor-pointer hover:bg-bg transition-all duration-200'>
                                <div className='absolute inset-0 bg-ac rounded-md opacity-0 hover:opacity-100 transition-opacity duration-200'></div>
                                <span className='p-3 bg-bg rounded-md'>{link.icon}</span>
                                <span>{link.name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar