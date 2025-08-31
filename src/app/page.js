import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Features from '@/components/Features';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import SpecialOffer from '@/components/SpecialOffer';
import Newsletter from '@/components/Newsletter';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <Hero />
        <Products />
        <Features />
        <About />
        <Testimonials />
        <SpecialOffer />
        <Newsletter />
        <FAQ />
        <Footer />
      </main>
    </PageTransition>
  );
}