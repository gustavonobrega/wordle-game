import { useState, type FormEvent } from "react";

import "./styles.css";

interface GuessInputProps {
  handleSubmitGuess: (tentativeGuess: string) => void;
  gameStatus: string
}

function GuessInput({ handleSubmitGuess, gameStatus }: GuessInputProps) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) =>
          setTentativeGuess(event.target.value.toLocaleUpperCase())
        }
        title="5 letter word"
        disabled={gameStatus !== 'running'}
        required
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default GuessInput;
