import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar({ toggleDarkMode }) {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <h2> Bean House☕</h2>

      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <ul className={open ? "nav-links active" : "nav-links"}>
        <li>
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/About" onClick={() => setOpen(false)}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/Menu" onClick={() => setOpen(false)}>
            Menu
          </NavLink>
        </li>

        <li>
          <NavLink to="/Contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>

      <button onClick={toggleDarkMode}>🌙</button>
    </nav>
  );
}

export default Navbar;
