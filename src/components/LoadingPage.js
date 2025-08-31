'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingPage({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Preparing something sweet...');

  const loadingMessages = [
    'Preparing something sweet...',
    'Mixing the finest ingredients...',
    'Adding a touch of magic...',
    'Almost ready to serve!'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete?.(), 500);
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    // Change loading text based on progress
    const textTimer = setInterval(() => {
      setProgress(current => {
        if (current < 25) setLoadingText(loadingMessages[0]);
        else if (current < 50) setLoadingText(loadingMessages[1]);
        else if (current < 75) setLoadingText(loadingMessages[2]);
        else setLoadingText(loadingMessages[3]);
        return current;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-slate-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center z-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="text-center relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="mb-8 relative"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <motion.span 
                className="text-5xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                🍰
              </motion.span>
            </div>
            {/* Floating particles */}
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full"
              animate={{ y: [-10, 10, -10], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full"
              animate={{ y: [10, -10, 10], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Cack Shop
          </motion.h1>

          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            key={loadingText}
          >
            {loadingText}
          </motion.p>

          <motion.div
            className="w-80 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mx-auto shadow-inner"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-6 flex items-center justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <span className="text-2xl font-bold text-orange-600">{Math.round(progress)}%</span>
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-orange-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}