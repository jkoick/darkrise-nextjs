"use client";

import { useState, useEffect } from "react";
import { markdownify } from "@/lib/utils/textConverter";

interface Stat {
  number: number;
  suffix?: string;
  label: string;
  description?: string;
}

interface StatsSectionProps {
  title: string;
  description?: string;
  stats: Stat[];
  animated?: boolean;
  layout?: 'default' | 'cards' | 'minimal';
}

const StatsSection = ({ 
  title, 
  description, 
  stats, 
  animated = true, 
  layout = 'default' 
}: StatsSectionProps) => {
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!animated || hasStarted) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          
          stats.forEach((stat, index) => {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepValue = stat.number / steps;
            let currentStep = 0;
            
            const timer = setInterval(() => {
              currentStep++;
              const currentValue = Math.min(Math.round(stepValue * currentStep), stat.number);
              
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = currentValue;
                return newCounters;
              });
              
              if (currentStep >= steps) {
                clearInterval(timer);
              }
            }, duration / steps);
          });
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [stats, animated, hasStarted]);

  const getLayoutClasses = () => {
    switch (layout) {
      case 'cards':
        return 'bg-gradient-to-b from-white/5 to-white/10 rounded-2xl border border-white/10 p-6';
      case 'minimal':
        return 'text-center';
      default:
        return 'text-center';
    }
  };

  return (
    <section id="stats-section" className="section">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:col-8 text-center">
            <h2 className="mb-4" dangerouslySetInnerHTML={markdownify(title)} />
            {description && (
              <p className="mb-12 text-light" dangerouslySetInnerHTML={markdownify(description)} />
            )}
          </div>
        </div>

        <div className={`row g-4 ${layout === 'cards' ? 'justify-center' : ''}`}>
          {stats.map((stat, index) => (
            <div key={index} className={layout === 'cards' ? 'lg:col-3 md:col-6' : 'lg:col-3 md:col-6'}>
              <div
                className={getLayoutClasses()}
                data-aos="fade-up-sm"
                data-aos-delay={index * 100}
              >
                <div className="stat-number mb-2">
                  <span className="text-4xl lg:text-5xl font-bold has-gradient">
                    {animated ? counters[index] : stat.number}
                    {stat.suffix && <span className="text-primary">{stat.suffix}</span>}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                {stat.description && (
                  <p className="text-sm text-light opacity-70">{stat.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;