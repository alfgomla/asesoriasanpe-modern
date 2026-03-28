import { Navbar } from "./components/Navbar";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Hero } from "./sections/Hero";
import { Stats } from "./sections/Stats";
import { Services } from "./sections/Services";
import { Process } from "./sections/Process";
import { Testimonials } from "./sections/Testimonials";
import { ContactForm } from "./sections/ContactForm";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}