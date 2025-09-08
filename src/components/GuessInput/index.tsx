import { useState } from "react";

import "./styles.css";

function GuessInput() {
  const [tentativeGuess, setTentativeGuess] = useState('');

  return (
    <form className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => setTentativeGuess(event.target.value.toLocaleUpperCase())}
        required
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default GuessInput;
