import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div className="rela-block footer-content">
      <div className="rela-block flex-parent">
        <div className="logo small white">
          <Link to="/"><img className="logo-img" src={window.whiteSpot} />Spoodify</Link>
        </div>
        <div className="links-container">
          <h4>Useful Links</h4>
          <ul className="footer-links">
            <li><a href="https://github.com/Kyle-Shanks/Spoodify" className="white">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/kyle-shanks-27088174/" className="white">LinkedIn</a></li>
            <li><a href="https://github.com/Kyle-Shanks" className="white">Developer Info</a></li>
          </ul>
        </div>
        <div className="links-container">
          <h4>Other Links</h4>
          <ul className="footer-links">
            <li><Link to="/signup" className="white">Sign Up</Link></li>
            <li><Link to="/login" className="white">Log In</Link></li>
          </ul>
        </div>
      </div>
      <div className="rela-block copyright">© 2018 Spoodify ;)</div>
    </div>
  )
}

export default Footer;
