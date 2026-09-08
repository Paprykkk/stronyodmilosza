'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// --- DANE FAQ ---
const faqData = [
  {
    q: 'Czy realizujecie inwestycje od stanu zerowego po stan pod klucz?',
    a: 'Tak, oferujemy kompleksowe wykonawstwo – od prac ziemnych i fundamentowych, przez stan surowy otwarty/zamknięty, aż po pełne wykończenie wnętrz i odbiór końcowy.',
  },
  {
    q: 'Jak wygląda kwestia gwarancji na wykonane prace budowlane?',
    a: 'Na wszystkie realizowane przez nas prace konstrukcyjne i budowlane udzielamy pisemnej gwarancji (od 5 do 10 lat, w zależności od zakresu umowy).',
  },
  {
    q: 'Czy pomagacie w zakupie i transporcie materiałów budowlanych?',
    a: 'Tak, dzięki stałej współpracy z hurtowniami zapewniamy materiały w hurtowych cenach wraz z pełną logistyką i transportem na plac budowy.',
  },
  {
    q: 'Jak rozliczane są etapy budowy?',
    a: 'Rozliczenie odbywa się etapowo (tzw. harmonogram rzeczowo-finansowy). Płatność za dany etap następuje dopiero po jego odbiorze technicznym.',
  },
];

