import Sidebar from './components/Sidebar'
import PrimaryPanel from './PrimaryPanel'

const AdminLayout = () => {

    return (
        <div className='min-h-screen flex bg-side'>
            <Sidebar />
            <PrimaryPanel/>
        </div>
    )
}

export default AdminLayout