import React from 'react';
import Image from 'next/image';
import { Factory, ShieldCheck, ArrowRight } from 'lucide-react';

/**
 * AboutSection Component
 * 
 * Clones the "À Propos" section with the side image of a worker, 
 * the "35 years" red badge, and the industrial feature blocks.
 * 
 * Theme: Light
 * Design: High-contrast industrial with Playfair Display (Serif) and Inter (Sans)
 */
const AboutSection: React.FC = () => {
  return (
    <section 
      id="présentation" 
      className="bg-white section-padding relative overflow-hidden"
    >
      <div className="container mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Image & Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/83509869-f90f-4933-8bf2-ca5e3d6ade4f-sipasen-vercel-app/assets/images/images_1.png"
                alt="Unité Industrielle SIPASEN"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-brand-grey/10"></div>
            </div>
            
            {/* Beige Badge "35 Years" */}
            <div className="absolute -bottom-10 -right-4 md:right-10 bg-brand-beige text-white p-8 md:p-10 shadow-2xl max-w-[240px] rounded-2xl transition-transform hover:-translate-y-2 duration-300">
              <div className="flex flex-col gap-2">
                <span className="text-6xl font-display font-bold leading-none">35</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] leading-normal opacity-90">
                  Années d&apos;excellence industrielle au Sénégal
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Features */}
          <div className="lg:col-span-6 flex flex-col gap-10 mt-12 lg:mt-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-brand-beige"></div>
              <span className="text-[12px] font-extrabold tracking-[0.4em] uppercase text-brand-grey/40">
                À Propos de Nous
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-grey leading-[1.1] tracking-tight">
              Le leader de la transformation du <br />
              <span className="text-brand-beige italic font-display">Polystyrène Expansé.</span>
            </h2>

            <div className="flex flex-col gap-8">
              <p className="text-lg text-brand-grey/60 leading-relaxed font-sans max-w-xl">
                Basée à Dakar, <span className="text-brand-grey font-bold">SIPASEN</span> est la référence industrielle pour les solutions d&apos;isolation thermique et d&apos;emballage.
              </p>

                {/* Industrial Feature Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-brand-blue-light">
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-brand-blue-light rounded-2xl flex-shrink-0 flex items-center justify-center text-brand-grey transition-colors group-hover:bg-brand-grey group-hover:text-white duration-300">
                      <Factory size={24} />
                    </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-brand-grey">
                      Production Locale
                    </h4>
                    <p className="text-xs text-brand-grey/60">
                      Unité de pointe à Dakar.
                    </p>
                  </div>
                </div>

                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 bg-brand-blue-light rounded-2xl flex-shrink-0 flex items-center justify-center text-brand-grey transition-colors group-hover:bg-brand-grey group-hover:text-white duration-300">
                      <ShieldCheck size={24} />
                    </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-brand-grey">
                      Savoir-faire
                    </h4>
                    <p className="text-xs text-brand-grey/60">
                      Expertise technique reconnue.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Link */}
            <a 
              href="#contact" 
              className="inline-flex items-center gap-4 text-[11px] font-bold tracking-widest uppercase text-brand-grey group hover:text-brand-beige transition-colors"
            >
              Découvrir notre histoire
              <div className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-brand-grey group-hover:text-white group-hover:border-brand-grey transition-all duration-300">
                <ArrowRight size={18} />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Background Decorative Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none overflow-hidden opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-grey rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-brand-grey rounded-full opacity-50"></div>
      </div>
    </section>
  );
};

export default AboutSection;