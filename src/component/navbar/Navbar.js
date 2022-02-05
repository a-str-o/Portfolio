import React from 'react';
import "./navbar.css";
import Logo from "../../img/Logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
        <img className="object-cover h-10 w-20" src={Logo} />
    </div>
  )
}
