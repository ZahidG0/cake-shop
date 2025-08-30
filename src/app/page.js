import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Products from '@/components/Products';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import SpecialOffer from '@/components/SpecialOffer';
import Newsletter from '@/components/Newsletter';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <Hero />
      <Features />
      <Products />
      <About />
      <Testimonials />
      <SpecialOffer />
      <Newsletter />
      <FAQ />
      <Footer />
    </main>
  );
}