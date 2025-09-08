import { range } from "../../utils/range";

import './styles.css'

export default function Guess() {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell"></span>
      ))}
    </p>
  );
}
