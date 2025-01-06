import React from "react";
import "./main.css";
import LoremIpsum from "react-lorem-ipsum";
import { Link } from "react-router-dom";



function Main() {
  return (
    <div className="main">
      <div className="container-main">
        <div className="container-left">
          <h2>LEFT</h2>
          <p>
            <LoremIpsum />
            <Link to="/foto"><img src="https://picsum.photos/id/78/225/200" alt=""></img></Link>
            <LoremIpsum />
          </p>
        </div>

        <div className="container-center">
          <h2>CENTER</h2>
          <p>
            <LoremIpsum />
            <img src="https://picsum.photos/id/50/700/200" alt=""></img>
            <LoremIpsum />
            <img src="https://picsum.photos/id/62/700/200" alt=""></img>
            <LoremIpsum />
            <img src="https://picsum.photos/id/65/700/200" alt=""></img>
          </p>
        </div>

        <div className="container-right">
          <h2>RIGHT</h2>
          <p>
            <LoremIpsum />
            <img src="https://picsum.photos/id/79/225/200" alt=""></img>
            <LoremIpsum />
          </p>
        </div>
      </div>
    </div>
  );
}
export { Main };
