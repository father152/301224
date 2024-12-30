import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";
import "./header.css"


function Header() {
  return (
    <div className="header">
     Header
     <Link to='/'><img src={logo} alt="pic"></img></Link>
     
     
    </div>
  );
}
export { Header };
