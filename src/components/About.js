'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Clock } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Heart size={24} />, number: '15+', label: 'Years Experience' },
    { icon: <Users size={24} />, number: '10K+', label: 'Happy Customers' },
    { icon: <Award size={24} />, number: '50+', label: 'Awards Won' },
    { icon: <Clock size={24} />, number: '24/7', label: 'Fresh Baking' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6">
                              Our Sweet Story
                            </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Founded in 2008 by master baker Sarah Johnson, Sweet Delights began as a small 
                  family bakery with a simple mission: to create exceptional cakes that bring joy 
                  to every celebration.
                </p>
                <p>
                  What started in a cozy kitchen has grown into the city's most beloved bakery, 
                  known for our commitment to using only the finest ingredients, traditional baking 
                  methods, and innovative flavor combinations.
                </p>
                <p>
                  Every cake tells a story, and we're honored to be part of your most precious 
                  moments - from birthdays and weddings to simple everyday celebrations that 
                  deserve something special.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-orange-50 dark:bg-orange-900/20"
                >
                  <div className="text-orange-600 flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                                      {stat.number}
                                    </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                                      {stat.label}
                                    </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>100% Organic Ingredients</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Handmade Daily</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Custom Orders Welcome</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop"
                  alt="Baker crafting a beautiful cake"
                  fill
                  className="object-cover"
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl max-w-xs"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👩‍🍳</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100">Sarah Johnson</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Master Baker & Founder</div>
                    <div className="text-xs text-orange-600 mt-1">15+ Years Experience</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}