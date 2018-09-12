import React from 'react';
import { Link } from 'react-router-dom';

const Browse = (props) => {
  return (
    <div className="browse-container">
      <div className="header">
        <h1 className="logo">
          <Link to="/browse">Spoodify</Link>
        </h1>
        <div className="header-info">
          <h2>Hello, {props.currentUser.username}!</h2>
          <button onClick={props.logout}>Log Out</button>
        </div>
      </div>

      <p>Render other browse components based on the route</p>
    </div>
  );
}

export default Browse;
