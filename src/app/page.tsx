import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ExpertiseSection from "@/components/sections/expertise";
import ExcellenceSection from "@/components/sections/excellence";
import ExportSection from "@/components/sections/export";
import StatsSection from "@/components/sections/stats";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import { readStore } from "@/lib/admin-store";

export const dynamic = "force-dynamic";

export default async function Home() {
  const store = await readStore();

  return (
    <div className="flex min-h-screen flex-col">
      <Header contactEmail={store.siteContent.contact.email} />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ExpertiseSection />
        <ExcellenceSection />
        <ExportSection />
        <StatsSection statsConfig={store.siteContent.stats} />
        <ContactSection contact={store.siteContent.contact} />
      </main>
      <Footer contact={store.siteContent.contact} />
    </div>
  );
}
