'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How far in advance should I place my order?',
      answer: 'For regular cakes, we recommend ordering at least 24 hours in advance. For custom or wedding cakes, please order 1-2 weeks ahead to ensure availability and proper preparation time.'
    },
    {
      question: 'Do you offer delivery services?',
      answer: 'Yes! We offer same-day delivery within the city for orders placed before 2 PM. Delivery is free for orders over $50, and there\'s a small delivery fee for smaller orders.'
    },
    {
      question: 'Can you accommodate dietary restrictions?',
      answer: 'Absolutely! We offer gluten-free, sugar-free, vegan, and keto-friendly options. Please specify your dietary requirements when placing your order, and we\'ll create something delicious just for you.'
    },
    {
      question: 'What are your store hours?',
      answer: 'We\'re open Monday through Saturday from 8 AM to 8 PM, and Sunday from 10 AM to 6 PM. Our online ordering system is available 24/7 for your convenience.'
    },
    {
      question: 'Do you make custom cakes for special occasions?',
      answer: 'Yes! We specialize in custom cakes for weddings, birthdays, anniversaries, and corporate events. Our design team will work with you to create the perfect cake for your celebration.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, PayPal, Apple Pay, and Google Pay. For large orders, we also accept bank transfers and checks with advance notice.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
                      Frequently Asked Questions
                    </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                      Got questions? We've got answers! Here are the most common questions our customers ask.
                    </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden">
                <button
                                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-100 pr-4">
                                      {faq.question}
                                    </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus size={20} className="text-orange-600" />
                    ) : (
                      <Plus size={20} className="text-orange-600" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                                          {faq.answer}
                                        </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
          <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Still have questions? We're here to help!
                    </p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors font-semibold">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}