"use client";

import { useCounterAnimation } from "../hooks/use-counter-animation";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  start: boolean;
  className?: string;
}

export function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
  start,
  className = "",
}: AnimatedCounterProps) {
  const count = useCounterAnimation(end, duration, start);

  return (
    <span className={className}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
