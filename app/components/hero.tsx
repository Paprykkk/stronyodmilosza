export default function Hero() {
  return (
    <section className="pt-10 pb-16 md:pt-16 md:pb-24 flex flex-col items-center text-center relative">
      
      {/* Subtelna poświata w tle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />

      {/* Mała etykieta */}
      <div className="inline-block px-4 py-1.5 mb-6 text-xs font-mono font-medium tracking-wider text-stone-300 uppercase bg-zinc-900/80 rounded-full border border-zinc-800 shadow-inner">
        Nowoczesny design & Szybkość
      </div>

      {/* Główny nagłówek */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-stone-100 max-w-4xl tracking-tight leading-[1.1] mb-8">
        Zmień przestarzałą stronę w <span className="font-semibold bg-gradient-to-r from-stone-100 via-stone-300 to-zinc-500 bg-clip-text text-transparent">machinę do zdobywania klientów</span>
      </h1>

      {/* Opis */}
      <p className="text-zinc-400 text-base md:text-lg font-light max-w-2xl leading-relaxed mb-10">
        Tworzę błyskawiczne, eleganckie strony-wizytówki dla firm, które chcą wyróżnić się na tle konkurencji i budować zaufanie od pierwszego kliknięcia.
      </p>

      {/* Przyciski CTA */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
        <a
          href="#kontakt"
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-stone-100 hover:bg-white text-zinc-950 font-medium text-sm transition shadow-lg flex items-center justify-center gap-2"
        >
          Zamów darmowy podgląd strony
        </a>
        <a
          href="#oferta"
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 text-stone-300 font-medium text-sm transition"
        >
          Zobacz ofertę i cennik
        </a>
      </div>

    </section>
  );
}