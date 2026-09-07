export default function Offer() {
  const plans = [
    {
      timeBadge: "~3 dni robocze*",
      price: "od 2 500 zł",
      title: "Prosta Wizytówka (One-Page)",
      description: "Błyskawicznie ładująca się strona lądowania z formularzem i prezentacją oferty. Idealna dla lokalnych firm usługowych.",
      note: "*Czas wdrożenia zależy od sprawnej komunikacji oraz szybkiego dostarczenia materiałów (tekstów, logo, zdjęć)."
    },
    {
      timeBadge: "~1 - 2 tygodnie*",
      price: "od 3 800 zł",
      title: "Rozbudowana Strona Firmowa",
      description: "Wielostronicowa witryna z osobnymi zakładkami usług, cennikiem i zaawansowanym podłożem pod SEO.",
      note: "*Czas wdrożenia zależy od sprawnej komunikacji oraz szybkiego dostarczenia materiałów / akceptacji projektów."
    },
    {
      timeBadge: "~2 - 3 tygodnie*",
      price: "od 5 000 zł",
      title: "Sklep Internetowy (E-commerce)",
      description: "Dedykowany sklep z integracją płatności online, katalogiem produktów i systemem obsługi zamówień.",
      note: "*Czas wdrożenia zależy od sprawnej komunikacji oraz szybkiego dostarczenia opisów, cenników i zdjęć produktów."
    }
  ];

  return (
    <section id="oferta" className="py-20 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-stone-100 mb-4">
            Cennik i czas <span className="font-semibold bg-gradient-to-r from-stone-100 via-stone-300 to-zinc-500 bg-clip-text text-transparent">pracy</span>
          </h2>
          <p className="text-zinc-400 font-light text-sm md:text-base max-w-xl mx-auto">
            Każdy projekt wyceniam indywidualnie. Poniżej znajdziesz orientacyjne widełki cenowe i czas realizacji.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition"
            >
              <div>
                {/* Górna belka w kafelku: czas i cena */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800/80">
                  <span className="px-3 py-1 rounded-full bg-zinc-800/80 text-zinc-300 font-mono text-[11px]">
                    {plan.timeBadge}
                  </span>
                  <span className="text-stone-100 font-semibold text-lg">
                    {plan.price}
                  </span>
                </div>

                <h3 className="text-lg font-medium text-stone-100 mb-3">{plan.title}</h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6">
                  {plan.description}
                </p>
              </div>

              <p className="text-[10px] text-zinc-500 font-light leading-normal pt-4 border-t border-zinc-900">
                {plan.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}