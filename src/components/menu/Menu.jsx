import React from "react";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <div className="menu-header">
        <h1>Sign-Out</h1>
      </div>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about-me">A#232435643</a>
        </li>
      </ul>
    </div>
  );
}
