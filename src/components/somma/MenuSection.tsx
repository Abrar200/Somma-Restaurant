import React from 'react';

const menuItems = [
  { title: "Whipped Tarama", category: "Mezze", desc: "Cured cod roe, lemon, olive oil", img: "https://d64gsuwffb70l.cloudfront.net/6910b85fd1556086d676c646_1762703542676_da795461.webp" },
  { title: "Saganaki", category: "Mezze", desc: "Pan-fried cheese, honey, sesame", img: "https://d64gsuwffb70l.cloudfront.net/6910b85fd1556086d676c646_1762703545012_2a1caeed.webp" },
  { title: "Spanakopita", category: "Mezze", desc: "Spinach, feta, crisp phyllo", img: "https://d64gsuwffb70l.cloudfront.net/6910b85fd1556086d676c646_1762703554998_c60b5e41.webp" },
  { title: "Charred Octopus", category: "Seafood", desc: "Wood-fired, lemon, herbs", img: "https://d64gsuwffb70l.cloudfront.net/6910b85fd1556086d676c646_1762703543460_9f8c3068.webp" },
  { title: "Market Fish", category: "Seafood", desc: "Daily catch, lemon oil", img: "https://d64gsuwffb70l.cloudfront.net/6910b85fd1556086d676c646_1762703545754_65430ff0.webp" },
  { title: "Ouzo Prawns", category: "Seafood", desc: "Grilled prawns, ouzo sauce", img: "https://d64gsuwffb70l.cloudfront.net/6910b85fd1556086d676c646_1762703557315_f88b8d34.webp" },
  { title: "Lamb Shoulder", category: "From the Fire", desc: "Slow-roasted, herbs, garlic", img: "https://d64gsuwffb70l.cloudfront.net/6910b85fd1556086d676c646_1762703544241_e19d545e.webp" },
  { title: "Moussaka", category: "From the Fire", desc: "Layered eggplant, béchamel", img: "https://d64gsuwffb70l.cloudfront.net/6910b85fd1556086d676c646_1762703558036_2bbe3c1f.webp" },
  { title: "Wood-Roasted Potatoes", category: "Vegetables", desc: "Lemon, oregano, olive oil", img: "https://d64gsuwffb70l.cloudfront.net/6910b85fd1556086d676c646_1762703558767_b80f34e1.webp" },
  { title: "Greek Salad", category: "Vegetables", desc: "Tomato, cucumber, feta, olives", img: "https://d64gsuwffb70l.cloudfront.net/6910b85fd1556086d676c646_1762703556538_0547aa02.webp" },
  { title: "Baklava", category: "Desserts", desc: "Phyllo, honey, pistachios", img: "https://d64gsuwffb70l.cloudfront.net/6910b85fd1556086d676c646_1762703555799_3a8d13e2.webp" },
];

export function MenuSection() {
  return (
    <section id="menu" className="relative py-20">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[.22] mix-blend-multiply bg-center bg-repeat" style={{
        backgroundImage: "var(--texture-url)",
        backgroundColor: "var(--somma)",
      }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="font-display text-4xl md:text-5xl">Menu</h2>
        <p className="mt-3 max-w-3xl font-sans text-somma-ink/80">
          Local South Australian produce with Mediterranean restraint. Clean, bright, and generously seasoned.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div key={item.title} className="rounded-2xl overflow-hidden bg-white/40 backdrop-blur-xl border border-somma-ink/10 shadow-xl">
              <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: `url('${item.img}')` }} />
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-somma-ink/60">{item.category}</p>
                <h3 className="font-display text-xl mt-1">{item.title}</h3>
                <p className="mt-2 text-sm font-sans text-somma-ink/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
