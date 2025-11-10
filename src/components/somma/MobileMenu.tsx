import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollTo: (id: string) => void;
  onBookNowClick: () => void;
}

export function MobileMenu({ isOpen, onClose, scrollTo, onBookNowClick }: MobileMenuProps) {
  if (!isOpen) return null;

  const handleClick = (id: string) => {
    scrollTo(id);
    onClose();
  };

  const handleBookNow = () => {
    onBookNowClick();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-somma-ink/40 backdrop-blur-md transition-opacity duration-300" onClick={onClose} />
      <div className="absolute top-0 right-0 w-80 h-full bg-somma-cream shadow-2xl transform transition-transform duration-300 ease-out overflow-hidden">
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
          backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1762703922818_22dbbfc3.png)',
          backgroundSize: '400px',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply'
        }} />
        
        <div className="relative p-8">
          <div className="flex items-center justify-between mb-12 border-b border-somma-ink/10 pb-6">
            <img src="https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1762703922818_22dbbfc3.png" alt="SOMMA" className="h-8 transition-transform duration-300 hover:scale-110" />
            <button onClick={onClose} className="text-3xl text-somma-ink/60 transition-all duration-300 hover:text-somma-ink hover:rotate-90">×</button>
          </div>

          <nav className="mt-16 flex flex-col gap-8 font-sans">
            <button onClick={() => handleClick('about')} className="text-left text-lg text-somma-ink tracking-wide transition-all duration-300 hover:text-[#696958] hover:translate-x-3 border-b border-transparent hover:border-[#696958]/20 pb-2">About</button>
            <button onClick={() => handleClick('contact')} className="text-left text-lg text-somma-ink tracking-wide transition-all duration-300 hover:text-[#696958] hover:translate-x-3 border-b border-transparent hover:border-[#696958]/20 pb-2">Contact</button>
            <a href="https://somma.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={onClose} className="text-left text-lg text-somma-ink tracking-wide transition-all duration-300 hover:text-[#696958] hover:translate-x-3 border-b border-transparent hover:border-[#696958]/20 pb-2">Join our team</a>
            <button onClick={handleBookNow} className="mt-8 text-center py-4 px-6 rounded-lg bg-[#696958] text-white font-medium tracking-wide transition-all duration-300 hover:bg-[#5a5849] hover:shadow-2xl hover:scale-105">Book Now</button>
          </nav>
        </div>
      </div>
    </div>
  );
}

