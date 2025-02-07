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
            <Link to="/foto"><img src="https://picsum.photos/id/77/225/200" alt=""></img></Link>
            <LoremIpsum />
            <Link to="/foto"><img src="https://picsum.photos/id/76/225/200" alt=""></img></Link>
            
          </p>
        </div>

        <div className="container-center">
          <h2>CENTER</h2>
          <p>
            <LoremIpsum />
            <Link to="/"><img src="https://picsum.photos/id/89/225/100" alt=""></img></Link>
            <LoremIpsum />
            <Link to="/"><img src="https://picsum.photos/id/98/225/100" alt=""></img></Link>
            <LoremIpsum />
            <Link to="/"><img src="https://picsum.photos/id/96/225/100" alt=""></img></Link>
            <LoremIpsum />
            <LoremIpsum />
          </p>
        </div>

        <div className="container-right">
          <h2>RIGHT</h2>
          <p>
            <LoremIpsum />
            <Link to="/"><img src="https://picsum.photos/id/83/225/100" alt=""></img></Link>
            <LoremIpsum />
            <Link to="/"><img src="https://picsum.photos/id/101/225/100" alt=""></img></Link>
            <LoremIpsum />
            <Link to="/"><img src="https://picsum.photos/id/102/225/100" alt=""></img></Link>
            <LoremIpsum />
          </p>
        </div>
      </div>
    </div>
  );
}
export { Main };
