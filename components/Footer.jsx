import React from 'react'
import { app, google, logo } from '../assets'
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-main-div container">
        <div className="footer-head">
            <div className="logo">
                <NavLink to={'./home'}>
                <img src={logo} alt="logo" />
                </NavLink>
            </div>
            <div className="footer-icons">
                <BsYoutube className='icon'/>
                <BsInstagram className='icon'/>
                <BsFacebook className='icon'/>
            </div>
        </div>

        <div className="footer-links grid grid-four container">
            <ul>
                <li>
                    <NavLink to={"/about"} className="link">
                    About Us</NavLink>
                </li>
                <li>
                    <NavLink to={"/mitao-bhook"} className="link">
                    Mitao Bhook</NavLink>
                </li>
                <li>
                    <NavLink to={"/scholarship"} className="link">
                    Mitao Bhook - Scholarship</NavLink>
                </li>
                <li>
                    <NavLink to={"/privacy"} className="link">
                    Privacy Policy</NavLink>
                </li>
                <li>
                    <NavLink to={"/careers"} className="link">
                    Careers</NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    <NavLink to={"/contact"} className="link">
                        Contact Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/store"} className="link">
                        Store Locator
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/track"} className="link">
                        Track Order
                    </NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    <NavLink to={"/terms"} className="link">
                        Terms & Conditions
                    </NavLink>
                </li>
            </ul>

            <div className="footer-app-img">
                <img src={app} alt="app" />
                <img src={google} alt="google" />
            </div>
        </div>

        <div className="footer-foot">
            <div className="left">
                <p>
                    2023 KFC. All rights reserved
                </p>
            </div>
            <div className="right">
                <h4>Powered by</h4>
                <a href='https://cosmixclone.vercel.app/'>
                    Simple Technology Solutions
                </a>
            </div>

        </div>
        </div>
    </footer>
  )
}

export default Footer