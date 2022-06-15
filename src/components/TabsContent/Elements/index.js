import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Elements from "./data";
import "./styles.scss";

const ElementSection = () => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  return (
    <div className="box Elements">
      <nav className="panel">
        <div className="panel-block">
          <p className="control has-icons-left">
            <input
              type="text"
              className="input"
              onChange={handleFilterChange}
              placeholder="Search an element"
              value={filter}
            />
            <span className="icon is-left">
              <FontAwesomeIcon icon={solid("search")} />
            </span>
          </p>
        </div>
        <div className="list">
          {Elements.filter((x) => {
            if (filter.length <= 0) return true;
            return x.name.toLowerCase().search(filter.toLowerCase()) >= 0;
          }).map((el) => (
            <NavLink className="panel-block" key={el.id} to={el.id}>
              <FontAwesomeIcon icon={solid("hashtag")} /> {el.name}
            </NavLink>
          ))}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default ElementSection;
