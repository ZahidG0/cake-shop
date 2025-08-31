'use client';

import { motion } from 'framer-motion';
import { Mail, Gift } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-orange-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Mail size={32} className="text-orange-600" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
                          Stay Sweet with Our Newsletter
                        </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                          Be the first to know about new cake flavors, special offers, and exclusive recipes.
                          Plus, get 10% off your next order when you subscribe!
                        </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-full border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>
              <button className="bg-orange-600 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-colors font-semibold whitespace-nowrap">
                Subscribe Now
              </button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 dark:text-gray-300 mb-6">
              <div className="flex items-center space-x-2">
                <Gift size={16} className="text-orange-600" />
                <span>10% Welcome Discount</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-orange-600" />
                <span>Weekly Sweet Updates</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400">
                          No spam, unsubscribe anytime. We respect your privacy and will never share your email.
                        </p>

            <div className="mt-8 flex justify-center space-x-8 text-sm text-gray-600 dark:text-gray-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">5K+</div>
                <div>Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">Weekly</div>
                <div>Updates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">Exclusive</div>
                <div>Offers</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}