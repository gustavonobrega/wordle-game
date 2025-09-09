import Banner from "../Banner";

import "./styles.css";

interface WonBannerProps {
  numOfGuesses: number;
  handleRestart: () => void;
}

export default function WonBanner({
  numOfGuesses,
  handleRestart,
}: WonBannerProps) {
  return (
    <Banner status="won" action={handleRestart}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}
