import { useState } from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import "./styles.css";

export default function Game() {
  const [guesses, setGuesses] = useState<string[]>([]);

   function handleSubmitGuess(tentativeGuess: string) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResults  />

      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}
