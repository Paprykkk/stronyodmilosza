export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 border-b border-zinc-800/80 mb-12">
      {/* Lewa strona: Logo */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 border border-zinc-700 rounded-lg flex items-center justify-center bg-zinc-900 shadow-inner">
          <div className="w-2.5 h-2.5 bg-stone-100 rounded-full" />
        </div>
      </div>

      {/* Środek: Powiększone, idealnie wycentrowane zakładki */}
      <div className="hidden md:flex items-center gap-12 text-base font-semibold text-stone-200 tracking-wide">
        <a href="#o-mnie" className="hover:text-white transition">O mnie</a>
        <a href="#oferta" className="hover:text-white transition">Oferta</a>
        <a href="#kontakt" className="hover:text-white transition">Kontakt</a>
      </div>

      {/* Prawa strona: Przycisk */}
      <div>
        <a
          href="#kontakt"
          className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-stone-100 text-xs font-medium transition shadow-sm"
        >
          Wyślij wiadomość
        </a>
      </div>
    </nav>
  );
}