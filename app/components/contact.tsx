'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      website: formData.get('website'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Coś poszło nie tak.');
      }

      setSubmitted(true);
    } catch (err) {
      setError('Nie udało się wysłać wiadomości. Spróbuj ponownie później.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="kontakt" className="py-20 border-t border-zinc-800/80">
      <div className="max-w-3xl mx-auto px-6">
        <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md relative overflow-hidden">
          
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-zinc-700/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-light text-stone-100 mb-3">
              Skontaktuj <span className="font-semibold bg-gradient-to-r from-stone-100 via-stone-300 to-zinc-500 bg-clip-text text-transparent">się ze mną</span>
            </h2>
            <p className="text-zinc-400 font-light text-sm">
              Wypełnij formularz, a odezwę się do Ciebie najszybciej jak to możliwe.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                ✓
              </div>
              <h3 className="text-xl font-medium text-stone-100 mb-2">Wiadomość wysłana!</h3>
              <p className="text-zinc-400 text-xs font-light">
                Dziękuję za kontakt. Odpowiem na Twoje zgłoszenie w najbliższym czasie.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Imię i nazwisko */}
              <div>
                <label className="block text-xs font-light text-zinc-400 mb-2">
                  Imię i nazwisko / Nazwa firmy
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jan Kowalski"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-stone-100 text-sm focus:outline-none focus:border-stone-400 transition"
                />
              </div>

              {/* Adres e-mail */}
              <div>
                <label className="block text-xs font-light text-zinc-400 mb-2">
                  Adres e-mail
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jan@firma.pl"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-stone-100 text-sm focus:outline-none focus:border-stone-400 transition"
                />
              </div>

              {/* Adres obecnej strony */}
              <div>
                <label className="block text-xs font-light text-zinc-400 mb-2">
                  Adres obecnej strony (opcjonalnie)
                </label>
                <input
                  type="text"
                  name="website"
                  placeholder="www.twojafirma.pl"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-stone-100 text-sm focus:outline-none focus:border-stone-400 transition"
                />
              </div>

              {/* Pole na wiadomość */}
              <div>
                <label className="block text-xs font-light text-zinc-400 mb-2">
                  Wiadomość
                </label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  placeholder="Napisz, w czym mogę Ci pomóc..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-stone-100 text-sm focus:outline-none focus:border-stone-400 transition resize-none"
                />
              </div>

              {error && (
                <p className="text-red-400 text-xs text-center">{error}</p>
              )}

              {/* Przycisk wysyłania */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-stone-100 hover:bg-white text-zinc-950 font-medium text-sm transition shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-50"
              >
                {loading ? "Wysyłanie..." : "Wyślij wiadomość"}
              </button>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}