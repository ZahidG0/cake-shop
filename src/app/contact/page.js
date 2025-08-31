'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { sanitizeInput, validateEmail, validatePhone } from '@/utils/security';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Sanitize form data
    const form = new FormData(e.target);
    const sanitizedData = {};
    for (let [key, value] of form.entries()) {
      sanitizedData[key] = sanitizeInput(value);
    }
    
    // Validation
    if (!validateEmail(sanitizedData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    if (sanitizedData.phone && !validatePhone(sanitizedData.phone)) {
      alert('Please enter a valid phone number.');
      return;
    }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        e.target.reset();
        setTimeout(() => setFormSubmitted(false), 3000);
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to send message');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    }
  };
  return (
    <PageTransition>
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900">
        <Header />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isLoaded ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <MessageCircle size={32} className="text-orange-600" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have questions about our cakes or need a custom order? We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <motion.div 
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg dark:shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:border dark:border-slate-700"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <MapPin size={20} className="text-orange-600" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Address</h3>
                      <p className="text-gray-600 dark:text-gray-300">123 Baker Street<br />Sweet City, SC 12345</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Phone size={20} className="text-orange-600" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">(555) 123-CAKE</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Mail size={20} className="text-orange-600" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">hello@sweetdelights.com</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Clock size={20} className="text-orange-600" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Hours</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Mon - Sat: 8:00 AM - 8:00 PM<br />
                        Sunday: 10:00 AM - 6:00 PM
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Customer Reviews Section */}
                <motion.div 
                  className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                    <Star size={20} className="text-yellow-400 mr-2" fill="currentColor" />
                    What Our Customers Say
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300 italic">"Amazing cakes and excellent service!"</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">- Sarah M.</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300 italic">"Perfect for our wedding day!"</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">- John & Lisa</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg dark:shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:border dark:border-slate-700"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        maxLength="50"
                        pattern="[A-Za-z\s]+"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        maxLength="50"
                        pattern="[A-Za-z\s]+"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      maxLength="100"
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      pattern="[0-9\s\(\)\-\+]+"
                      maxLength="20"
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <select name="subject" required className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent dark:bg-gray-700 dark:text-gray-100">
                      <option>General Inquiry</option>
                      <option>Custom Order</option>
                      <option>Wedding Cake</option>
                      <option>Catering</option>
                      <option>Complaint</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      maxLength="1000"
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                      placeholder="Tell us about your cake needs..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formSubmitted}
                    className={`w-full px-6 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                      formSubmitted 
                        ? 'bg-green-600 text-white' 
                        : 'bg-orange-600 text-white hover:bg-orange-700'
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={20} />
                    <span>{formSubmitted ? 'Message Sent!' : 'Send Message'}</span>
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

        <Footer />
      </main>
    </PageTransition>
  );
}