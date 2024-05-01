import { useEffect, useState } from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
  const [game, setGame] = useState({ clicks: 0, won: false });
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
    setGame((prevGame) => ({
      prevGame,
      clicks: prevGame.clicks + 1,
    }));

    setDice((prevDice) =>
      prevDice.map((die) =>
        die.isHeld
          ? { ...die }
          : { ...die, value: Math.ceil(Math.random() * 6) }
      )
    );
  }

  useEffect(() => {
    const isWon = dice.every((die) => die.value === dice[0].value);
    const allHeld = dice.every((die) => die.isHeld === dice[0].isHeld);
    isWon && allHeld && console.log("YOU WON!!");
  }, [dice]);

  return (
    <main>
      <section className="title">
        <h1>Tenzies</h1>
        <h2>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </h2>
        <h3>Count: {game.clicks}</h3>
      </section>
      <ul className="die-wrapper">{diceElements}</ul>
      <button onClick={roll}>Roll</button>
    </main>
  );
}

export default App;
