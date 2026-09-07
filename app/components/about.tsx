import Image from "next/image";

export default function About() {
  return (
    <section id="o-mnie" className="py-20 border-t border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6 md:px-0">
        <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md relative overflow-hidden">
          
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-zinc-700/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Zdjęcie Profilowe */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-48 h-64 md:w-full md:h-80 rounded-2xl overflow-hidden border border-zinc-700/60 shadow-2xl">
                <Image
                  src="/27108.jpg" 
                  alt="Miłosz Walasik"
                  fill
                  className="object-cover object-center transition duration-500"
                />
              </div>
            </div>

            {/* Treść */}
            <div className="md:col-span-8">
              <div className="inline-block px-3.5 py-1 mb-4 text-[11px] font-mono font-medium tracking-wider text-stone-300 uppercase bg-zinc-800/80 rounded-full border border-zinc-700/60">
                Kim jestem i dlaczego warto mi zaufać
              </div>

              <h2 className="text-3xl md:text-4xl font-light text-stone-100 mb-4 leading-tight">
                Cześć, jestem <span className="font-semibold bg-gradient-to-r from-stone-100 via-stone-300 to-zinc-500 bg-clip-text text-transparent">Miłosz</span>
              </h2>

              <p className="text-zinc-300 text-sm md:text-base font-light leading-relaxed mb-6">
                Projektowaniem i tworzeniem stron zajmuję się samodzielnie – od pierwszego wersu kodu, przez design, aż po wdrożenie. Zamiast bezosobowej agencji otrzymujesz dedykowanego specjalistę, z którym rozmawiasz bezpośrednio.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/60">
                  <h3 className="text-stone-200 font-medium text-xs mb-1">Indywidualne podejście</h3>
                  <p className="text-zinc-400 text-[11px] font-light leading-relaxed">
                    Nie ma tu taśmowej produkcji. Każdy projekt dopracowuję osobiście z dbałością o każdy detal.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/60">
                  <h3 className="text-stone-200 font-medium text-xs mb-1">Czysty kontakt</h3>
                  <p className="text-zinc-400 text-[11px] font-light leading-relaxed">
                    Bez korporacyjnego żargonu i pośredników. Piszesz bezpośrednio do mnie i w tym samym trybie rozwiązywane są zadania.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="#kontakt"
                  className="px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-white text-zinc-950 font-medium text-xs transition shadow-md"
                >
                  Napisz do mnie bezpośrednio
                </a>
                <a
                  href="https://www.linkedin.com/in/mi%C5%82osz-walasik-464383265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl border border-zinc-700 hover:bg-zinc-800 text-stone-300 font-medium text-xs transition flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                  </svg>
                  Profil LinkedIn
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}