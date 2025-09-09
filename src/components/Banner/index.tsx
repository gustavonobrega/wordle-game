import type { ReactNode } from "react";

import './styles.css'

interface BannerProps {
  status: string
  children: ReactNode
}

function Banner({ status, children }: BannerProps) {
  return <div className={`${status} banner`}>{children}</div>;
}

export default Banner;