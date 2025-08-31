'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Emily Rodriguez',
      role: 'Wedding Client',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Sweet Delights made our wedding cake absolutely perfect! The attention to detail and flavor was beyond our expectations. Our guests are still talking about it months later.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Regular Customer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'I order from Sweet Delights for every family celebration. The chocolate cake is incredible, and the customer service is always exceptional. Highly recommend!'
    },
    {
      id: 3,
      name: 'Sarah Thompson',
      role: 'Birthday Party Host',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Ordered a custom birthday cake for my daughter and it exceeded all expectations. Beautiful design, delicious taste, and delivered right on time. Thank you!'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
                      What Our Customers Say
                    </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                      Don't just take our word for it. Here's what our happy customers have to say about their Sweet Delights experience.
                    </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg dark:shadow-[inset_0_1px_0_rgba(148,163,184,0.1)] relative"
            >
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <Quote size={16} className="text-white" />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">
                                  "{testimonial.text}"
                                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                                      {testimonial.name}
                                    </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                                      {testimonial.role}
                                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">4.9/5 Average Rating</div>
            <div className="text-gray-600 dark:text-gray-300">Based on 1,200+ customer reviews</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}