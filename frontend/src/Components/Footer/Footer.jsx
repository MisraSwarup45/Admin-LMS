import React from 'react'
import './Footer.css'
import logo from "../../images/logo.png";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div>
            <div className="footer">
                <div className='subfooter'>
                    <div className='Payment_methods'>
                        <img src='https://i.imgur.com/DQ26UNt.png' className='payement_method' alt='paypal' />
                        <img src='https://i.imgur.com/wwAm2Kf.png' className='payement_method' alt='Visa' />
                        <img src='https://i.imgur.com/1jOWC2T.png' className='payement_method' alt='MasterCard' />
                        <img src='https://i.imgur.com/4hSZUH2.png' className='payement_method' alt='Stripe' />
                    </div>
                    <div>
                        <img alt='lms' src={logo} className='footer_logo' />
                    </div>
                </div>
                <div className='main_footer'>
                    <div className='get_in_contact'>
                        <h1>Get in Contact</h1>
                        <ul>
                            <li className='lined'>ABOUT US</li>
                            <li className='lined'>CONTACT US</li>
                            <li className='lined'>DISCOVER LIFE MAKERS ACADEMY </li>
                        </ul>
                    </div>

                    <div className='socialmedia_links'>
                        <h1>Follow Us</h1>
                        <div>
                            <img src='https://i.imgur.com/pfcIVI9.png' alt='facebook' className='social_icons' />
                            <img src='https://i.imgur.com/CBAfZK8.png' alt='instagram' className='social_icons' />
                            <img src='https://i.imgur.com/zBvGrB2.png' alt='twitter' className='social_icons' />
                        </div>

                    </div>
                </div>
                <div className='logo_copyright'>
                    <img alt='LMS' src={logo} className='footer_logo' />
                    <div className='copyright'>
                        Copyright ?? {year} LMS All Rights Reserved.
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;
