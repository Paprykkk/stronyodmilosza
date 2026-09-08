'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BudowlankaDemo() {
  const services = [
    { title: "Kompleksowe Wykończenia", desc: "Remonty mieszkań i domów pod klucz według projektu lub indywidualnych ustaleń." },
    { title: "Łazienki Premium", desc: "Precyzyjne układanie spieków wielkoformatowych, hydroizolacje i biały montaż." },
    { title: "Gładzie i Malowanie Natryskowe", desc: "Idealnie gładkie ściany w krótkim czasie dzięki nowoczesnym agregatom." },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-zinc-950">
      {/* Banner Demo */}
      <div className="bg-zinc-900 border-b border-zinc-800 py-2 px-4 text-center text-xs font-mono text-zinc-400 flex justify-between items-center">
        <span>Projekt Demonstracyjny: Firma Remontowo-Budowlana</span>
        <Link href="/" className="underline hover:text-zinc-200 transition">← Powrót do stronyodmilosza.pl</Link>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            Gwarancja stałej ceny w umowie
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-100 mb-6">
            Wykończenia wnętrz bez stresu, opóźnień i niespodzianek.
          </h1>
          <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed">
            Realizujemy kompleksowe remonty mieszkań i domów na terenie całego województwa. Czysty plac budowy, terminowość i 3 lata pisemnej gwarancji.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#kontakt" className="bg-amber-500 text-zinc-950 font-semibold px-8 py-3.5 rounded-xl hover:bg-amber-400 text-center transition">
              Zamów darmową wycenę
            </a>
            <a href="#realizacje" className="border border-zinc-800 bg-zinc-900/50 px-8 py-3.5 rounded-xl text-center hover:bg-zinc-800 transition">
              Zobacz nasze prace
            </a>
          </div>
        </motion.div>
      </section>

      {/* Usługi */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-zinc-800/80">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">W czym się specjalizujemy?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div key={index} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition">
              <h3 className="text-xl font-semibold text-amber-400 mb-3">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Liczby / Korzyści */}
      <section className="max-w-6xl mx-auto px-6 py-12 bg-zinc-900/30 rounded-3xl border border-zinc-800/50 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-zinc-100">100%</div>
            <div className="text-xs text-zinc-400 mt-1">Dotrzymanych terminów</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-zinc-100">3 Lata</div>
            <div className="text-xs text-zinc-400 mt-1">Gwarancji na wykonanie</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-zinc-100">0 zł</div>
            <div className="text-xs text-zinc-400 mt-1">Za dojazd i wycenę</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-zinc-100">150+</div>
            <div className="text-xs text-zinc-400 mt-1">Wykończonych łazienek</div>
          </div>
        </div>
      </section>
    </div>
  );
}