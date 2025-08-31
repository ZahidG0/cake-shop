'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '/contact' }
  ];

  const { getCartCount } = useCart();
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-orange-600">
              <Link href="/">Sweet Delights</Link>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                                  key={item.name}
                                  href={item.href}
                                  className={`${isScrolled ? 'text-gray-900 dark:text-gray-300' : 'text-gray-900 dark:text-gray-100'} hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors`}
                                >
                                  {item.name}
                                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`${isScrolled ? 'text-gray-900 dark:text-gray-300' : 'text-gray-900 dark:text-white'} hover:text-orange-600 p-2`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link href="/cart" className={`${isScrolled ? 'text-gray-900 dark:text-gray-300' : 'text-gray-900 dark:text-white'} hover:text-orange-600 p-2 relative`}>
              <ShoppingCart size={20} />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <Link href="/order" className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-colors">
              Order Now
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-gray-900 dark:text-gray-300' : 'text-gray-900 dark:text-white'} hover:text-orange-600 p-2`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                                  key={item.name}
                                  href={item.href}
                                  className="text-gray-900 dark:text-gray-100 hover:text-orange-600 block px-3 py-2 text-base font-medium"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {item.name}
                                </a>
              ))}
              <Link href="/order" className="w-full bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-colors mt-4 block text-center">
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}