import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Process } from './components/Process';
import { Products } from './components/Products';
import { WhyUs } from './components/WhyUs';
import { Testimonials } from './components/Testimonials';
import { Sustainability } from './components/Sustainability';
import { Contact } from './components/Contact';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { CollectionsPage } from './components/CollectionsPage';
import { QualityControlPage } from './components/QualityControlPage';
import { ContactPage } from './components/ContactPage';
import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'collections' | 'quality-control' | 'contact'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [currentPage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      infinite: false,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Make smooth scrolling for anchor links hook into Lenis
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          lenis.scrollTo(targetId);
        }
      });
    });

    return () => {
      lenis.destroy();
      (window as any).lenis = undefined;
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-cyan/20 selection:text-brand-cyan">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <About setCurrentPage={setCurrentPage} />
            <Process />
            <Products setCurrentPage={setCurrentPage} />
            <WhyUs />
            <Testimonials />
            <Sustainability />
            <CTASection setCurrentPage={setCurrentPage} />
            <Contact />
          </>
        )}

        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'collections' && <CollectionsPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'quality-control' && <QualityControlPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
      
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-gray-900 text-white rounded-full shadow-xl hover:bg-brand-cyan hover:text-gray-900 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

