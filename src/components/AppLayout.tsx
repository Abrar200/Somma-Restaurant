import React, { useState } from 'react';
import { StyleTokens } from './somma/StyleTokens';
import { GlassBookNow } from './somma/GlassBookNow';
import { GlassViewMenu } from './somma/GlassViewMenu';
import { BookingModal } from './somma/BookingModal';
import { ChefSection } from './somma/ChefSection';
import { LocationHours } from './somma/LocationHours';
import { MobileMenu } from './somma/MobileMenu';

const AppLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-somma-cream text-somma-ink" style={{
      backgroundImage: 'var(--texture-url)',
      backgroundRepeat: 'repeat',
      backgroundSize: '400px 400px'
    }}>
      <StyleTokens />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} scrollTo={scrollTo} onBookNowClick={() => setBookingModalOpen(true)} />
      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
      
      
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-md bg-somma-cream/70 border-b border-somma-ink/10 transition-all duration-300">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo('top')} className="h-8 md:h-10 transition-all duration-300 hover:scale-110">
            <img src="https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1762723602800_889a7611.png" alt="SOMMA" className="h-full w-auto" />
          </button>
          <nav className="hidden md:flex items-center gap-8 font-sans text-sm" style={{ color: '#eae8e2' }}>
            <button onClick={() => scrollTo('about')} className="transition-all duration-300 hover:opacity-70 hover:scale-110">About</button>
            <button onClick={() => scrollTo('contact')} className="transition-all duration-300 hover:opacity-70 hover:scale-110">Contact</button>
            <a href="https://somma.vercel.app/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:opacity-70 hover:scale-110">Join our team</a>
            <GlassBookNow onClick={() => setBookingModalOpen(true)} size="sm"/>
          </nav>
          <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-2xl transition-all duration-300 hover:scale-110 hover:rotate-90">☰</button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate flex flex-col justify-between md:flex-col md:items-center md:justify-center min-h-[60vh] md:min-h-[88vh] overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{
          backgroundImage: "url('https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1762703439803_7d7be25e.jpg')",
          backgroundPosition: 'center 40%',
        }} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Text content - top half on mobile, centered on desktop */}
        <div className="w-full px-6 pt-24 md:pt-0 md:text-center animate-fade-in">
          <div className="max-w-2xl md:mx-auto">
            <p className="uppercase tracking-[0.25em] text-[10px] text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>SOMMA MODERN GREEK</p>
            <h1 className="mt-1 font-display text-3xl md:text-6xl lg:text-7xl leading-tight text-white animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Come dine with us on The Parade!
            </h1>
            <p className="mt-2 max-w-xl md:mx-auto font-sans text-xs md:text-sm text-white/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Seafood, charcoal, shared platters, and cocktails.
            </p>
          </div>
        </div>

        {/* Buttons - bottom half on mobile */}
        <div className="w-full px-6 pb-16 md:hidden animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-wrap items-center gap-4">
            <GlassBookNow onClick={() => setBookingModalOpen(true)} />
            <GlassViewMenu />
            <button onClick={() => scrollTo('about')} className="underline underline-offset-4 text-white hover:opacity-70 font-sans transition-all duration-300 hover:translate-x-1">Learn More</button>
          </div>
        </div>

        {/* Buttons - centered on desktop */}
        <div className="hidden md:block w-full px-6 md:text-center">
          <div className="max-w-2xl md:mx-auto">
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <GlassBookNow onClick={() => setBookingModalOpen(true)} />
              <GlassViewMenu />
              <button onClick={() => scrollTo('about')} className="underline underline-offset-4 text-white hover:opacity-70 font-sans transition-all duration-300 hover:translate-x-1">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <ChefSection />

      {/* LOGO PATTERN DIVIDER */}
      <section className="h-32 md:h-40 bg-cover bg-center" style={{
        backgroundImage: "url('https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1762723362321_8dd67669.png')",
        backgroundSize: 'cover',
      }} />
      
      <section id="about" className="relative py-32 md:py-40 overflow-hidden">
        {/* Large background image */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1762712653411_fffb933e.png" 
            alt="The SOMMA Way" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-somma-cream via-somma-cream/95 to-somma-cream/60" />
        </div>

        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text content with enhanced styling */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-display text-5xl md:text-7xl leading-tight transition-all duration-300 hover:text-[var(--somma)]">
                The SOMMA Way
              </h2>
              <div className="w-20 h-1 bg-[var(--somma)] transition-all duration-300 hover:w-32" />
              <p className="font-sans text-lg leading-relaxed text-somma-ink/90">
                The experience at SOMMA reflects where we come from and how we choose to host.
                The pottery, the light and the food carry gentle traces of our family's village,
                refined into something contemporary, warm, and quietly elegant.
                Whether dining with us or planning an event, you'll be looked after here.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <GlassBookNow onClick={() => setBookingModalOpen(true)} size="lg" />
                <button 
                  onClick={() => scrollTo('contact')}
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-[var(--somma)] bg-transparent hover:bg-[var(--somma)] hover:text-white text-[var(--somma)] transition-all duration-300 shadow-sm hover:shadow-2xl hover:scale-105 text-base px-5 py-3 font-sans"
                >
                  Get in Touch
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>

            {/* Large featured image */}
            <div className="relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-1/2 md:h-[120%]">
              <div className="group relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] animate-fade-in">
                <img 
                  src="https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1762712653411_fffb933e.png" 
                  alt="The SOMMA Way" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationHours />

      {/* TRADING HOURS - Above Footer */}
      <section className="py-12 bg-somma-cream text-center">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-sm md:text-base leading-relaxed text-somma-ink/80">
            <p>
              Mon: <span className="font-semibold">5–9</span> | Tue–Wed: <span className="font-semibold">5–9</span> | 
              Thu–Fri: <span className="font-semibold">12–3 / 5–10</span> | 
              Sat: <span className="font-semibold">12–3 / 5–11</span> | 
              Sun: <span className="font-semibold">12–3 / 5–9</span>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-sm bg-cover bg-center transition-all duration-300" style={{
        backgroundImage: "url('https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1762720472602_0d38a5bf.png')",
        color: '#696958'
      }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left - Vase Icon */}
            <div className="md:flex-shrink-0">
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1762792470946_f73ee1e9.png" 
                alt="SOMMA Icon" 
                className="h-20 md:h-24 w-auto opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-110"
              />
            </div>

            {/* Center - Logo and Copyright */}
            <div className="flex flex-col items-center gap-6 text-center md:flex-1">
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1762723602800_889a7611.png" 
                alt="SOMMA" 
                className="h-12 w-auto transition-all duration-300 hover:scale-110"
              />
              <p className="text-xs">© 2024 SOMMA Modern Greek. All rights reserved.</p>
            </div>

            {/* Right - Social Links */}
            <div className="flex gap-6 md:flex-shrink-0">
              <a href="#" className="transition-all duration-300 hover:opacity-70 hover:scale-125">Instagram</a>
              <a href="#" className="transition-all duration-300 hover:opacity-70 hover:scale-125">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;