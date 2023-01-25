import React from 'react'
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <h2 className='logo'>Floral Studio</h2>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler"><MenuIcon/></label>
        <div className="menu">
            <ul className='list'>
                <li><Link id="link">Home</Link></li>
                <li><Link id="link">Add</Link></li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar