import React from 'react';
import { Shield, Package, Clock, Recycle, ArrowRight, CircleCheck } from 'lucide-react';

const ExcellenceSection = () => {
  const features = [
    {
      label: "ISO 9001",
      title: "Qualité Certifiée",
      description: "Production conforme aux standards ISO, garantissant une fiabilité structurelle et thermique.",
      icon: <Shield className="w-10 h-10" />,
      badge: "Standard SIPASEN"
    },
    {
      label: "VOLUME XXL",
      title: "Capacité Industrielle",
      description: "Unité de production de pointe pour répondre à vos besoins les plus volumineux.",
      icon: <Package className="w-10 h-10" />,
      badge: "Standard SIPASEN"
    },
    {
      label: "LIVRAISON 24/48H",
      title: "Réactivité Logistique",
      description: "Chaîne de production optimisée permettant des livraisons en flux tendu sur tout le Sénégal.",
      icon: <Clock className="w-10 h-10" />,
      badge: "Standard SIPASEN"
    },
    {
      label: "ÉCO-RESPONSABLE",
      title: "Engagement Durable",
      description: "Le PSE est 100% recyclable. Nous intégrons une gestion responsable des ressources.",
      icon: <Recycle className="w-10 h-10" />,
      badge: "Standard SIPASEN"
    }
  ];

  return (
    <section 
      id="services" 
      className="bg-brand-grey py-32 md:py-48 relative overflow-hidden font-sans"
    >
      {/* Industrial Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.01] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-white/5"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:64px_64px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 max-w-[1440px] relative z-10">
        {/* Header Content */}
        <div className="flex flex-col lg:flex-row gap-20 lg:items-end justify-between mb-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-brand-beige"></div>
              <span className="text-[12px] font-extrabold tracking-[0.4em] uppercase text-brand-beige/80">
                Engagement Excellence
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-[110px] font-display font-bold text-white mb-0 leading-[0.9] tracking-tighter">
              L&apos;Excellence <br />
              <span className="text-white/20 italic font-display">inscrite dans l&apos;ADN.</span>
            </h2>
          </div>
          
          <div className="max-w-sm flex flex-col gap-10 border-l border-white/10 pl-10 pb-4">
            <p className="text-lg text-white/50 leading-relaxed font-normal">
              Depuis plus de trois décennies, SIPASEN redéfinit les standards de l&apos;industrie du polystyrène au Sénégal par l&apos;innovation constante.
            </p>
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.3em] uppercase text-white hover:text-brand-beige transition-all duration-300"
            >
              DÉCOUVRIR NOS VALEURS
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-beige group-hover:translate-x-2 transition-all">
                <ArrowRight size={16} />
              </div>
            </a>
          </div>
        </div>

            {/* Feature Grid - Large Industrial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group relative p-10 bg-white/[0.03] border border-white/5 rounded-3xl hover:bg-brand-blue-light/5 hover:border-brand-blue-light/30 transition-all duration-700 flex flex-col min-h-[420px] overflow-hidden"
                >
                  {/* Background Glow */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-brand-blue-light/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Numbering */}
                  <div className="absolute top-10 right-10 text-4xl font-display font-bold text-white/[0.03] group-hover:text-brand-blue-light/20 transition-all duration-500 group-hover:scale-110">
                    0{index + 1}
                  </div>
                  
                  <div className="mb-14 w-16 h-16 rounded-2xl bg-brand-blue-light/10 flex items-center justify-center text-brand-blue-light group-hover:bg-brand-blue-light group-hover:text-brand-grey group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                    {React.cloneElement(feature.icon as React.ReactElement, { strokeWidth: 1.5 })}
                  </div>

                  <div className="mt-auto relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-px bg-brand-blue-light opacity-40"></div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-blue-light group-hover:opacity-100 transition-opacity">
                        {feature.label}
                      </span>
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white tracking-tight mb-6 group-hover:text-brand-blue-light transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed font-sans mb-8 group-hover:text-white/70 transition-colors duration-500">
                      {feature.description}
                    </p>

                    <div className="flex items-center justify-between py-5 border-t border-white/5 group-hover:border-brand-blue-light/20 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue-light animate-pulse"></div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:text-white/40">
                          {feature.badge}
                        </span>
                      </div>
                      <CircleCheck size={14} className="text-brand-blue-light opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

      </div>
    </section>
  );
};

export default ExcellenceSection;