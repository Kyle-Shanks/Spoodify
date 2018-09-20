import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

const Splash = (props) => {
  document.title = 'Spoodify';
  return (
    <div className="splash-container">
      <div className="nav-bar">
        <div className="gutter-container">
          <h2 className="logo small white">
            <Link to="/"><img className="logo-img" src={window.whiteSpot} />Spoodify</Link>
          </h2>
          <div className="nav-links">
            <Link className="white" to='/signup'>Sign Up</Link>
            <Link className="white" to='/login'>Log In</Link>
          </div>
        </div>
      </div>

      <div className="rela-block hero-container">
        <img src={window.heroSVG} className="abs-center hero-background-svg" />
        <div className="abs-center">
          <h1 className="splash-pop-text">Music for everyone.</h1>
          <h4>Millions of songs. No credit card needed.</h4>
          <Link to="/signup" className="rela-inline button big">Get Spoodify Free</Link>
        </div>
      </div>
      <footer className="rela-block splash-footer">
        <div className="gutter-container">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default Splash;
