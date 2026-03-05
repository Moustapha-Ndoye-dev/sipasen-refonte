"use client";

import React from "react";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white section-padding relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Industrial Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="accent-line">
                <span className="subheading">Contact & Accès</span>
              </div>
              <h2 className="h2 max-w-md">
                Échangeons sur <span className="italic-primary font-display">vos enjeux industriels.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-8 mt-4">
                {/* Address */}
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 bg-brand-blue-light flex-shrink-0 flex items-center justify-center text-brand-grey rounded-2xl group-hover:bg-brand-grey group-hover:text-white transition-colors duration-300">
                    <MapPin size={20} />
                  </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-text-muted/60">Siège & Usine</span>
                  <h4 className="text-base font-bold text-text-main">Km 3,5 Bd du Centenaire</h4>
                  <p className="text-sm text-text-muted">Dakar, Sénégal</p>
                </div>
              </div>

                {/* Phone */}
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 bg-brand-blue-light flex-shrink-0 flex items-center justify-center text-brand-grey rounded-2xl group-hover:bg-brand-grey group-hover:text-white transition-colors duration-300">
                    <Phone size={20} />
                  </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-text-muted/60">Ligne Directe</span>
                  <h4 className="text-base font-bold text-text-main">+221 33 832 31 21</h4>
                  <p className="text-sm text-text-muted">Lun - Ven : 08:00 - 18:00</p>
                </div>
              </div>

                {/* Email */}
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 bg-brand-blue-light flex-shrink-0 flex items-center justify-center text-brand-grey rounded-2xl group-hover:bg-brand-grey group-hover:text-white transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-text-muted/60">Email Commercial</span>
                  <h4 className="text-base font-bold text-text-main lowercase">contact@sipasen.sn</h4>
                  <p className="text-sm text-text-muted">Réponse sous 24h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 md:p-12 border border-border/40">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                {/* Full Name */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="name" className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-grey px-1">
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Votre nom"
                    className="bg-muted text-sm px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-brand-beige transition-all outline-none text-text-main placeholder:text-text-muted/40"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="email" className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-grey px-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="votre@email.com"
                    className="bg-muted text-sm px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-brand-beige transition-all outline-none text-text-main placeholder:text-text-muted/40"
                  />
                </div>

                {/* Sector Select (Checkboxes as pills like screenshot) */}
                <div className="md:col-span-2 flex flex-col gap-4">
                  <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-grey px-1">
                    Secteur d'activité
                  </label>
                  <div className="flex flex-wrap gap-2">
                      {["Agro-Alimentaire", "Bâtiment / BTP", "Design / Décoration", "Export"].map((sector) => (
                        <button
                          key={sector}
                          type="button"
                          className="px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-blue-light/50 text-brand-grey hover:bg-brand-beige hover:text-white transition-all border border-transparent"
                        >
                          {sector}
                        </button>
                      ))}
                  </div>
                </div>

                {/* Message */}
                <div className="md:col-span-2 flex flex-col gap-3">
                  <label htmlFor="message" className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-grey px-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Détails de votre projet..."
                    className="bg-muted text-sm px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-brand-beige transition-all outline-none text-text-main placeholder:text-text-muted/40 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="btn-primary w-full py-5 text-[11px] tracking-[0.2em] shadow-lg shadow-brand-beige/20">
                    Envoyer la demande <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Background technical accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-grey/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-beige/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default ContactSection;