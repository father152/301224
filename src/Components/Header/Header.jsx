import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="pic"></img>
        </Link>
      </div>
      <div className="title">
        <ul className="title-item">
          <li>
            <Link to="/catalogue">CATALOGUE</Link>
          </li>
          <li>
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export { Header };
