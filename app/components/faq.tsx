'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Czy muszę posiadać własne teksty, zdjęcia i logo?",
      answer: "Nie musisz mieć wszystkiego od razu. Oczywiście, jeśli posiadasz własne materiały, znacznie ułatwi i przyspieszy to naszą pracę. Jeśli jednak ich nie masz, pomogę Ci poukładać treść, dobić profesjonalne darmowe zdjęcia oraz przygotować strukturę, która wyeksponuje Twoje usługi."
    },
    {
      question: "Czy po wdrożeniu będę w stanie samodzielnie edytować stronę?",
      answer: "Tak, stronę będziesz mógł łatwo edytować w zakresie zmiany tekstów oraz poszczególnych bloków. Dodatkowo po zakończeniu prac nagram dla Ciebie dedykowany wideo-tutorial, w którym krok po kroku pokażę, jak w prosty sposób zarządzać treścią."
    },
    {
      question: "Jak wygląda kwestia domeny i hostingu?",
      answer: "Pomagam we wszystkim od A do Z – od wyboru i zakupu domeny po bezpłatny, szybki hosting. Nie musisz się martwić kwestiami technicznymi."
    }
  ];

  return (
    <section className="py-20 border-t border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="inline-block px-3.5 py-1 mb-4 text-[11px] font-mono font-medium tracking-wider text-stone-300 uppercase bg-zinc-900/80 rounded-full border border-zinc-800">
            Odpowiedzi na pytania
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-stone-100 mb-4">
            Często zadawane <span className="font-semibold bg-gradient-to-r from-stone-100 via-stone-300 to-zinc-500 bg-clip-text text-transparent">pytania</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="rounded-2xl bg-zinc-900/40 border border-zinc-800 overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-stone-100 font-medium text-sm md:text-base">
                    {faq.question}
                  </span>
                  <span className={`text-stone-400 text-xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-zinc-400 text-xs md:text-sm font-light leading-relaxed border-t border-zinc-800/40 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}