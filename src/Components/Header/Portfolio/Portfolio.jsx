import React from "react";
import "./portfolio.css";
import { People } from "./People";


function Portfolio() {
  return (
    <div className="portfolio">
      <h2>PORTFOLIO</h2>
<People />
      <div className="container_portfolio"></div>
    </div>
  );
}
export { Portfolio };
