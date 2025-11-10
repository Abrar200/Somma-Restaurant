import React from 'react';

const galleryImages = [
  "https://d64gsuwffb70l.cloudfront.net/6910b85fd1556086d676c646_1762703567984_f0643e16.webp",
  "https://d64gsuwffb70l.cloudfront.net/6910b85fd1556086d676c646_1762703569852_7d33f64b.webp",
  "https://d64gsuwffb70l.cloudfront.net/6910b85fd1556086d676c646_1762703571596_af8c4cce.webp",
  "https://d64gsuwffb70l.cloudfront.net/6910b85fd1556086d676c646_1762703573901_9974cd42.webp",
  "https://d64gsuwffb70l.cloudfront.net/6910b85fd1556086d676c646_1762703575121_325e08d0.webp",
  "https://d64gsuwffb70l.cloudfront.net/6910b85fd1556086d676c646_1762703576872_a5649767.webp",
  "https://d64gsuwffb70l.cloudfront.net/6910b85fd1556086d676c646_1762703578654_9ff779ed.webp",
  "https://d64gsuwffb70l.cloudfront.net/6910b85fd1556086d676c646_1762703580424_d629a2e8.webp",
];

export function Gallery() {
  return (
    <section className="py-20 bg-white/30">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-4xl md:text-5xl text-center">Our Space</h2>
        <p className="mt-3 text-center max-w-2xl mx-auto font-sans text-somma-ink/80">
          A warm, inviting room designed for connection and celebration
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-cover bg-center" style={{ backgroundImage: `url('${img}')` }} />
          ))}
        </div>
      </div>
    </section>
  );
}
