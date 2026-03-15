'use client';

import { useEffect, useRef, useState } from 'react';

const CAREER = [
  {
    company: 'Bose Corporation',
    role: 'Senior Project Engineer',
    period: '2012 – 2020',
    metric: '5M+',
    metricLabel: 'units shipped',
    tags: ['5 utility patents', '$1B+ revenue stream', '8 years'],
    color: '#4a9eff',
  },
  {
    company: 'Hatch',
    role: 'Principal Product Manager',
    period: '2020 – 2021',
    metric: '1M+',
    metricLabel: 'customers',
    tags: ['#1 registered baby device in the US', 'IoT / WiFi / BLE'],
    color: '#4a9eff',
  },
  {
    company: 'Raycon Global',
    role: 'VP of Product Strategy & Operations',
    period: '2021 – Present',
    metric: '7x',
    metricLabel: 'Kickstarter goal',
    tags: ['30+ SKUs', 'P&L ownership', 'Built org from zero'],
    color: '#4a9eff',
  },
];

function TimelineNode({
  company,
  role,
  period,
  metric,
  metricLabel,
  tags,
  isLast,
}: (typeof CAREER)[0] & { isLast: boolean }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="timeline-node"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.55s ease, transform 0.55s ease',
      }}
    >
      {/* Left: line + dot */}
      <div className="timeline-rail">
        <div className="timeline-dot" />
        {!isLast && <div className="timeline-line" />}
      </div>

      {/* Right: content */}
      <div className="timeline-content">
        {/* Period badge */}
        <span className="timeline-period">{period}</span>

        {/* Company */}
        <h3 className="timeline-company">{company}</h3>

        {/* Role */}
        <p className="timeline-role">{role}</p>

        {/* Metric */}
        <div className="timeline-metric-row">
          <span className="timeline-metric-value">{metric}</span>
          <span className="timeline-metric-label">{metricLabel}</span>
        </div>

        {/* Tags */}
        <div className="timeline-tags">
          {tags.map((tag) => (
            <span key={tag} className="timeline-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CareerTimeline() {
  return (
    <div className="career-timeline">
      {CAREER.map((item, i) => (
        <TimelineNode key={item.company} {...item} isLast={i === CAREER.length - 1} />
      ))}
    </div>
  );
}
