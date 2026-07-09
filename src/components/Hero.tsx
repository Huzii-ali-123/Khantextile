import { FadeIn } from './ui';
import { motion } from 'motion/react';

export function Hero({ setCurrentPage }: { setCurrentPage: (page: 'home' | 'about' | 'collections' | 'quality-control' | 'contact') => void }) {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image (New Generated Towels Landscape) */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          src="/hero-towels-new.png"
          alt="Luxury Towel Manufacturing" 
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-white/65 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center justify-center text-center mt-20">
        <FadeIn delay={0.2} direction="up" className="relative">
          <span className="inline-flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-brand-cyan"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-cyan font-semibold">Premium Weavers</span>
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-[#111111] leading-[1.1] tracking-tight mb-8">
            KHAN <br />
            <span className="text-brand-cyan italic font-light">Textile</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.4} direction="up">
          <p className="text-gray-600 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto leading-relaxed tracking-wide uppercase text-sm">
            Where Softness Becomes a Standard.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('collections')}
              className="bg-gray-900 hover:bg-brand-cyan text-white hover:text-gray-900 px-8 py-4 uppercase tracking-widest text-xs font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer border-none"
            >
              Explore Collection
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gray-200 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
            className="absolute top-0 w-full h-full bg-brand-cyan"
          />
        </div>
      </motion.div>
    </section>
  );
}
