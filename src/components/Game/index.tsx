import { useState } from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

import { NUM_OF_GUESSES_ALLOWED } from "../../utils/constants";
import { randomWord } from "../../utils/random-word";
import { WORDS } from "../../data";

import "./styles.css";

export default function Game() {
  const [answer, setAnswer] = useState(randomWord(WORDS));
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<"running" | "won" | "lost">(
    "running"
  );

  console.log(answer)

  function handleSubmitGuess(tentativeGuess: string) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  function handleRestart() {
    setAnswer(randomWord(WORDS));
    setGuesses([]);
    setGameStatus("running");
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />

      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />

      {gameStatus === "won" && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}
