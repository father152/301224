import React from "react";
import "./example.css";


function handleClick() {
const father = document.getElementById("welcome")
father.style.color="white"
}
function handleClick1() {
  const father = document.getElementById("welcome")
  father.style.color="red"
  }
function handleClick2() {
  const father1 = document.getElementById("welcome2")
  const father2 = document.getElementById("welcome3")
  father1.style.display="none"
  father2.style.display="block"
  }
  function handleClick3() {
  const father2 = document.getElementById("welcome3")
  const father1 = document.getElementById("welcome2")
  father1.style.display="block"
  father2.style.display="none"
  }
function Example() {
  return (
    <div className="example">
      <h3>Example</h3>
      <form action="" method="get" class="form-example">
        <div class="form-example">
          <label for="name">Enter your name: </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div class="form-example">
          <label for="email">Enter your email: </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div class="form-example">
          <input type="submit" value="Subscribe!" />
        </div>
      </form>

<h4 id="welcome">WELCOME !</h4>
<button onClick={handleClick}>White</button>
<button onClick={handleClick1}>Red</button>
<br></br>
<h4 id="welcome2" className="visib">Europe is determined to take responsibility for its security and is capable of winning the arms race imposed on it by Russia, Polish Prime Minister Donald Tusk said upon his arrival at the EU summit in Brussels, European Truth reports on Thursday, March 6.</h4>
<h4 id="welcome3">Європа рішуче налаштована у взятті відповідальності за свою безпеку і здатна виграти у гонці озброєнь, яку нав'язує їй Росія. Про це заявив прем'єр-міністр Польщі Дональд Туск по прибутті на саміт ЄС у Брюсселі, передає Європейська правда в четвер, 6 березня.</h4>
<button onClick={handleClick2}>UKR</button>
<button onClick={handleClick3}>ENG</button>
    </div>
  );
}
export { Example };
