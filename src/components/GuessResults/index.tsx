import { range } from "../../utils/range";
import { NUM_OF_GUESSES_ALLOWED } from "../../utils/constants";

import './styles.css'
import Guess from "../Guess";

export default function GuessResults() {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} />
      ))}
    </div>
  );
}


