'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-2 text-orange-600">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-medium">Rated 4.9/5 by 1000+ customers</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Handcrafted Cakes
              <span className="text-orange-600 block">Made with Love</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
              Indulge in our exquisite collection of premium cakes, crafted with the finest ingredients 
              and baked fresh daily. Every bite tells a story of passion and perfection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-all duration-300 flex items-center justify-center space-x-2 group btn-glow">
                <span className="font-semibold">Order Now</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 px-8 py-4 rounded-full hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 transition-all duration-300 btn-glow">
                View Menu
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">25+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Cake Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Fresh Daily</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop&crop=center"
                alt="Delicious chocolate cake with berries"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl dark:shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🍰</span>
                </div>
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