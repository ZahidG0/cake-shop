'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, MapPin, User, Phone, Mail, Calendar } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { sanitizeInput, validateEmail, validatePhone, validateCardNumber, validateCVV, validateZip } from '@/utils/security';

export default function Order() {
  const { items, getCartTotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({});
  const router = useRouter();

  // Authorization check - ensure cart has items
  useEffect(() => {
    if (items.length === 0 && !orderPlaced) {
      router.push('/cart');
    }
  }, [items.length, orderPlaced, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Sanitize form data
    const form = new FormData(e.target);
    const sanitizedData = {};
    for (let [key, value] of form.entries()) {
      sanitizedData[key] = sanitizeInput(value);
    }
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'zip', 'cardNumber', 'expiryMonth', 'expiryYear', 'cvv'];
    const missingFields = requiredFields.filter(field => !sanitizedData[field]);
    
    if (missingFields.length > 0) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Comprehensive validation
    if (!validateEmail(sanitizedData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    if (!validatePhone(sanitizedData.phone)) {
      alert('Please enter a valid phone number.');
      return;
    }
    
    if (!validateCardNumber(sanitizedData.cardNumber)) {
      alert('Please enter a valid card number.');
      return;
    }
    
    if (!validateCVV(sanitizedData.cvv)) {
      alert('Please enter a valid CVV.');
      return;
    }
    
    if (!validateZip(sanitizedData.zip)) {
      alert('Please enter a valid ZIP code.');
      return;
    }
    
    setFormData(sanitizedData);
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <PageTransition>
        <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900">
          <Header />
        <section className="pt-24 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="max-w-2xl mx-auto text-center py-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring", bounce: 0.4 }}
              >
                <span className="text-3xl">✅</span>
              </motion.div>
              <motion.h1 
                className="text-3xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Order Confirmed!
              </motion.h1>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Thank you for your order! We'll start preparing your delicious cakes right away.
                You'll receive a confirmation email shortly.
              </motion.p>
              <motion.div 
                className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <p className="text-orange-800 dark:text-orange-200">
                  <strong>Order #12345</strong><br />
                  Estimated delivery: Tomorrow, 2:00 PM - 4:00 PM
                </p>
              </motion.div>
              <motion.button
                onClick={() => window.location.href = '/'}
                className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue Shopping
              </motion.button>
            </motion.div>
          </div>
        </section>
          <Footer />
        </main>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900">
        <Header />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
                          Checkout
                        </h1>
            <p className="text-gray-600 dark:text-gray-300">
                          Complete your order and get ready for some sweet delights!
                        </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Customer Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <User size={24} className="text-orange-600" />
                  <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-gray-100">
                                      Customer Information
                                    </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                          First Name *
                                        </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      maxLength="50"
                      pattern="[A-Za-z\s]+"
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-800 dark:text-gray-100"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                          Last Name *
                                        </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      maxLength="50"
                      pattern="[A-Za-z\s]+"
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-800 dark:text-gray-100"
                      placeholder="Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                          Email *
                                        </label>
                    <input
                      type="email"
                      name="email"
                      required
                      maxLength="100"
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-800 dark:text-gray-100"
                      placeholder="john@example.com"
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                          Phone *
                                        </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      pattern="[0-9\s\(\)\-\+]+"
                      maxLength="20"
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-800 dark:text-gray-100"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Delivery Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin size={24} className="text-orange-600" />
                  <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-gray-100">
                                      Delivery Information
                                    </h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                          Street Address *
                                        </label>
                    <input
                      type="text"
                      name="address"
                      required
                      maxLength="200"
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-800 dark:text-gray-100"
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                              City *
                                            </label>
                      <input
                        type="text"
                        name="city"
                        required
                        maxLength="50"
                        pattern="[A-Za-z\s]+"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-800 dark:text-gray-100"
                        placeholder="Sweet City"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                              State *
                                            </label>
                      <input
                        type="text"
                        name="state"
                        required
                        maxLength="2"
                        pattern="[A-Za-z]{2}"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-800 dark:text-gray-100"
                        placeholder="SC"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                              ZIP Code *
                                            </label>
                      <input
                        type="text"
                        name="zip"
                        required
                        pattern="[0-9]{5}(-[0-9]{4})?"
                        maxLength="10"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-800 dark:text-gray-100"
                        placeholder="12345"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                          Delivery Date *
                                        </label>
                    <input
                      type="date"
                      name="deliveryDate"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-800 dark:text-gray-100"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Payment Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <CreditCard size={24} className="text-orange-600" />
                  <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-gray-100">
                                      Payment Information
                                    </h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                          Card Number *
                                        </label>
                    <input
                      type="text"
                      name="cardNumber"
                      required
                      pattern="[0-9\s]{13,19}"
                      maxLength="19"
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-800 dark:text-gray-100"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Expiry Month *
                      </label>
                      <select
                        name="expiryMonth"
                        required
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-800 dark:text-gray-100"
                      >
                        <option value="">Month</option>
                        {Array.from({ length: 12 }, (_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {String(i + 1).padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Expiry Year *
                      </label>
                      <select
                        name="expiryYear"
                        required
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-800 dark:text-gray-100"
                      >
                        <option value="">Year</option>
                        {Array.from({ length: 10 }, (_, i) => (
                          <option key={i} value={new Date().getFullYear() + i}>
                            {new Date().getFullYear() + i}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        required
                        pattern="[0-9]{3,4}"
                        maxLength="4"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-800 dark:text-gray-100"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg sticky top-24">
                <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Order Summary
                </h2>
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                          {item.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-xs">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                        ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6 border-t dark:border-gray-700 pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Delivery</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Tax</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">${(getCartTotal() * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="border-t dark:border-gray-700 pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-gray-900 dark:text-gray-100">Total</span>
                      <span className="text-orange-600">
                        ${(getCartTotal() * 1.08).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 rounded-full hover:bg-orange-700 transition-colors font-semibold"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Place Order
                </motion.button>
              </div>
            </motion.div>
          </form>
        </div>
      </section>

        <Footer />
      </main>
    </PageTransition>
  );
}