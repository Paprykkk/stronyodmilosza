export default function Process() {
  const steps = [
    {
      number: "KROK 01",
      title: "Bezpłatny podgląd i analiza",
      description: "Rozmawiamy o Twoich potrzebach. Przygotowuję wstępną, bezpłatną koncepcję strony – widzisz efekt przed podjęciem decyzji i wydaniem złotówki."
    },
    {
      number: "KROK 02",
      title: "Prosta umowa i zaliczka",
      description: "Akceptujesz projekt i ustalamy szczegóły. Podpisujemy przejrzystą umowę, a Ty wpłacasz zaliczkę na start prac."
    },
    {
      number: "KROK 03",
      title: "Dopracowanie i treść",
      description: "Uzupełniam witrynę Twoimi materiałami (lub pomagam je stworzyć). Szlifujemy detale na serwerze testowym."
    },
    {
      number: "KROK 04",
      title: "Odbiór i wdrożenie",
      description: "Po pełnej akceptacji opłacasz resztę kwoty. Podpinamy Twoją domenę i strona oficjalnie startuje w sieci."
    }
  ];

  return (
    <section className="py-20 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-stone-100 mb-4">
            Jak wygląda proces <span className="font-semibold bg-gradient-to-r from-stone-100 via-stone-300 to-zinc-500 bg-clip-text text-transparent">krok po kroku?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition"
            >
              <div className="text-xs font-mono font-medium text-stone-400 uppercase tracking-widest mb-3">
                {step.number}
              </div>
              <h3 className="text-xl font-medium text-stone-100 mb-3">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}