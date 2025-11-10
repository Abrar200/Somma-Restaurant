import React from 'react';

export function ChefSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-cover bg-center" style={{
      backgroundImage: "url('https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1762719887252_4ddfc0de.png')",
    }}>
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 group rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-cover bg-center transform transition-all duration-700 hover:scale-[1.03] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]" style={{
            backgroundImage: "url('https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1762709623080_8662d5a0.png')",
          }}>
            <div className="w-full h-full bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
          <div className="md:col-span-3 space-y-6">

            <h2 className="font-display text-5xl md:text-6xl leading-tight" style={{ color: '#EAE8E2' }}>Our Philosophy</h2>
            <div className="space-y-5 text-lg">
              <p className="font-sans leading-relaxed" style={{ color: '#EAE8E2' }}>
                At SOMMA, we draw from Greek flavours and traditions, but express them in a modern, understated way.
              </p>
              <p className="font-sans leading-relaxed" style={{ color: '#EAE8E2' }}>
                Our kitchen focuses on seafood, charcoal cooking, and produce that's at its best right now.
              </p>
              <p className="font-sans leading-relaxed" style={{ color: '#EAE8E2' }}>
                We keep things simple, but never plain. Every dish begins with care, moves with intention, and arrives to the table meant for sharing warm, relaxed, and unhurried.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
