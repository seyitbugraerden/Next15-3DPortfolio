import Hero from "@/components/hero/Hero";
import Contact from "@/components/contact/Contact";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}
