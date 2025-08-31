'use client';

import { useTheme } from '@/context/ThemeContext';

export function ProductsHeading() {
  const { theme } = useTheme();
  
  return (
    <h2 
      className="text-3xl md:text-4xl font-serif font-bold mb-4"
      style={{ color: theme === 'dark' ? '#f9fafb' : '#111827' }}
    >
      Our Signature Cakes
    </h2>
  );
}

export function ProductsDescription() {
  const { theme } = useTheme();
  
  return (
    <p 
      className="text-lg max-w-2xl mx-auto"
      style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
    >
      Discover our extensive collection of handcrafted cakes, each made with love and the finest ingredients.
    </p>
  );
}