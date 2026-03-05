import React from 'react';
import { TrendingUp, Factory, Target, BarChart3 } from 'lucide-react';

/**
 * StatsSection Component
 * 
 * Clones the full-width blue banner section featuring four key industrial statistics: 
 * production volume, industrial lines, logistics base, and technical mastery.
 * 
 * Design characteristics:
 * - Background: Brand blue light (#DFEFFF)
 * - Typography: Serif (Playfair Display) for numbers, Sans (Inter) for labels
 * - Subtle background text "SIPASEN INDUSTRIAL" in large transparent letters
 * - Beige accent icons.
 */

  const stats = [
    {
      value: "400",
      suffix: "T",
      label: "Volume de Production Mensuel",
      icon: <TrendingUp className="w-5 h-5 text-brand-beige" />,
    },
    {
      value: "6",
      suffix: "",
      label: "Lignes de Production Industrielles",
      icon: <Factory className="w-5 h-5 text-brand-beige" />,
    },
    {
      value: "2000",
      suffix: "m²",
      label: "Surface Base Logistique",
      icon: <Target className="w-5 h-5 text-brand-beige" />,
    },
    {
      value: "35",
      suffix: "ans",
      label: "Maîtrise Technique & Innovation",
      icon: <BarChart3 className="w-5 h-5 text-brand-beige" />,
    },
  ];

  const StatsSection = () => {
    return (
      <section className="relative w-full bg-brand-blue-light py-24 md:py-32 overflow-hidden">
        {/* Background Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
          <span className="text-[18vw] font-black text-brand-grey/[0.03] whitespace-nowrap leading-none tracking-tighter uppercase">
            INDUSTRIAL PERFORMANCE
          </span>
        </div>

        {/* Industrial Detail: Corner Accents */}
        <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-brand-grey/10"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-brand-grey/10"></div>

        <div className="container relative z-10 px-6 md:px-10 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`group flex flex-col items-center lg:items-start text-center lg:text-left px-8 ${
                  index !== stats.length - 1 ? "lg:border-r lg:border-brand-grey/5" : ""
                }`}
              >
                {/* Icon Container */}
                <div className="mb-10 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md shadow-brand-grey/5 group-hover:bg-brand-beige group-hover:text-white group-hover:-translate-y-2 transition-all duration-500 relative">
                  {stat.icon}
                  <div className="absolute inset-0 bg-brand-beige rounded-2xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
                </div>

                {/* Stat Value */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display font-bold text-6xl md:text-7xl lg:text-8xl text-brand-grey tracking-tighter leading-none group-hover:text-brand-beige transition-colors duration-500">
                    {stat.value}
                  </span>
                  <span className="font-display font-bold text-2xl md:text-3xl text-brand-beige animate-pulse">
                    {stat.suffix}
                  </span>
                </div>

                {/* Stat Label */}
                <div className="max-w-[220px] relative">
                  <div className="w-8 h-[1px] bg-brand-beige mb-3 opacity-0 group-hover:opacity-100 group-hover:w-12 transition-all duration-500"></div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-brand-grey/50 leading-relaxed font-sans group-hover:text-brand-grey transition-colors">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default StatsSection;
