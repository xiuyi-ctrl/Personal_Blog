import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  duration?: number;
  delay?: number;
  className?: string;
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function parseValue(raw: string): { num: number; prefix: string; suffix: string } {
  const match = raw.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: raw };
  return {
    num: parseFloat(match[2]),
    prefix: match[1],
    suffix: match[3],
  };
}

export default function CountUp({
  value,
  duration = 1500,
  delay = 0,
  className = "",
}: CountUpProps) {
  const [displayValue, setDisplayValue] = useState<string>(() => {
    const { prefix, suffix } = parseValue(value);
    return `${prefix}0${suffix}`;
  });
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            setTimeout(() => setIsVisible(true), delay);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const { num, prefix, suffix } = parseValue(value);
    if (num === 0 && value === "∞") {
      setDisplayValue(value);
      return;
    }

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      const current = Math.floor(num * eased);
      setDisplayValue(`${prefix}${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className={className}>
      {displayValue}
    </div>
  );
}