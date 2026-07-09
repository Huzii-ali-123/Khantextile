import { motion, useAnimationFrame, useMotionValue, useMotionValueEvent } from 'motion/react';
import { useRef, useState } from 'react';
import { SectionHeader } from './ui';
import { PRODUCTS } from '../data/products';

export function Products({ setCurrentPage }: { setCurrentPage: (page: 'home' | 'about' | 'collections' | 'quality-control' | 'contact') => void }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isInteractive, setIsInteractive] = useState(false);
  
  // Create copies for smooth infinite scrolling
  const scrollProducts = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS];

  useAnimationFrame((time, delta) => {
    if (isInteractive) return;
    if (!carouselRef.current) return;
    
    // Total width is split into 3 identical sections
    const width = carouselRef.current.scrollWidth / 3;
    if (width === 0) return;

    let currentX = x.get();
    currentX -= delta * 0.05; // Base automatic scroll speed
    
    // Wrap around logic
    if (currentX <= -width) {
      currentX += width;
    } else if (currentX > 0) {
      currentX -= width;
    }
    
    x.set(currentX);
  });

  // Keep constraints tight during manual dragging to instantly wrap
  useMotionValueEvent(x, "change", (latest) => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.scrollWidth / 3;
    if (width === 0) return;

    if (latest <= -width) {
      x.set(latest + width);
    } else if (latest > 0) {
      x.set(latest - width);
    }
  });

  return (
    <section id="products" className="py-24 md:py-40 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end">
          <SectionHeader 
            title="The Collection" 
            subtitle="Explore our finely curated categories designed for absolute comfort." 
          />
          <p className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-[#888] pb-2 pl-4">
            [ Hold and drag to explore ]
          </p>
        </div>
      </div>
        
      <div className="relative cursor-grab active:cursor-grabbing">
        {/* Gradients for smooth edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
        
        <div 
          className="flex overflow-hidden"
          onMouseEnter={() => setIsInteractive(true)}
          onMouseLeave={() => setIsInteractive(false)}
          onPointerDown={() => setIsInteractive(true)}
          onPointerUp={() => setIsInteractive(false)}
        >
          <motion.div 
            ref={carouselRef}
            className="flex gap-8 w-max px-32"
            style={{ x }}
            drag="x"
            dragElastic={0} // Constant rigid dragging
          >
            {scrollProducts.map((prod, index) => (
              <div 
                key={index}
                className="w-[300px] md:w-[400px] flex-shrink-0 group relative pointer-events-auto cursor-grab active:cursor-grabbing"
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] pointer-events-none">
                  <img 
                    src={prod.img} 
                    alt={prod.name} 
                    draggable={false}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10 pointer-events-none">
                    <h3 className="text-2xl font-serif text-white mb-2">{prod.name}</h3>
                    <p className="text-gray-200 text-sm font-light tracking-wide">{prod.desc}</p>
                  </div>
                </div>
                
                <div className="pt-6 transition-all duration-500 group-hover:translate-y-2 group-hover:opacity-0 relative z-[-1]">
                  <h3 className="text-2xl font-serif text-gray-900 mb-2">{prod.name}</h3>
                  <p className="text-gray-500 text-sm font-light tracking-wide">{prod.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Button to separate Collections Page */}
      <div className="container mx-auto px-6 max-w-7xl text-center mt-16 relative z-10">
        <button 
          onClick={() => setCurrentPage('collections')}
          className="inline-flex items-center gap-3 bg-gray-900 hover:bg-brand-cyan text-white hover:text-gray-900 px-8 py-4 uppercase tracking-widest text-xs font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
        >
          View Complete Interactive Catalog →
        </button>
      </div>
    </section>
  );
}
