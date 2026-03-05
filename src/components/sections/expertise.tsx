import React from 'react';
import Image from 'next/image';
import { Package, Layers, Wind, Plus } from 'lucide-react';

const expertises = [
  {
    id: "01",
    title: "Agro-alimentaire",
    description: "Protection thermique & hygiène pour produits frais.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/83509869-f90f-4933-8bf2-ca5e3d6ade4f-sipasen-vercel-app/assets/images/images_1.png",
    icon: Package,
  },
  {
    id: "02",
    title: "Bâtiment & Isolation",
    description: "Solutions d'isolation pour l'efficacité énergétique.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/83509869-f90f-4933-8bf2-ca5e3d6ade4f-sipasen-vercel-app/assets/images/images_2.png",
    icon: Layers,
  },
  {
    id: "03",
    title: "Design & Découpe",
    description: "Précision numérique pour vos projets créatifs.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/83509869-f90f-4933-8bf2-ca5e3d6ade4f-sipasen-vercel-app/assets/images/images_5.png",
    icon: Wind,
  }
];

export default function ExpertiseSection() {
  return (
    <section id="activités" className="bg-white section-padding">
      <div className="container mx-auto px-6 md:px-10 max-w-[1440px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-brand-beige"></div>
              <span className="text-[12px] font-[800] tracking-[0.4em] uppercase text-brand-grey/40 font-sans">
                Nos Expertises
              </span>
            </div>
            <h2 className="font-display font-bold text-brand-grey text-4xl md:text-6xl leading-[1.1] tracking-tight">
              Des solutions industrielles <br className="hidden md:block" />
              <span className="text-brand-beige italic font-display">maîtrisées de bout en bout.</span>
            </h2>
          </div>
          <p className="max-w-sm text-lg text-brand-grey/60 font-sans leading-relaxed">
            Nous transformons le PSE en solutions techniques performantes pour relever vos défis industriels.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {expertises.map((item) => (
            <div 
              key={item.id} 
              className="group relative flex flex-col bg-brand-blue-light/20 border border-brand-blue-light/50 rounded-2xl overflow-hidden hover:border-brand-beige/20 transition-all duration-500 hover:-translate-y-2 shadow-sm"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-grey/20 group-hover:bg-brand-grey/0 transition-colors duration-500"></div>
              </div>

              {/* Content Container */}
              <div className="p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-brand-blue-light text-brand-grey flex items-center justify-center rounded-2xl shadow-sm border border-brand-blue-light">
                      <item.icon className="w-6 h-6" />
                    </div>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-grey/30">
                    {item.id}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-brand-grey mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-brand-grey/60 text-sm leading-relaxed mb-8 font-sans">
                  {item.description}
                </p>

                <div className="mt-auto">
                  <button className="flex items-center gap-3 text-[11px] font-[700] uppercase tracking-widest text-brand-grey hover:text-brand-beige transition-colors group/btn">
                    Voir les solutions
                    <Plus className="w-4 h-4 transition-transform group-hover/btn:rotate-90" />
                  </button>
                </div>
              </div>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-beige group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}