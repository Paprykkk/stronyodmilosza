'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ArchitekturaDemo() {
  const projects = [
    { title: "Apartment Powiśle", area: "120 m²", style: "Minimalizm / Japandi", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" },
    { title: "Villa Wilanów", area: "280 m²", style: "Modern Classic", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800" },
    { title: "Penthouse Mokotów", area: "95 m²", style: "Industrialny Loft", img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 selection:bg-stone-200 selection:text-stone-900">
      {/* Banner informacyjny Demo */}
      <div className="bg-stone-800/90 border-b border-stone-700/50 py-2 px-4 text-center text-xs font-mono text-stone-400 flex justify-between items-center">
        <span>Projekt Demonstracyjny: Studio Architektury</span>
        <Link href="/" className="underline hover:text-stone-200 transition">← Powrót do stronyodmilosza.pl</Link>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-400 border border-stone-700 px-3 py-1 rounded-full">
            Studio Architektury Wnętrz
          </span>
          <h1 className="text-4xl md:text-6xl font-light text-stone-100 mt-6 mb-6 leading-tight">
            Projektujemy przestrzenie, <br />
            <span className="font-serif italic text-stone-300">które definiują Twój styl życia.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-stone-400 text-sm md:text-base leading-relaxed mb-8">
            Tworzymy ponadczasowe wnętrza prywatne i komercyjne. Połączenie funkcjonalności, naturalnych materiałów i dbałości o każdy detal.
          </p>
          <a href="#kontakt" className="inline-block bg-stone-100 text-stone-900 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-stone-300 transition">
            Darmowa konsultacja
          </a>
        </motion.div>
      </section>

      {/* Portfolio / Realizacje */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-stone-800">
        <h2 className="text-2xl md:text-3xl font-light mb-10">Wybrane Wykonania</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <motion.div key={index} whileHover={{ y: -5 }} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-stone-800 mb-4">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <h3 className="text-lg font-medium text-stone-200">{item.title}</h3>
              <p className="text-xs text-stone-400 mt-1">{item.area} • {item.style}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cennik */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-stone-800">
        <h2 className="text-2xl md:text-3xl font-light mb-10 text-center">Pakiety Projektowe</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-stone-800/40 border border-stone-700/50">
            <h3 className="text-xl font-medium mb-2">Projekt Koncepcyjny</h3>
            <p className="text-3xl font-light text-stone-200 mb-6">140 PLN <span className="text-xs text-stone-400">/ m²</span></p>
            <ul className="space-y-3 text-sm text-stone-300 mb-8">
              <li>• Układ funkcjonalny 2D (3 warianty)</li>
              <li>• Fotorealistyczne wizualizacje 3D</li>
              <li>• Dobór kolorystyki i materiałów</li>
            </ul>
            <button className="w-full py-3 rounded-xl border border-stone-600 text-sm hover:bg-stone-700 transition">Wybierz pakiet</button>
          </div>
          <div className="p-8 rounded-2xl bg-stone-800 border border-stone-600 relative">
            <span className="absolute -top-3 right-6 bg-stone-200 text-stone-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Polecany</span>
            <h3 className="text-xl font-medium mb-2">Projekt Wykonawczy z Nadzorem</h3>
            <p className="text-3xl font-light text-stone-200 mb-6">220 PLN <span className="text-xs text-stone-400">/ m²</span></p>
            <ul className="space-y-3 text-sm text-stone-300 mb-8">
              <li>• Pełna dokumentacja dla wykonawców</li>
              <li>• Kosztorys i lista zakupowa z linkami</li>
              <li>• Nadzór autorski nad ekipą remontową</li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-stone-100 text-stone-900 font-medium text-sm hover:bg-stone-300 transition">Wybierz pakiet</button>
          </div>
        </div>
      </section>
    </div>
  );
}