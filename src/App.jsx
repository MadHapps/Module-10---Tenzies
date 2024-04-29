import { useState } from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
  const randomDieValueArray = () => Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1)
  const [dice, setDice] = useState(randomDieValueArray)
  const diceElements = dice.map((dieValue, index) => <Die key={index} value={dieValue} /> )

  function roll() {
    setDice(randomDieValueArray)
  }

  return (
    <main>
      <section className="title">
        <h1>Tenzies</h1>
        <h2>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </h2>
      </section>
      <ul className="die-wrapper">
        {diceElements}
      </ul>
      <button onClick={roll}>Roll</button>
    </main>
  );
}

export default App;
