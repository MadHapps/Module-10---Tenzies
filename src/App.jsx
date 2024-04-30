import { useEffect, useState } from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = useState(randomDieValueArray());
  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      id={die.id}
      value={die.value}
      holdDie={() => holdDie(die.id)}
      isHeld={die.isHeld}
    />
  ));

  function randomDieValueArray() {
    return Array.from({ length: 10 }, () => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }

  function holdDie(id) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : { ...die }
      )
    );
  }

  function roll() {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.isHeld
          ? { ...die }
          : { ...die, value: Math.ceil(Math.random() * 6) }
      )
    );
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
      <ul className="die-wrapper">{diceElements}</ul>
      <button onClick={roll}>Roll</button>
    </main>
  );
}

export default App;
