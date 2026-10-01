import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Listen } from "@/components/Listen";
import { Members } from "@/components/Members";

// Regénère la page toutes les heures pour que les événements passent
// automatiquement de « À venir » à « Passés ».
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Members />
        <Events />
        <Listen />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
