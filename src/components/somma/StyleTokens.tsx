import React from 'react';

export function StyleTokens() {
  return (
    <style>{`
      :root {
        --somma: #D4A574;
        --somma-cream: #F5F1E8;
        --texture-url: url('https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1762704592308_f6c3e1e8.png');
      }
      .bg-somma-cream { background-color: var(--somma-cream); }
      .text-somma-ink { color: #3b372f; }
      .border-somma-ink\\/10 { border-color: rgba(59,55,47,.10); }

      @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600&display=swap');
      @font-face {
        font-family: 'Marlide Display';
        src: url('/fonts/MarlideDisplay-Variable.woff2') format('woff2');
        font-style: normal; font-weight: 100 900; font-display: swap;
      }
      .font-display { font-family: 'Marlide Display', 'Playfair Display', serif; }
      .font-sans { font-family: 'Josefin Sans', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; }
    `}</style>
  );
}
