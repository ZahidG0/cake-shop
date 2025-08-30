'use client';

import { motion } from 'framer-motion';
import { Gift, Clock, ArrowRight } from 'lucide-react';

export default function SpecialOffer() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Gift size={32} className="text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Special Launch Offer!
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Get <span className="font-bold text-yellow-300">20% OFF</span> on your first order 
            and free delivery within the city
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto mb-8">
            <div className="text-3xl font-bold mb-2">SWEET20</div>
            <div className="text-sm opacity-80">Use this promo code at checkout</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 font-semibold group">
              <span>Order Now & Save</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="flex items-center justify-center space-x-2 text-sm opacity-80">
            <Clock size={16} />
            <span>Limited time offer - Valid until end of month</span>
          </div>

          <div className="mt-8 text-xs opacity-60">
            *Terms and conditions apply. Minimum order $25. Cannot be combined with other offers.
          </div>
        </motion.div>
      </div>
    </section>
  );
}