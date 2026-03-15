'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 15, suffix: '+', label: 'Years in Product' },
  { value: 5,  suffix: '',  label: 'Utility Patents' },
  { value: 5,  suffix: 'M+', label: 'Units Shipped' },
  { value: 30, suffix: '+', label: 'Active SKUs' },
  { value: 87, suffix: '%', label: 'AI Workload Reduction' },
  { value: 7,  suffix: 'x', label: 'Kickstarter Goal' },
];

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function Counter({ value, suffix, trigger }: { value: number; suffix: string; trigger: boolean }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;

    const duration = 1400;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setDisplay(Math.round(easeOutCubic(progress) * value));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [trigger, value]);

  return <>{display}{suffix}</>;
}

export default function StatsCounter() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="mb-20">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div
              className="text-5xl md:text-6xl font-bold leading-none"
              style={{
                color: '#1e3a5f',
                fontVariantNumeric: 'tabular-nums',
                fontFeatureSettings: '"tnum"',
                letterSpacing: '-0.02em',
              }}
            >
              <Counter value={stat.value} suffix={stat.suffix} trigger={triggered} />
            </div>
            <div
              className="text-xs mt-2 uppercase tracking-widest"
              style={{ color: '#9ca3af' }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
