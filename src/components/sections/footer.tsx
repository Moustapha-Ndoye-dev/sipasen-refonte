"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Facebook, Instagram, MapPin, Mail, Phone, ArrowUp } from "lucide-react";
import type { ContactConfig } from "@/lib/admin-types";

type FooterProps = {
  contact?: ContactConfig;
};

const defaultContact: ContactConfig = {
  directCommercial: "+221 71 010 43 43",
  fixe: "+221 33 832 31 21",
  email: "commercial@sipasen.com",
};

const Footer: React.FC<FooterProps> = ({ contact = defaultContact }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-grey text-white font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4 flex flex-col items-start gap-10">
            <Link className="flex items-center gap-3 group" href="/">
              <div className="relative w-48 h-20 overflow-hidden bg-transparent">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/83509869-f90f-4933-8bf2-ca5e3d6ade4f/image-1772574686328.png?width=8000&height=8000&resize=contain"
                  alt="SIPASEN Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <p className="text-white/50 text-[15px] leading-relaxed max-w-sm font-sans">
              Leader historique de la transformation du Polystyrène Expansé (PSE) au Sénégal,
              accompagnant les acteurs de l&apos;agro-industrie et du bâtiment depuis 1991.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-brand-grey transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-brand-grey transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-brand-grey transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-8">
            <div>
              <span className="text-[10px] font-extrabold tracking-[0.3em] uppercase text-brand-beige mb-6 block">Navigation</span>
              <ul className="flex flex-col gap-4">
                {[
                  { label: "Accueil", href: "/" },
                  { label: "Nos Produits", href: "#activités" },
                  { label: "À Propos", href: "#présentation" },
                  { label: "Export", href: "#export" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[13px] font-bold uppercase tracking-wider text-white/80 transition-colors duration-200 hover:text-brand-beige"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <span className="text-[10px] font-extrabold tracking-[0.3em] uppercase text-brand-beige mb-8 block">Siège & Usine</span>

              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-brand-beige">
                    <MapPin size={24} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/40">Localisation</h4>
                    <p className="text-sm font-semibold text-white/80 leading-relaxed">
                      Km 3,5 Boulevard du Centenaire
                      <br />
                      B.P. 1783 Dakar RP — Sénégal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-brand-beige">
                    <Phone size={24} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/40">Contact</h4>
                    <p className="text-xl font-bold text-white tracking-tight">{contact.directCommercial}</p>
                    <p className="text-sm font-semibold text-white/70">{contact.fixe}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Mail size={14} className="text-brand-beige" />
                      <span className="text-xs text-white/60">{contact.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 bg-brand-grey/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 text-center md:text-left">
            © {currentYear} SIPASEN GROUP. TOUS DROITS RÉSERVÉS.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 hover:text-white transition-colors cursor-pointer"
          >
            Haut de page
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-beige group-hover:bg-brand-beige transition-all duration-300">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
