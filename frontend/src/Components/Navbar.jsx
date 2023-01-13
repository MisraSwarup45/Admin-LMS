import React, { useState } from 'react';
import logo from '../images/logo.png';

// revenue
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        }
        else {
            setNav(false);
        }
    };
    window.addEventListener("scroll", changeBackground);
    return (
        <nav className={nav?'nav active': 'nav'} >
            <a href='#main' className='logo'>
                <img src={logo} alt='lms' />
            </a>
            <imput type='checkbox' className='menu-btn' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href='#main'>HOME</a></li>
                <li><a href='#courses'>COURSES</a></li>
                <li><a href='#quizzes'>Quizzes</a></li>
                <li><a href='#statistics'>Statistics</a></li>
                <li><a href='#revenue'>Revenue Statistics</a></li>
                {/* <li><div className="button" onClick={() => setLoginUser({})} >Logout</div></li> */}
            </ul>
        </nav>
    )
}

export default Navbar;