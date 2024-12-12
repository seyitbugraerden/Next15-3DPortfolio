import Hero from "@/components/hero/Hero";
import Contact from "@/components/contact/Contact";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";

export default function Home() {
  return (
    <div className="container">
      <section id="#home">
        <Hero />
      </section>
      <section id="#services">
        <Services />
      </section>
      <section id="#portfolio">
        <Portfolio />
      </section>
      <section id="#contact">
        <Contact />
      </section>
    </div>
  );
}
