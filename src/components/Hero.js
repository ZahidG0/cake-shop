'use client';

import { memo, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="flex items-center space-x-2 text-orange-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <span className="text-sm font-medium">Rated 4.9/5 by 1000+ customers</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-serif font-bold text-gray-900 dark:text-gray-100 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Handcrafted Cakes
              <motion.span 
                className="text-orange-600 block"
                initial={{ opacity: 0, x: -20 }}
                animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Made with Love
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Indulge in our exquisite collection of premium cakes, crafted with the finest ingredients 
              and baked fresh daily. Every bite tells a story of passion and perfection.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <motion.button 
                onClick={() => window.location.href = '/order'}
                className="bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-all duration-300 flex items-center justify-center space-x-2 group btn-glow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-semibold">Order Now</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 px-8 py-4 rounded-full hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 transition-all duration-300 btn-glow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Menu
              </motion.button>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-8 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {[{num: '500+', text: 'Happy Customers'}, {num: '25+', text: 'Cake Varieties'}, {num: '100%', text: 'Fresh Daily'}].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1.4 + (index * 0.1), duration: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stat.num}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={isLoaded ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              className="relative w-full aspect-[4/3] max-h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop&crop=center"
                alt="Delicious chocolate cake with berries"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl dark:shadow-[0_0_20px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center space-x-4">
                <motion.div 
                  className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-2xl">🍰</span>
                </motion.div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-50">Fresh Today</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Baked this morning</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);