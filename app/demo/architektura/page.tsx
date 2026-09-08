'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// --- DANE DLA FAQ ---
const faqData = [
  {
    q: 'Ile trwa przygotowanie pełnego projektu koncepcyjnego?',
    a: 'Średni czas realizacji projektu koncepcyjnego wynosi od 4 do 8 tygodni, w zależności od skali budynku oraz stopnia skomplikowania detali.',
  },
  {
    q: 'Czy zajmujecie się formalnościami i pozwoleniem na budowę?',
    a: 'Tak, oferujemy kompleksową obsługę formalno-prawną, w tym uzyskanie MPO, warunków zabudowy oraz pozwolenia na budowę w imieniu inwestora.',
  },
  {
    q: 'Jak wygląda proces nadzoru autorskiego nad budową?',
    a: 'W ramach nadzoru wizytujemy plac budowy, weryfikujemy zgodność prac z projektem oraz wspieramy wykonawców przy rozwiązywaniu detali technicznych.',
  },
  {
    q: 'Czy projektujecie również wnętrza budynków?',
    a: 'Tak, tworzymy spójne koncepcje architektoniczno-wnętrzarskie, dzięki czemu bryła i wnętrze budynku tworzą jednolitą całość.',
  },
];

export default function ArchitekturaDemo() {
  // --- STAN KALKULATORA ---
  const [area, setArea] = useState<number>(150);
  const [scope, setScope] = useState<'koncepcja' | 'pelny' | 'wnetrza'>('pelny');
  const [terrain, setTerrain] = useState<'prosty' | 'trudny'>('prosty');

  // Obliczanie szacunkowej ceny (przykład przelicznika PLN/m2)
  const calculateEstimate = () => {
    let baseRate = 180; // zł/m2 dla koncepcji
    if (scope === 'pelny') baseRate = 280;
    if (scope === 'wnetrza') baseRate = 350;

    const terrainMultiplier = terrain === 'trudny' ? 1.2 : 1.0;
    const total = area * baseRate * terrainMultiplier;
    return Math.round(total);
  };

  // --- STAN FAQ ---
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // --- STAN FORMULARZA ---
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          message: `[DEMO ARCHITEKTURA] ${formData.message}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* Pływający pasek powrotu */}
      <header className="fixed top-0 left-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-xl font-light tracking-widest uppercase text-white font-serif">
              AURA <span className="text-amber-500 font-sans font-bold text-xs tracking-normal">ARCHITECTS</span>
            </span>
            <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-0.5 rounded-full hidden sm:inline-block">
              Wersja Demo
            </span>
          </div>
          <Link
            href="/"
            className="text-xs font-semibold bg-neutral-800 hover:bg-amber-500 hover:text-black text-neutral-200 px-4 py-2 rounded-xl transition-all border border-neutral-700 hover:border-amber-500"
          >
            ← Powrót do oferty
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto text-center relative">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-amber-500 text-xs font-semibold uppercase tracking-[0.25em] bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20 inline-block mb-6"
        >
          Autorska Pracownia Architektoniczna
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight font-serif max-w-4xl mx-auto leading-tight"
        >
          Kreujemy przestrzeń <br />
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
            odporną na czas
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed"
        >
          Łączymy minimalistyczny design, zrównoważone materiały i precyzyjną inżynierię, tworząc budynki skrojone pod indywidualny styl życia.
        </motion.p>
      </section>

      {/* KALKULATOR KOSZTÓW PROJEKTU */}
      <section className="py-20 bg-neutral-900/40 border-y border-neutral-800/60 relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-serif tracking-wide mb-3">
              Interaktywny Kalkulator Projektu
            </h2>
            <p className="text-neutral-400 text-sm max-w-md mx-auto">
              Skonfiguruj wstępne parametry swojej inwestycji, aby otrzymać orientacyjną wycenę prac architektonicznych.
            </p>
          </motion.div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              {/* Suwak Metrażu */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                    Powierzchnia budynku (m²)
                  </label>
                  <span className="text-amber-400 font-bold text-lg font-mono">{area} m²</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-3 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-500 touch-none select-none my-2"
                />
              </div>

              {/* Zakres Projektu */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-3">
                  Zakres Opracowania
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { id: 'koncepcja', label: 'Koncepcja' },
                    { id: 'pelny', label: 'Pełny Projekt' },
                    { id: 'wnetrza', label: 'Z Wnętrzami' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setScope(item.id as typeof scope)}
                      className={`py-3 px-3 rounded-xl text-xs font-medium transition-all border ${
                        scope === item.id
                          ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                          : 'bg-neutral-950/50 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Warunki Terenowe */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-3">
                  Ukształtowanie Terenu
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'prosty', label: 'Działka płaska' },
                    { id: 'trudny', label: 'Działka ze spadkiem / trudna' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setTerrain(item.id as typeof terrain)}
                      className={`py-3 px-3 rounded-xl text-xs font-medium transition-all border ${
                        terrain === item.id
                          ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                          : 'bg-neutral-950/50 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Wynik Kalkulacji */}
            <div className="lg:col-span-5 bg-neutral-950 p-8 rounded-2xl border border-neutral-800/80 text-center flex flex-col justify-center h-full">
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                Szacowany Budżet Projektu
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono my-3">
                {calculateEstimate().toLocaleString('pl-PL')} PLN
              </div>
              <p className="text-[11px] text-neutral-500 leading-relaxed mb-6">
                Podana kwota ma charakter orientacyjny. Ostateczna wycena przygotowywana jest po zapoznaniu się z wytycznymi MPZP.
              </p>
              <a
                href="#kontakt"
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/10"
              >
                Zamów Dokładną Wycenę
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCYJNE FAQ */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs text-amber-500 uppercase tracking-widest font-semibold">Odpowiedzi</span>
          <h2 className="text-3xl font-serif mt-2">Często Zadawane Pytania</h2>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <div key={idx} className="bg-neutral-900/60 border border-neutral-800 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 text-sm font-medium hover:text-amber-400 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-amber-500 text-lg">{openFaq === idx ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-neutral-800/40 pt-4"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* FORMULARZ KONTAKTOWY */}
      <section className="py-24 bg-neutral-900/30 border-t border-neutral-800/60 relative" id="kontakt">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs text-amber-500 uppercase tracking-widest font-semibold">Kontakt</span>
            <h2 className="text-3xl sm:text-4xl font-serif mt-2">Omów swój projekt</h2>
            <p className="text-neutral-400 text-sm mt-3">
              Wypełnij formularz – odpowiemy w ciągu 24 godzin i umówimy wstępne spotkanie.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-5 bg-neutral-900 border border-neutral-800 p-8 sm:p-10 rounded-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Imię i Nazwisko
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="np. Jan Kowalski"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Adres E-mail
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jan@domena.pl"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Numer Telefonu
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+48 000 000 000"
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Wiadomość / Opis Inwestycji
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Napisz kilka słów o działce, planowanym metrażu lub wizji domu..."
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-semibold rounded-xl text-sm transition-all shadow-lg shadow-amber-500/10"
            >
              {status === 'loading' ? 'Wysyłanie...' : 'Wyślij Zapytanie'}
            </button>

            {status === 'success' && (
              <p className="text-emerald-400 text-xs text-center font-medium pt-2">
                ✓ Wiadomość została pomyślnie wysłana!
              </p>
            )}
            {status === 'error' && (
              <p className="text-rose-400 text-xs text-center font-medium pt-2">
                ✕ Wystąpił błąd podczas wysyłania. Spróbuj ponownie.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}