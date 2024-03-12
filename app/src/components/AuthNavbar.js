import React, {Fragment, useState} from 'react'
import Weather from './Weather'
import './Navbar.css'
import Sidebar from './Sidebar'
import { SidebarData } from './SidebarData'

const AuthNavbar = () => {
    const [sidebar, setSideBar] = useState(false);

    const showSidebar = () =>(!sidebar);

    return (
        <div className='navbar'>
            <div className='nav'>
        
                <div>
                    <Weather />
                </div>
                
            </div>
        </div>
    )
}

export default AuthNavbar 