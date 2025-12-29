import React from 'react';

interface GlassViewMenuProps {
  size?: 'sm' | 'md' | 'lg';
}

export function GlassViewMenu({ size = "lg" }: GlassViewMenuProps) {
  const sizeMap = {
    sm: "text-xs px-3 py-2",
    md: "text-sm px-4 py-2.5",
    lg: "text-base px-5 py-3",
  };

  const handleViewMenu = () => {
    // Open the PDF in a new tab
    window.open('/Somma Modern Greek Menu.pdf', '_blank');
  };

  return (
    <button
      onClick={handleViewMenu}
      className={`group inline-flex items-center justify-center rounded-2xl border border-[#696958] bg-[#696958] hover:bg-[#5a5849] hover:border-[#5a5849] text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 ${sizeMap[size]}`}
    >
      Our Menu
      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
    </button>
  );
}