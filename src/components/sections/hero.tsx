"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/83509869-f90f-4933-8bf2-ca5e3d6ade4f-sipasen-vercel-app/assets/images/images_2.png",
    subtitle: "Innovation & Performance",
    title: <>Expertise Industrielle en <span className="italic-primary font-display italic text-brand-beige">PSE</span></>,
    description: "Le leader de la transformation du Polystyrène Expansé au Sénégal. Des solutions sur-mesure pour l'agro-alimentaire et le bâtiment."
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/83509869-f90f-4933-8bf2-ca5e3d6ade4f-sipasen-vercel-app/assets/images/images_1.png",
    subtitle: "Qualité & Excellence",
    title: <>Solutions de <span className="italic-primary font-display italic text-brand-beige">Haute Précision</span></>,
    description: "Un savoir-faire industriel de plus de 35 ans au service de vos projets de construction et d'emballage thermique."
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/83509869-f90f-4933-8bf2-ca5e3d6ade4f-sipasen-vercel-app/assets/images/images_5.png",
    subtitle: "Développement Durable",
    title: <>L'Avenir de l'Isolation <span className="italic-primary font-display italic text-brand-beige">Thermique</span></>,
    description: "Optimisez l'efficacité énergétique de vos bâtiments avec nos plaques de polystyrène expansé haute densité."
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] md:h-screen min-h-[700px] w-full overflow-hidden bg-brand-grey">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Background Image Container */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt="Industrial background"
              fill
              priority
              className={`object-cover transition-transform duration-[5000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
              style={{ objectPosition: 'center' }}
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-grey/95 via-brand-grey/65 to-transparent" />
            <div className="absolute inset-0 bg-black/10" />
          </div>

            {/* Content Container */}
            <div className="relative h-full container mx-auto px-6 md:px-10 flex flex-col pt-40 md:pt-64 justify-center z-10">
              <div className={`max-w-[850px] transition-all duration-1000 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Subheading */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-[2px] bg-brand-beige"></div>
                <span className="text-white text-[12px] font-extrabold tracking-[0.4em] uppercase">
                  {slide.subtitle}
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-5xl md:text-7xl lg:text-[100px] font-bold text-white mb-10 leading-[0.9] tracking-tighter">
                {slide.title}
              </h1>

              {/* Body Text */}
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 font-sans leading-relaxed">
                {slide.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a 
                  href="#produits" 
                  className="btn-primary px-10 py-5 text-[12px]"
                >
                  Nos Produits
                  <ArrowRight size={18} />
                </a>

                <a 
                  href="#presentation" 
                  className="btn-ghost px-10 py-5 text-[12px] !text-white !border-white/30 hover:!border-white"
                >
                  Notre Entreprise
                  <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Decorative Grid Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white rounded-full opacity-50"></div>
      </div>

      {/* Bottom Navigation Indicators */}
      <div className="absolute bottom-12 left-6 md:left-16 flex items-center gap-4 z-20">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group py-4"
          >
            <div className={`h-[2px] transition-all duration-500 ${index === currentSlide ? 'w-12 bg-brand-beige' : 'w-6 bg-white/20 group-hover:bg-white/50'}`}></div>
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
