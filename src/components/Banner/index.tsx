import type { ReactNode } from "react";

import "./styles.css";

interface BannerProps {
  status: string;
  children: ReactNode;
  action: () => void;
}

function Banner({ status, action, children }: BannerProps) {
  return (
    <div className={`${status} banner`}>
      {children}
      {action && <button onClick={action}>Restart</button>}
    </div>
  );
}

export default Banner;
