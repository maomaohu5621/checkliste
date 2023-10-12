import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PetsIcon from '@mui/icons-material/Pets';
import { NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <PetsIcon className="navbar-icon" />
              Home
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <CloseIcon style={{ color: 'white' }}/> : <MenuIcon style={{ color: 'white' }}/>}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/highlevel"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  High Level
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/highlevelbereiche"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  HighLevel Bereiche
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>    
  );
}

export default Navbar;