import React from 'react';
import Navbar from './Navbar';
import Courses from './Courses';
import Statistics from './Statistics';
import RevenueStatistics from './RevenueStatistics';
import Footer from './Footer/Footer';

const Header = ({setLoginUser}) => {
    return (
        <>
            <div id='main'>
                <Navbar />
                <div className='name'>
                    <h1><span>Welcome</span> 👋 Admin</h1>
                    <h4>Lerner wants To Learn This is the Platform</h4>
                </div>
            </div>
            <Courses />
            <Statistics />
            <br></br>
            <RevenueStatistics />
            <div className="logout-btn" onClick={() => setLoginUser({})} >Logout</div>
            <Footer />
        </>
    )
}

export default Header;