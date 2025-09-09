import Banner from '../Banner';

import './styles.css'

interface LostBannerProps {
  answer: string
}

export default function LostBanner({ answer }: LostBannerProps) {
  return (
    <Banner status="lost">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}