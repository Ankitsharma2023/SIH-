import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar () {
  return (
    <>
      <nav className="navbar">
        {/* <img src = "profile.png" alt =""/> */}

        <ul className="nav_list">
          <li className="nav-list">
            <NavLink to="/">Home</NavLink>
          </li>

          <li className="nav-list">
            <NavLink to="/jobs">Job</NavLink>
          </li>

          <li className="nav-list">
            <NavLink to="Cource">Course</NavLink>
          </li>

          <li className="nav-list">
            <NavLink to="//skillasses">Skill_Asses</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
