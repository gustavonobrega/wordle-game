import { NUM_OF_GUESSES_ALLOWED } from "../../utils/constants";
import { range } from "../../utils/range";
import GuessInput from "../GuessInput";

import "./styles.css";

export default function Game() {
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <p key={num} className="guess">
            {range(5).map((num) => (
              <span key={num} className="cell"></span>
            ))}
          </p>
        ))}
      </div>

      <GuessInput />
    </>
  );
}
