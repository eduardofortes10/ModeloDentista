import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Treatments from './components/Treatments.jsx';
import Benefits from './components/Benefits.jsx';
import About from './components/About.jsx';
import Stats from './components/Stats.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />
      <main>
        <Hero />
        <Treatments />
        <Benefits />
        <About />
        <Stats />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
