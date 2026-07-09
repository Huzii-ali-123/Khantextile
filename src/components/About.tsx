import { FadeIn, SectionHeader } from './ui';
import { motion, useInView, useSpring } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ from = 0, to }: { from?: number, to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const spring = useSpring(from, { stiffness: 40, damping: 20 });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (inView) {
      spring.set(to);
    }
  }, [inView, spring, to]);

  useEffect(() => {
    return spring.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [spring]);

  return <span ref={ref}>{displayValue}</span>;
}

export function About({ setCurrentPage }: { setCurrentPage: (page: 'home' | 'about' | 'collections' | 'quality-control' | 'contact') => void }) {
  return (
    <section id="about" className="py-24 md:py-40 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1">
            <SectionHeader 
              title="Our Heritage" 
              subtitle="Mastering the art of textiles for over two decades." 
            />
            
            <FadeIn delay={0.2} className="mt-8 space-y-6 text-gray-600 font-light leading-relaxed">
              <p>
                Founded in 2000, Khan Textile has reimagined the standard for premium towels and luxury linens. We blend traditional craftsmanship with modern innovation to deliver products of uncompromising quality.
              </p>
              <p>
                Every thread is woven with intent, ensuring unrivaled softness, durability, and elegance for homes and prestigious hotels worldwide.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-8">
              <button 
                onClick={() => setCurrentPage('about')}
                className="inline-flex items-center gap-2 border-b-2 border-brand-cyan text-gray-900 font-semibold uppercase tracking-[0.15em] text-xs pb-1.5 hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors cursor-pointer"
              >
                Learn More About Our Story &amp; Vision →
              </button>
            </FadeIn>

            <FadeIn delay={0.4} className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-100">
              <div>
                <div className="text-4xl md:text-5xl font-serif text-gray-900 mb-2">
                  <AnimatedCounter to={25} /><span className="text-brand-cyan">+</span>
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-medium">Years of Mastery</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif text-gray-900 mb-2">
                  <AnimatedCounter to={500} /><span className="text-brand-cyan">+</span>
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-medium">Premium Products</div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="left" className="order-1 lg:order-2">
            <motion.div 
              className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/5] overflow-hidden bg-gray-100"
              whileHover={{ scale: 1.02, rotateY: -5, rotateX: 2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury bedroom with orange pillows" 
                className="w-full h-full object-cover origin-center"
              />
            </motion.div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
