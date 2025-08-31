"use client";

import { memo, useCallback, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { useCart } from "@/context/CartContext";

function Cart() {
  const { items, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const [isLoaded, setIsLoaded] = useState(false);
  
  const handleClearCart = useCallback(() => clearCart(), [clearCart]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (items.length === 0) {
    return (
      <PageTransition>
        <main className="min-h-screen bg-white dark:bg-gray-900">
          <Header />
          <section className="pt-24 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                className="text-center py-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                >
                  <ShoppingBag size={80} className="mx-auto text-gray-300 mb-6" />
                </motion.div>
                <motion.h1 
                  className="text-3xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Your Cart is Empty
                </motion.h1>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  Looks like you haven't added any delicious cakes yet!
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <Link
                    href="/#products"
                    className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors"
                  >
                    Browse Cakes
                  </Link>
                </motion.div>
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
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-4">
              Shopping Cart
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {items.length} item{items.length !== 1 ? "s" : ""} in your cart
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                <AnimatePresence>
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -20, scale: 0.9 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                    >
                    <div className="flex items-center space-x-4">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                          {item.description}
                        </p>
                        <p className="text-orange-600 font-bold">
                          {item.price}
                        </p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <motion.button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Minus className="text-gray-600 dark:text-gray-300" size={16} />
                        </motion.button>
                        <motion.span 
                          className="w-8 text-center text-gray-900 dark:text-gray-100 font-semibold"
                          key={item.quantity}
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.quantity}
                        </motion.span>
                        <motion.button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Plus className="text-gray-600 dark:text-gray-300" size={16} />
                        </motion.button>
                      </div>

                      <motion.button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 p-2"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Trash2 size={20} />
                      </motion.button>
                    </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            <div className="lg:col-span-1">
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg sticky top-24"
                initial={{ opacity: 0, x: 20 }}
                animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Subtotal
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                      ${getCartTotal().toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Delivery
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                      Free
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Tax
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                      ${(getCartTotal() * 0.08).toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t dark:border-gray-700 pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-gray-900 dark:text-gray-100">
                        Total
                      </span>
                      <span className="text-orange-600">
                        ${(getCartTotal() * 1.08).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/order"
                      className="w-full bg-orange-600 text-white py-3 rounded-full hover:bg-orange-700 transition-colors font-semibold text-center block"
                    >
                      Proceed to Checkout
                    </Link>
                  </motion.div>
                  <motion.button
                    onClick={handleClearCart}
                    className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Clear Cart
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

        <Footer />
      </main>
    </PageTransition>
  );
}

export default memo(Cart);
