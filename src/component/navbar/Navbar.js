import React from 'react';
import "./navbar.css";
import Logo from "../../img/Logo.png";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";


function Navbar() {
  return (
    <div className="navbar">
      <div className="flex  justify-center items-center space-x-8 ">
        <img alt="logo" className="w-20" src={Logo} />
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/resume">RESUME</Link>
        <Link to="/projects">PROJECTS</Link>
      </div>
    </div>
  )
}

export default Navbar;