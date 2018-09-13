import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <div className="side-bar">
      <h1 className="rela-block logo white small">
        <Link to="/browse">Spoodify</Link>
      </h1>

      <ul className="rela-block side-bar-nav">
        <li>
          <Link to="/search"
            className={"app-link thick"+((props.match.params.section === "search") ? " active" : "")}>
            Search
          </Link>
        </li>
        <li>
          <Link to="/browse"
            className={"app-link thick"+((props.match.params.section === "browse") ? " active" : "")}>
            Browse
          </Link>
        </li>
        <li>
          <Link to="/collection"
            className={"app-link thick"+((props.match.params.section === "collection") ? " active" : "")}>
            Collection
          </Link>
        </li>
      </ul>

      <div className="rela-block user-info">
        <h2>Hello, {props.currentUser.username}!</h2>
        <button onClick={props.logout}>Log Out</button>
      </div>
    </div>
  );
}

export default Sidebar;
