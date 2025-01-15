import React, { useState } from "react";
import {Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen] = useState(false);
  const [userName, setUserName] = useState("");
 
  return (
    <nav>
      <Link className="title" to="/home">
        VitrinaOnline
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>  
      <ul className={menuOpen ? "open" : "closed"}>
        <li>
          <NavLink to="/home">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/servicios">Servicios</NavLink>
        </li>
        <li>
          <NavLink to="/contacto">Contacto</NavLink>
        </li>


      </ul>
    </nav>
  );
};

export default Navbar;
