'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const demos = [
  {
    title: 'Studio Architektury',
    category: 'Architektura & Design',
    description: 'Minimalistyczna wizytówka premium ze zdjęciami w wysokiej rozdzielczości, elegancką typografią i intuicyjnym formularzem zapytania.',
    href: '/demo/architektura',
    badge: 'Demo Architektura',
    accentColor: 'border-amber-500/30 hover:border-amber-500',
    badgeStyle: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
  {
    title: 'Firma Budowlana',
    category: 'Budownictwo & Wykonawstwo',
    description: 'Nowoczesny serwis prezentujący zakres usług, park maszynowy, certyfikaty oraz interaktywne portfolio zrealizowanych inwestycji.',
    href: '/demo/budownictwo',
    badge: 'Demo Budownictwo',
    accentColor: 'border-amber-500/30 hover:border-amber-500',
    badgeStyle: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
];

export default function DemosSection() {
  return (
    <section className="py-24 bg-neutral-950 text-white relative overflow-hidden" id="dema">
      {/* Tło i dekoracyjne światło */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Nagłówek sekcji */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 inline-block mb-4">
            Podgląd Realizacji
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Przetestuj gotowe wersje demo
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            Zobacz na żywo dopracowane szablony dedykowane dla branży architektonicznej oraz budowlanej.
          </p>
        </div>

        {/* Siatka kart z demami */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {demos.map((demo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`group relative bg-neutral-900/80 border ${demo.accentColor} rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-amber-500/5`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${demo.badgeStyle}`}>
                    {demo.badge}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                    {demo.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition-colors">
                  {demo.title}
                </h3>
                
                <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                  {demo.description}
                </p>
              </div>

              <Link
                href={demo.href}
                target="_blank"
                className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-neutral-800 hover:bg-amber-500 hover:text-black font-semibold rounded-xl transition-all duration-300 gap-2 text-sm border border-neutral-700 hover:border-amber-500 group-hover:shadow-lg"
              >
                Zobacz demo na żywo
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}