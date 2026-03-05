"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin, Mail, Linkedin, Facebook, Instagram, ChevronDown, ArrowRight, Menu, X } from 'lucide-react';

/**
 * Header component for SIPASEN website.
 * Updated with new brand colors and logo.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Produits', href: '#activités', hasSubmenu: true },
    { name: 'À Propos', href: '#présentation' },
    { name: 'Export', href: '#export' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] flex flex-col transition-all duration-300 ${scrolled ? 'translate-y-[-40px]' : ''}`}>
        {/* Top Bar - Contact Info & Socials */}
        <div className="bg-brand-grey text-white/80 py-2 hidden lg:block border-b border-white/10">
          <div className="max-w-[1440px] mx-auto px-10 flex justify-between items-center text-[11px] font-medium tracking-wide">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <MapPin size={12} className="text-brand-blue-light" />
                  <span>Km 3,5 Bd du Centenaire, Dakar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-brand-blue-light" />
                  <span>contact@sipasen.sn</span>
                </div>
              </div>
            
            <div className="flex items-center gap-6">
              <div className="flex gap-4 border-r border-white/10 pr-6">
                <a href="#" className="hover:text-white transition-colors cursor-pointer">
                  <Linkedin size={14} />
                </a>
                <a href="#" className="hover:text-white transition-colors cursor-pointer">
                  <Facebook size={14} />
                </a>
                <a href="#" className="hover:text-white transition-colors cursor-pointer">
                  <Instagram size={14} />
                </a>
              </div>
              <div className="flex items-center gap-3">
                <button className="font-bold text-white">FR</button>
                <span className="opacity-20">|</span>
                <button className="opacity-60 hover:opacity-100 transition-opacity">EN</button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className={`w-full transition-all duration-300 py-4 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white shadow-md'}`}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
            {/* Logo Section */}
            <a className="flex items-center gap-3 group" href="/">
              <div className="relative w-32 h-14 md:w-40 md:h-16 transition-all duration-300">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/83509869-f90f-4933-8bf2-ca5e3d6ade4f/image-1772574686328.png?width=8000&height=8000&resize=contain"
                  alt="SIPASEN Logo"
                  fill
                  className="object-contain transition-all duration-300"
                  priority
                />
              </div>
            </a>

              {/* Nav Menu Items */}
              <nav className="hidden lg:flex items-center gap-2">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative group">
                    <a 
                      className={`text-[13px] font-bold tracking-wide uppercase transition-all duration-200 flex items-center gap-1.5 py-2.5 px-5 rounded-full ${link.name === 'Accueil' ? 'text-brand-beige bg-brand-blue-light/30' : 'text-brand-grey/80 hover:text-brand-beige hover:bg-brand-blue-light/50'}`} 
                      href={link.href}
                    >
                      {link.name}
                      {link.hasSubmenu && <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />}
                    </a>
                  </div>
                ))}
              </nav>

            {/* Action Button & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a 
                className="hidden md:flex items-center gap-2 px-8 py-3.5 text-[12px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg bg-brand-beige text-white hover:bg-brand-grey shadow-brand-beige/20" 
                href="#contact"
              >
                Contact
                <ArrowRight size={14} />
              </a>
              <button 
                onClick={toggleMenu}
                className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl transition-colors text-brand-grey bg-brand-blue-light/30 hover:bg-brand-blue-light/50"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[150] lg:hidden transition-all duration-500 ${isMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-brand-grey/60 backdrop-blur-md transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={toggleMenu}
        />
        
        {/* Drawer */}
        <div className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-white shadow-2xl transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            {/* Drawer Header */}
            <div className="p-6 flex items-center justify-between border-b border-gray-100">
              <div className="relative w-32 h-12">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/83509869-f90f-4933-8bf2-ca5e3d6ade4f/image-1772574686328.png?width=8000&height=8000&resize=contain"
                  alt="SIPASEN Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <button 
                onClick={toggleMenu}
                className="w-10 h-10 flex items-center justify-center text-brand-grey bg-gray-50 rounded-xl"
              >
                <X size={24} />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-grow overflow-y-auto py-8 px-6">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    onClick={toggleMenu}
                    className="flex items-center justify-between p-4 rounded-2xl text-[15px] font-bold uppercase tracking-wider text-brand-grey hover:bg-brand-blue-light/50 hover:text-brand-beige transition-all group"
                  >
                    {link.name}
                    <ArrowRight size={18} className="opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-brand-beige" />
                  </a>
                ))}
              </nav>

              <div className="mt-12 p-6 bg-brand-blue-light/30 rounded-3xl">
                <h4 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-beige mb-4">Contact Rapide</h4>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-brand-grey/70">
                    <MapPin size={18} className="text-brand-beige" />
                    <span className="text-[13px] font-medium">Boulevard du Centenaire, Dakar</span>
                  </div>
                  <div className="flex items-center gap-3 text-brand-grey/70">
                    <Mail size={18} className="text-brand-beige" />
                    <span className="text-[13px] font-medium">contact@sipasen.sn</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-6 border-t border-gray-100">
              <a 
                href="#contact" 
                onClick={toggleMenu}
                className="flex items-center justify-center gap-3 w-full bg-brand-beige text-white py-4 rounded-full font-bold uppercase tracking-widest shadow-lg shadow-brand-beige/20"
              >
                Demander un Devis
                <ArrowRight size={18} />
              </a>
              <div className="flex justify-center gap-6 mt-8">
                <Linkedin size={20} className="text-brand-grey/40" />
                <Facebook size={20} className="text-brand-grey/40" />
                <Instagram size={20} className="text-brand-grey/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}