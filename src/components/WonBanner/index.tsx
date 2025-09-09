import Banner from '../Banner';

import './styles.css'

interface WonBannerProps {
  numOfGuesses: number
}

export default function WonBanner({ numOfGuesses }: WonBannerProps) {
  return (
    <Banner status="won">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}
