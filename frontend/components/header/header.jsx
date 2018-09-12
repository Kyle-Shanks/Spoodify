import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  let headerInfo;
  if (props.currentUser) {
    headerInfo = (
      <div className="header-info">
        <h2>Hello, {props.currentUser.username}!</h2>
        <button onClick={props.logout}>Log Out</button>
      </div>
    );
  } else {
    headerInfo = (
      <div className="header-info">
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Login</Link>
      </div>
    );
  }
  return (
    <div className="header">
      <h1 className="logo">
        <Link to="/">Spoodify</Link>
      </h1>
      {headerInfo}
    </div>
  );
}

export default Header;
