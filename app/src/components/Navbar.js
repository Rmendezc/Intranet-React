import React, {useState} from 'react'

import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav'>
                <img className='logo' alt="canyon security logo" src={require('../components/assets/Canyonsecuritylogo.png')}/>
            
                <h1 className='header'>Canyon Security Portal</h1>
                
            </div>
        </div>
    )
}

export default Navbar 