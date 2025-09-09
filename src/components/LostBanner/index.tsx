import Banner from '../Banner';

import './styles.css'

interface LostBannerProps {
  answer: string
  handleRestart: () => void
}

export default function LostBanner({ answer, handleRestart }: LostBannerProps) {
  return (
    <Banner status="lost" action={handleRestart}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}