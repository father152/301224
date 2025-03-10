import React from "react";
import { useState } from "react";
import "./people.css";
import LoremIpsum from "react-lorem-ipsum";
import { Example } from "./Example";

function People() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }
  function handleChange1(e) {
    setText1(e.target.value);
  }

  let languageEng = document.getElementsByClassName("eng");
  function changeLanguage() {
    languageEng.style.display = "block";
  }

  function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
  
      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    }
  }

  return (
    <div className="people">
      <Example />

      <div className="counter">
        <p>Ви натиснули {count} разів</p>
        <button onClick={() => setCount(count + 1)}>Додати</button>
        <button onClick={() => setCount(count - 1)}>Відняти</button>
      </div>
      <br></br>
      <br></br>

      
      <br></br>
      <br></br>
      <canvas className="canvas" id="tutorial" width="150" height="150">
    
      </canvas>
    </div>
  );
}

export { People };
