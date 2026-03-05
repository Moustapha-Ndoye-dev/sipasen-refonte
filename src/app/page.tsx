"use client";

import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ExpertiseSection from "@/components/sections/expertise";
import ExcellenceSection from "@/components/sections/excellence";
import ExportSection from "@/components/sections/export";
import StatsSection from "@/components/sections/stats";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ExpertiseSection />
        <ExcellenceSection />
        <ExportSection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
