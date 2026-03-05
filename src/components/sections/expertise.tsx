import React from 'react';
import Image from 'next/image';
import { Package, Layers, Plus } from 'lucide-react';

const expertises = [
  {
    id: '01',
    title: 'Agro-alimentaire',
    description: 'Protection thermique & hygiène pour produits frais.',
    image:
      'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/83509869-f90f-4933-8bf2-ca5e3d6ade4f-sipasen-vercel-app/assets/images/images_1.png',
    icon: Package,
  },
  {
    id: '02',
    title: 'Bâtiment & Isolation',
    description: "Solutions d'isolation pour l'efficacité énergétique.",
    image:
      'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/83509869-f90f-4933-8bf2-ca5e3d6ade4f-sipasen-vercel-app/assets/images/images_2.png',
    icon: Layers,
  },
];

export default function ExpertiseSection() {
  return (
    <section id="activités" className="bg-white section-padding">
      <div className="container mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mb-24 flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-1 w-12 bg-brand-beige"></div>
              <span className="font-sans text-[12px] font-[800] uppercase tracking-[0.4em] text-brand-grey/40">
                Nos Expertises
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-brand-grey md:text-6xl">
              Des solutions industrielles <br className="hidden md:block" />
              <span className="font-display italic text-brand-beige">maîtrisées de bout en bout.</span>
            </h2>
          </div>
          <p className="max-w-sm font-sans text-lg leading-relaxed text-brand-grey/60">
            Nous transformons le PSE en solutions techniques performantes pour relever vos défis industriels.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
          {expertises.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-blue-light/50 bg-brand-blue-light/20 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-beige/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-grey/20 transition-colors duration-500 group-hover:bg-brand-grey/0"></div>
              </div>

              <div className="flex flex-1 flex-col p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-blue-light bg-brand-blue-light text-brand-grey shadow-sm">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-grey/30">{item.id}</span>
                </div>

                <h3 className="mb-4 font-display text-2xl font-bold tracking-tight text-brand-grey">{item.title}</h3>
                <p className="mb-8 font-sans text-sm leading-relaxed text-brand-grey/60">{item.description}</p>

                <div className="mt-auto">
                  <button className="group/btn flex items-center gap-3 text-[11px] font-[700] uppercase tracking-widest text-brand-grey transition-colors hover:text-brand-beige">
                    Voir les solutions
                    <Plus className="h-4 w-4 transition-transform group-hover/btn:rotate-90" />
                  </button>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-beige transition-all duration-700 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
