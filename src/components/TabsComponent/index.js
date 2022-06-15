import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Tabs = () => {
  const linkActive = ({ isActive }) => (isActive ? "is-active" : "");

  return (
    <div className="tabs">
      <ul>
        <li>
          <NavLink to="/elements" className={linkActive}>
            Element
          </NavLink>
        </li>

        <li>
          <NavLink to="/sections" className={linkActive}>
            Sections
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={linkActive}>
            Details
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
