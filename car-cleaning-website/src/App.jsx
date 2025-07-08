import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './index.css';

function App() {
  const heroRef = useRef(null);
  const offerRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(heroRef.current, { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' });
    gsap.fromTo(offerRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.6, ease: 'power2.out' });
    gsap.fromTo(contactRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2, delay: 1.2, ease: 'power2.out' });
  }, []);

  return (
    <div className="min-h-screen bg-prestige bg-gradient-to-br from-prestige via-gray-900 to-gray-800 flex flex-col items-center justify-center px-4 py-8">
      {/* HERO */}
      <section ref={heroRef} className="w-full max-w-2xl mb-12 p-8 rounded-3xl shadow-xl glassmorphism text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Prestige Car Cleaning</h1>
        <p className="text-lg md:text-xl text-accent mb-6 font-medium">Prestiżowe sprzątanie i detailing samochodów</p>
        <a href="#contact" className="inline-block px-8 py-3 bg-accent bg-opacity-80 text-prestige font-semibold rounded-full shadow-lg hover:bg-opacity-100 transition">Umów się</a>
      </section>

      {/* OFERTA */}
      <section ref={offerRef} className="w-full max-w-3xl mb-12 p-8 rounded-3xl shadow-xl glassmorphism">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Nasza Oferta</h2>
        <ul className="grid md:grid-cols-3 gap-6 text-center">
          <li className="p-6 rounded-2xl glassmorphism border border-white/10">
            <h3 className="text-xl font-semibold text-accent mb-2">Mycie zewnętrzne</h3>
            <p className="text-white/80">Delikatne, bezpieczne mycie karoserii i felg z efektem showroomu.</p>
          </li>
          <li className="p-6 rounded-2xl glassmorphism border border-white/10">
            <h3 className="text-xl font-semibold text-accent mb-2">Czyszczenie wnętrza</h3>
            <p className="text-white/80">Kompleksowe odkurzanie, pranie tapicerki, pielęgnacja kokpitu.</p>
          </li>
          <li className="p-6 rounded-2xl glassmorphism border border-white/10">
            <h3 className="text-xl font-semibold text-accent mb-2">Detailing</h3>
            <p className="text-white/80">Renowacja lakieru, ochrona powłoką ceramiczną, prestiżowy efekt.</p>
          </li>
        </ul>
      </section>

      {/* KONTAKT */}
      <section ref={contactRef} id="contact" className="w-full max-w-xl p-8 rounded-3xl shadow-xl glassmorphism text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Kontakt</h2>
        <p className="text-white/80 mb-6">Zadzwoń: <a href="tel:+48123456789" className="text-accent font-semibold">+48 123 456 789</a> lub napisz: <a href="mailto:kontakt@prestigecarcleaning.pl" className="text-accent font-semibold">kontakt@prestigecarcleaning.pl</a></p>
        <a href="mailto:kontakt@prestigecarcleaning.pl" className="inline-block px-8 py-3 bg-accent bg-opacity-80 text-prestige font-semibold rounded-full shadow-lg hover:bg-opacity-100 transition">Wyślij zapytanie</a>
      </section>
    </div>
  );
}

export default App;
