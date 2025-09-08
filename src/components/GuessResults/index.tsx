import { range } from "../../utils/range";
import { NUM_OF_GUESSES_ALLOWED } from "../../utils/constants";

import "./styles.css";
import Guess from "../Guess";

interface GuessResultsProps {
  guesses: string[];
  answer: string;
}

export default function GuessResults({ guesses, answer }: GuessResultsProps) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guesses[num]} answer={answer} />
      ))}
    </div>
  );
}
