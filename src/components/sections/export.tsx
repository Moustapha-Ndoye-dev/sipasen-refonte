import React from 'react';
import Image from 'next/image';
import { ChevronRight, ArrowUpRight, ShieldCheck, Truck } from 'lucide-react';

const countries = [
  { code: 'CI', name: "Côte d'Ivoire" },
  { code: 'ML', name: 'Mali' },
  { code: 'MR', name: 'Mauritanie' },
  { code: 'CM', name: 'Cameroun' },
  { code: 'GN', name: 'Guinée' },
  { code: 'BJ', name: 'Bénin' },
];

const ExportSection = () => {
  return (
    <section id="export" className="bg-white section-padding overflow-hidden">
      <div className="container mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-brand-beige"></div>
              <span className="text-[12px] font-extrabold tracking-[0.4em] uppercase text-brand-grey/40">
                Expansion Régionale
              </span>
            </div>

            <h2 className="text-[40px] md:text-[56px] font-display font-bold text-brand-grey leading-[1.1] tracking-tight mb-8">
              Un rayonnement industriel <br />
              <span className="text-brand-beige italic">au-delà des frontières.</span>
            </h2>

            <p className="text-lg md:text-xl text-brand-grey/60 font-sans leading-relaxed max-w-2xl mb-12">
              SIPASEN orchestre des flux logistiques vers toute la zone UEMOA et CEDEAO.
            </p>

              {/* Countries Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {countries.map((country) => (
                  <div 
                    key={country.code}
                    className="group flex flex-col p-6 bg-brand-blue-light/30 rounded-2xl border border-transparent hover:border-brand-beige/10 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                  >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold text-brand-beige uppercase tracking-wider">
                      {country.code}
                    </span>
                    <ChevronRight className="w-4 h-4 text-brand-grey/20 group-hover:text-brand-grey group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-sm font-bold text-brand-grey tracking-tight">
                    {country.name}
                  </h3>
                </div>
              ))}
            </div>

              {/* Badges/Certifications */}
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-brand-blue-light">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue-light flex items-center justify-center text-brand-beige">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-grey">
                    Standards CEDEAO
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue-light flex items-center justify-center text-brand-beige">
                    <Truck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-grey">
                    Logistique Intégrée
                  </span>
                </div>
              </div>
          </div>

          {/* Right Floating Card Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Main Card Wrapper */}
              <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-[480px]">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/83509869-f90f-4933-8bf2-ca5e3d6ade4f-sipasen-vercel-app/assets/images/images_3.png"
                    alt="Shipping Port"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Card Footer Content */}
                <div className="p-10">
                  <h3 className="text-2xl font-display font-bold italic text-brand-grey mb-6">
                    Vision Panafricaine
                  </h3>
                  
                  <a 
                    href="#contact" 
                    className="flex items-center justify-between w-full bg-brand-grey hover:bg-brand-beige text-white py-4 px-8 rounded-full font-bold text-[12px] uppercase tracking-widest transition-all duration-300 group/btn"
                  >
                    Dossier export
                    <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border border-gray-100 rounded-[24px]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExportSection;