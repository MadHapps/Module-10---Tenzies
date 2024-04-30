/* eslint-disable react/prop-types */
import "./die.css";

export default function Die({ value, holdDie, isHeld }) {
  const className = isHeld ? "die isHeld" : "die";

  return (
    <li onClick={holdDie} className={className}>
      {value}
    </li>
  );
}
