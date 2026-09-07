export default function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-800/80 bg-zinc-950 text-center text-xs text-zinc-500 font-light">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          © {new Date().getFullYear()} Miłosz Walasik. Wszystkie prawa zastrzeżone.
        </div>
        
        <div className="flex items-center gap-6 text-zinc-400">
          <a href="#o-mnie" className="hover:text-stone-100 transition">O mnie</a>
          <a href="#oferta" className="hover:text-stone-100 transition">Oferta</a>
          <a href="#kontakt" className="hover:text-stone-100 transition">Kontakt</a>
        </div>
      </div>
    </footer>
  );
}