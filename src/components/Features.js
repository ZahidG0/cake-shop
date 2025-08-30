'use client';

import { motion } from 'framer-motion';
import { Truck, Shield, Clock, Award } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Truck size={32} />,
      title: 'Fast Delivery',
      description: 'Same-day delivery within the city. Fresh cakes delivered to your doorstep in perfect condition.'
    },
    {
      icon: <Shield size={32} />,
      title: '100% Fresh',
      description: 'All our cakes are baked fresh daily using premium ingredients sourced from trusted suppliers.'
    },
    {
      icon: <Clock size={32} />,
      title: 'Quick Service',
      description: 'Order online and pick up in 30 minutes, or schedule for your preferred delivery time.'
    },
    {
      icon: <Award size={32} />,
      title: 'Premium Quality',
      description: 'Award-winning recipes crafted by expert bakers with over 15 years of experience.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Why Choose Sweet Delights?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional quality and service that makes every celebration memorable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}