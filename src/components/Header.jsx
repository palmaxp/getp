import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";
import "../Styles/Header.css";

export const Header = () => {
  return (
    <header>
      <div className="header container">
        <NavLink to="/" className="logo">
          <img src={logo} alt="Logo" />
        </NavLink>
        <nav>
          <NavLink className="li" to="/Pokemon">
            Pokemon
          </NavLink>
          <NavLink className="li" to="/Pokedex">
            Pokedex
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
