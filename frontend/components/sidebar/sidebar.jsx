import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <div className="side-bar">
      <h1 className="rela-block logo white small">
        <Link to="/browse"><img className="logo-img" src={window.whiteSpot} />Spoodify</Link>
      </h1>

      <ul className="rela-block side-bar-nav">
        <li>
          <Link to="/search"
            className={"app-link thick"+((props.match.params.section === "search") ? " active" : "")}>
            <div className="rela-inline svg-container nav">
              <svg viewBox="0 0 140 140" className="rela-block svg search">
                <circle cx="60" cy="60" r="45"/>
                <path d="M 90 90 L 125 125"/>
              </svg>
            </div>
            Search
          </Link>
        </li>
        <li>
          <Link to="/browse"
            className={"app-link thick"+((props.match.params.section === "browse") ? " active" : "")}>
            <div className="rela-inline svg-container nav">
              <svg viewBox="0 0 140 140" className="rela-block svg home">
                <path d="M 20 130 L 20 60 L 70 20 L 120 60 L 120 130 L 85 130 L 85 90 L 55 90 L 55 130 Z"/>
              </svg>
            </div>
            Home
          </Link>
        </li>
        <li>
          <Link to="/collection"
            className={"app-link thick"+((props.match.params.section === "collection") ? " active" : "")}>
            <div className="rela-inline svg-container nav">
              <svg viewBox="0 0 140 140" className="rela-block svg collection">
                <path d="M 10 20 L 10 120"/>
                <path d="M 40 20 L 40 120"/>
                <path d="M 70 20 L 115 120"/>
              </svg>
            </div>
            Your Library
          </Link>
        </li>
      </ul>

      <div className="rela-block user-info">
        <button className="rela-inline button small outline resizing"
                onClick={() => { props.logout(); props.clearPlayer(); }}>
          Log Out
        </button>
        <div className="rela-inline flex-parent user-container">
          <div className="user-img"></div>
          <p>{props.currentUser.username}</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
