import { useState } from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import { randomWord } from "../../utils/random-word";
import { WORDS } from "../../data";

import "./styles.css";

const answer = randomWord(WORDS);

export default function Game() {
  const [guesses, setGuesses] = useState<string[]>([]);

   function handleSubmitGuess(tentativeGuess: string) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
  }

  return (
    <>
       <GuessResults guesses={guesses} answer={answer} />

      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}