export default function BudownictwoDemo() {
  // --- STAN KALKULATORA ---
  const [area, setArea] = useState<number>(160);
  const [stage, setStage] = useState<'surowy' | 'deweloperski' | 'klucz'>('deweloperski');
  const [tech, setTech] = useState<'tradycyjna' | 'pustak' | 'prefaby'>('tradycyjna');

  // Obliczanie szacunkowego kosztu budowy (PLN/m2)
  const calculateEstimate = () => {
    let baseRate = 2200; // zł/m2 dla stanu surowego
    if (stage === 'deweloperski') baseRate = 4100;
    if (stage === 'klucz') baseRate = 5800;

    let techMultiplier = 1.0;
    if (tech === 'prefaby') techMultiplier = 1.15;

    const total = area * baseRate * techMultiplier;
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
          message: `[DEMO BUDOWNICTWO] ${formData.message}`,
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
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* Pływający nagłówek */}
      <header className="fixed top-0 left-0 w-full z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-xl font-black tracking-wider uppercase text-amber-500">
              BUD<span className="text-white">-BUILD</span>
            </span>
            <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-0.5 rounded-full hidden sm:inline-block">
              Wersja Demo
            </span>
          </div>
          <Link
            href="https://stronyodmilosza.pl"
            className="text-xs font-semibold bg-stone-800 hover:bg-amber-500 hover:text-black text-stone-200 px-4 py-2 rounded-xl transition-all border border-stone-700 hover:border-amber-500"
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
          className="text-amber-500 text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20 inline-block mb-6"
        >
          Generalny Wykonawca Inwestycji
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight uppercase"
        >
          Budujemy na solidnych <br />
          <span className="text-amber-500">fundamentach</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-stone-400 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Kompleksowa realizacja obiektów przemysłowych, usługowych oraz domów jednorodzinnych z gwarancją stałej ceny i terminowości.
        </motion.p>
      </section>

      {/* KALKULATOR KOSZTÓW BUDOWY */}
      <section className="py-20 bg-stone-900/40 border-y border-stone-800 relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide mb-3">
              Kalkulator Szacunkowy Budowy
            </h2>
            <p className="text-stone-400 text-sm max-w-md mx-auto">
              Zaznacz docelowy metraż oraz stan wykończenia, aby obliczyć wstępny koszt wykonania inwestycji.
            </p>
          </motion.div>

          <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              {/* Suwak Metrażu */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                    Powierzchnia użytkowa (m²)
                  </label>
                  <span className="text-amber-500 font-bold text-lg font-mono">{area} m²</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="400"
                  step="10"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-3 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500 touch-none select-none my-2"
                />
              </div>

              {/* Etap Wykończenia */}
              <div>
                <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-3">
                  Etap Realizacji
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { id: 'surowy', label: 'Stan Surowy' },
                    { id: 'deweloperski', label: 'Deweloperski' },
                    { id: 'klucz', label: 'Pod Klucz' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setStage(item.id as typeof stage)}
                      className={`py-3 px-3 rounded-xl text-xs font-bold transition-all border ${
                        stage === item.id
                          ? 'bg-amber-500 text-black border-amber-500'
                          : 'bg-stone-950/50 border-stone-800 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Technologia */}
              <div>
                <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-3">
                  Technologia Budowy
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'tradycyjna', label: 'Ceramika / Gazobeton' },
                    { id: 'prefaby', label: 'Prefabrykowana (Szybka)' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setTech(item.id as typeof tech)}
                      className={`py-3 px-3 rounded-xl text-xs font-bold transition-all border ${
                        tech === item.id
                          ? 'bg-amber-500 text-black border-amber-500'
                          : 'bg-stone-950/50 border-stone-800 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Wynik Kalkulacji */}
            <div className="lg:col-span-5 bg-stone-950 p-8 rounded-2xl border border-stone-800 text-center flex flex-col justify-center h-full">
              <span className="text-xs uppercase tracking-widest text-stone-500 font-bold">
                Szacowany Koszt Inwestycji
              </span>
              <div className="text-3xl sm:text-4xl font-black text-amber-500 font-mono my-3">
                ~{calculateEstimate().toLocaleString('pl-PL')} PLN
              </div>
              <p className="text-[11px] text-stone-500 leading-relaxed mb-6">
                Wyliczenie szacunkowe netto dla materiałów oraz robocizny. Dokładny kosztorys tworzymy po przeanalizowaniu projektu budowlanego.
              </p>
              <a
                href="#kontakt"
                className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/10"
              >
                Zamów Wyliczenie Kosztorysu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs text-amber-500 uppercase tracking-widest font-bold">Pytania i Odpowiedzi</span>
          <h2 className="text-3xl font-extrabold uppercase mt-2">Często Zadawane Pytania</h2>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <div key={idx} className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 text-sm font-bold hover:text-amber-500 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-amber-500 text-xl font-bold">{openFaq === idx ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-xs sm:text-sm text-stone-400 leading-relaxed border-t border-stone-800 pt-4"
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
      <section className="py-24 bg-stone-900/30 border-t border-stone-800 relative" id="kontakt">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs text-amber-500 uppercase tracking-widest font-bold">Darmowa Wycena</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase mt-2">Zapytaj o Termin Budowy</h2>
            <p className="text-stone-400 text-sm mt-3">
              Prześlij nam swój projekt lub opis planowanej budowy – odpowiemy z przygotowaną ofertą.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-5 bg-stone-900 border border-stone-800 p-8 sm:p-10 rounded-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                  Imię i Nazwisko
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="np. Marek Nowak"
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                  Adres E-mail
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="marek@domena.pl"
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                Numer Telefonu
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+48 000 000 000"
                className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                Lokalizacja Działki i Opis
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Podaj miejscowość, metraż oraz planowany termin rozpoczęcia budowy..."
                className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-extrabold uppercase rounded-xl text-sm transition-all shadow-lg shadow-amber-500/10"
            >
              {status === 'loading' ? 'Wysyłanie...' : 'Wyślij Zapytanie o Wycenę'}
            </button>

            {status === 'success' && (
              <p className="text-emerald-400 text-xs text-center font-bold pt-2">
                ✓ Zapytanie zostało pomyślnie wysłane!
              </p>
            )}
            {status === 'error' && (
              <p className="text-rose-400 text-xs text-center font-bold pt-2">
                ✕ Wystąpił błąd podczas wysyłania. Spróbuj ponownie.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}