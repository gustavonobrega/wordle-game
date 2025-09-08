import { checkGuess } from "../../utils/game-helper";
import { range } from "../../utils/range";

import "./styles.css";

interface GuessProps {
  value: string;
  answer: string;
}

export default function Guess({ value, answer }: GuessProps) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={result ? `cell ${result[num].status}` : "cell"}
        >
          {result ? result[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}
