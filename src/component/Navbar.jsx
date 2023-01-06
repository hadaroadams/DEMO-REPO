import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../Assets/images/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

function Navbar() {
    const [menu, setMenu] = useState(false)
    const menuChange = () => setMenu(!menu)
    console.log(menu)
  return (
    <div className='navbar'>
        <div className="leftside-nav">
            <img src={Logo} alt="" className='logo'/>
        </div>
        <div className="rightside-nav">
            <ul className={menu?'enable':'disenable'}>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>New</a></li>
                <li><a href='/'>Popular</a></li>
                <li><a href='/'>Trending</a></li>
                <li><a href='/'>Categories</a></li>
            </ul>
        </div>
        
        
    </div>
  )
}

export default Navbar
