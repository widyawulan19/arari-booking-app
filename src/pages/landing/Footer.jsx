import React from "react";
import '../../styles/Landing/Highlights.css'
import { FaTwitter, FaInstagram } from "react-icons/fa";
import logo from '../../assets/logo3.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-left">
          <div className="logo">
            {/* <div className="logo-box"></div> */}
            <div>
                <img src={logo} alt="" />
            </div>
            <h3>Arrary Sport</h3>
          </div>
          <p>© {new Date().getFullYear()} CourtReserve Sport Systems. All rights reserved.</p>
          <p className="dev-credit">
            Powered by Luminous Labs
            </p>
        </div>

        {/* Right */}
        <div className="footer-right">
          <div className="social">
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
          </div>

          <div className="links">
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;