import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import "./styles.css";

export default function Game() {
  return (
    <>
      <GuessResults />

      <GuessInput />
    </>
  );
}
