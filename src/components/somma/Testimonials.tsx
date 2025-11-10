import React from 'react';

const testimonials = [
  { quote: "The most refined Greek dining experience in Adelaide. Every dish is a revelation.", author: "Sarah M.", source: "The Advertiser" },
  { quote: "SOMMA elevates Mediterranean cuisine to an art form. Impeccable service, stunning flavors.", author: "James K.", source: "Gourmet Traveller" },
  { quote: "A masterclass in restraint and flavor. The octopus alone is worth the visit.", author: "Emma L.", source: "Delicious Magazine" },
  { quote: "Warm, inviting, and utterly delicious. SOMMA has become our go-to for special occasions.", author: "Michael T.", source: "Google Reviews" },
  { quote: "Chef Andreas brings authenticity and innovation in perfect balance. A true gem.", author: "Sophie R.", source: "Broadsheet Adelaide" },
  { quote: "The wine list is exceptional, the atmosphere is magical, and the food is unforgettable.", author: "David P.", source: "Yelp" },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white/20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-4xl md:text-5xl text-center">What Our Guests Say</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white/40 backdrop-blur-xl border border-somma-ink/10 shadow-xl">
              <p className="font-sans text-somma-ink/80 italic">"{t.quote}"</p>
              <p className="mt-4 text-sm font-sans text-somma-ink/60">— {t.author}, <span className="italic">{t.source}</span></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
