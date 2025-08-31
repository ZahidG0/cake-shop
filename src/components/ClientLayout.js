'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LoadingPage from './LoadingPage';
import NavigationLoader from './NavigationLoader';

export default function ClientLayout({ children }) {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if this is the first visit
    const hasLoaded = sessionStorage.getItem('appLoaded');
    
    if (!hasLoaded) {
      // First visit - show loading animation
      setIsInitialLoading(true);
    } else {
      // Subsequent visits - skip loading
      setIsInitialLoading(false);
      setShowContent(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('appLoaded', 'true');
    setIsInitialLoading(false);
    setTimeout(() => setShowContent(true), 200);
  };

  if (isInitialLoading) {
    return <LoadingPage onComplete={handleLoadingComplete} />;
  }

  return (
    <>
      <NavigationLoader />
      <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </>
  );
}