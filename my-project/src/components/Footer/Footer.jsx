import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum explicabo illum, sunt aperiam iusto mollitia nisi aspernatur iste, maiores tempore, molestias dolore perferendis optio iure nulla. Sapiente ab minus consectetur.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>AboutUs</li>
                    <li>Delivery</li>
                    <li>Privecy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH </h2>
                <ul>
                    <li>+1-5676-34-432-4-234-</li>
                    <li>Samosa@gmail.com</li>
                </ul>
            </div>
        </div>
    <hr/>
    <p className="footer-copyright"> Copyright 2024 &copy; Tomato.com - All rights reserved.</p>

    </div>
  )
}

export default Footer