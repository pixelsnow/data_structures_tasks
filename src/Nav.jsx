import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.menu}>
      <ul>
        <li>
          <NavLink to="/task1">Task 1</NavLink>
        </li>
        <li>
          <NavLink to="/task2">Task 2</NavLink>
        </li>
        <li>
          <NavLink to="/task3">Task 3</NavLink>
        </li>
        <li>
          <NavLink to="/task4">Task 4</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
