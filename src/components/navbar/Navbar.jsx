import React from "react";
import "./navbar.scss";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")} id="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="" className="logo">
            Reunification
          </a>
          <div className="itemContainer">
            <span id="phone-number">Something</span>
            <i class="fas fa-envelope" id="envelope">
              <span id="email-address">Something</span>
            </i>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
