'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useMemo, useCallback, memo, useState, useEffect } from 'react';
import { ProductsHeading, ProductsDescription } from './ProductsText';

// Move products array outside component to prevent re-creation
const PRODUCTS_DATA = [
    {
      id: 1,
      name: 'Chocolate Delight',
      price: '$24.99',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
      description: 'Rich chocolate cake with premium cocoa'
    },
    {
      id: 2,
      name: 'Strawberry Dream',
      price: '$22.99',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
      description: 'Fresh strawberry cake with cream layers'
    },
    {
      id: 3,
      name: 'Red Velvet Classic',
      price: '$26.99',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop',
      description: 'Traditional red velvet with cream cheese'
    },
    {
      id: 4,
      name: 'Lemon Cheesecake',
      price: '$28.99',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop',
      description: 'Creamy lemon cheesecake with graham crust'
    },
    {
      id: 5,
      name: 'Vanilla Bean Cake',
      price: '$23.99',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop',
      description: 'Classic vanilla with Madagascar vanilla beans'
    },
    {
      id: 6,
      name: 'Carrot Spice Cake',
      price: '$25.99',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop',
      description: 'Moist carrot cake with cream cheese frosting'
    },
    {
      id: 7,
      name: 'Black Forest',
      price: '$29.99',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
      description: 'Chocolate cake with cherries and whipped cream'
    },
    {
      id: 8,
      name: 'Tiramisu Cake',
      price: '$31.99',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
      description: 'Italian-inspired coffee-flavored delight'
    },
    {
      id: 9,
      name: 'Funfetti Birthday',
      price: '$24.99',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      description: 'Colorful sprinkle cake perfect for celebrations'
    },
    {
      id: 10,
      name: 'Coconut Paradise',
      price: '$27.99',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?w=400&h=300&fit=crop',
      description: 'Tropical coconut cake with coconut flakes'
    },
    {
      id: 11,
      name: 'Chocolate Mint',
      price: '$26.99',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=300&fit=crop',
      description: 'Rich chocolate with refreshing mint layers'
    },
    {
      id: 12,
      name: 'Banana Walnut',
      price: '$23.99',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400&h=300&fit=crop',
      description: 'Moist banana cake with crunchy walnuts'
    },
    {
      id: 13,
      name: 'Raspberry Mousse',
      price: '$30.99',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
      description: 'Light raspberry mousse with berry compote'
    },
    {
      id: 14,
      name: 'Peanut Butter Cup',
      price: '$28.99',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=400&h=300&fit=crop',
      description: 'Chocolate cake with peanut butter frosting'
    },
    {
      id: 15,
      name: 'Orange Citrus',
      price: '$25.99',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=400&h=300&fit=crop',
      description: 'Fresh orange cake with citrus glaze'
    },
    {
      id: 16,
      name: 'Salted Caramel',
      price: '$29.99',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
      description: 'Decadent caramel cake with sea salt finish'
    },
    {
      id: 17,
      name: 'Matcha Green Tea',
      price: '$32.99',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
      description: 'Japanese-inspired matcha flavored cake'
    },
    {
      id: 18,
      name: 'Blueberry Lemon',
      price: '$26.99',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=400&h=300&fit=crop',
      description: 'Fresh blueberries with lemon zest'
    },
    {
      id: 19,
      name: 'Espresso Chocolate',
      price: '$30.99',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
      description: 'Rich chocolate with espresso infusion'
    },
    {
      id: 20,
      name: 'Strawberry Shortcake',
      price: '$24.99',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
      description: 'Classic shortcake with fresh strawberries'
    },
    {
      id: 21,
      name: 'Cookies & Cream',
      price: '$27.99',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      description: 'Vanilla cake with crushed chocolate cookies'
    },
    {
      id: 22,
      name: 'Peach Cobbler Cake',
      price: '$28.99',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=400&h=300&fit=crop',
      description: 'Spiced cake with fresh peach layers'
    },
    {
      id: 23,
      name: 'Almond Amaretto',
      price: '$31.99',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
      description: 'Almond cake with amaretto liqueur'
    },
    {
      id: 24,
      name: 'Maple Pecan',
      price: '$29.99',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400&h=300&fit=crop',
      description: 'Maple-flavored cake with toasted pecans'
    },
    {
      id: 25,
      name: 'Lavender Honey',
      price: '$33.99',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
      description: 'Delicate lavender cake with honey drizzle'
    }
];

function Products() {
  const { addToCart } = useCart();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Memoize products and addToCart callback
  const products = useMemo(() => PRODUCTS_DATA, []);
  const handleAddToCart = useCallback((product) => addToCart(product), [addToCart]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsLoaded(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="products" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <ProductsHeading />
          <ProductsDescription />
        </motion.div>

        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg dark:shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:border dark:border-slate-700 overflow-hidden"
              >
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                <div className="p-6 space-y-3">
                  <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
                  <div className="flex justify-between items-center pt-2">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse" />
                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onHoverStart={() => setHoveredCard(product.id)}
              onHoverEnd={() => setHoveredCard(null)}
              transition={{ 
                duration: isLoaded ? 0.3 : 0.5,
                delay: isLoaded ? 0 : index * 0.1,
                ease: "easeOut"
              }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg dark:shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:border dark:border-slate-700 overflow-hidden cursor-pointer"
            >
              <motion.div 
                className="relative h-48 overflow-hidden"
                animate={{ scale: hoveredCard === product.id ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  priority={index < 4}
                  loading={index < 4 ? 'eager' : 'lazy'}
                  className="object-cover"
                />
                <motion.div 
                  className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1 border border-white/20 dark:border-gray-600/50"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: (index * 0.1) + 0.3 }}
                >
                  <Star size={14} fill="currentColor" className="text-yellow-400" />
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{product.rating}</span>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (index * 0.1) + 0.2 }}
              >
                <motion.h3 
                  className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2"
                  animate={{ color: hoveredCard === product.id ? "#ea580c" : "" }}
                  transition={{ duration: 0.3 }}
                >
                  {product.name}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <motion.span 
                    className="text-xl font-bold text-orange-600"
                    animate={{ scale: hoveredCard === product.id ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {product.price}
                  </motion.span>
                  <motion.button 
                    onClick={() => handleAddToCart(product)}
                    className="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition-colors"
                    animate={{ 
                      scale: hoveredCard === product.id ? 1.1 : 1,
                      rotate: hoveredCard === product.id ? 5 : 0
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ShoppingCart size={18} />
                  </motion.button>
                </div>
              </motion.div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors font-semibold">
            View All Cakes
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(Products);