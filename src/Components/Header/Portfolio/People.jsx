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

      <input value={text} onChange={handleChange} />
      <input value={text1} onChange={handleChange1} />
      <p>You typed: {text}</p>
      <p>You size: {text1}</p>
      <div className="repit">
        <p className="eng">
          <LoremIpsum />
        </p>
        <p className="ukr">
          Результати дивують, оскільки українці, які тікають від вторгнення
          Росії в їхню країну, зазвичай можуть дістати захист і тимчасове
          проживання в будь-якій країні ЄС. Їм також дозволено подорожувати в
          межах Шенгенської зони для відпочинку", - зауважили журналісти.
        </p>
      </div>
      <button onClick={changeLanguage}>eng</button>
      <button onClick={changeLanguage}>ukr</button>
      <br></br>
    </div>
  );
}

export { People };
