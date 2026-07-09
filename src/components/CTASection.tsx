import { motion } from 'motion/react';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { FadeIn } from './ui';

interface CTASectionProps {
  setCurrentPage: (page: 'home' | 'about' | 'collections' | 'quality-control' | 'contact') => void;
}

export function CTASection({ setCurrentPage }: CTASectionProps) {
  const handleScrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentPage('contact');
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#FAF9F6] to-gray-900 text-white relative overflow-hidden">
      {/* Background ambient circular grids/blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* CTA Card 1: Interactive Collection */}
          <FadeIn delay={0.1} direction="up">
            <div className="group h-full bg-gray-950/40 backdrop-blur-md border border-gray-800/60 p-8 md:p-12 flex flex-col justify-between transition-all duration-500 hover:border-brand-cyan/30 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl group-hover:bg-brand-cyan/10 transition-colors duration-500" />
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-5 h-5 text-brand-cyan" />
                  <span className="text-[10px] uppercase tracking-widest text-brand-cyan font-bold">Interactive Catalog</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-snug">
                  Explore the Complete Textile Collection
                </h3>
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed mb-10 max-w-md">
                  Experience our full interactive catalog. Filter towels by premium materials like long-staple Ring-Spun Cotton, Zero Twist bamboo, or Organic Micro-cotton, with full technical and weave density details.
                </p>
              </div>

              <div>
                <button
                  onClick={() => {
                    setCurrentPage('collections');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-3 bg-brand-cyan hover:bg-white text-gray-950 font-semibold px-8 py-4 text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-md hover:shadow-brand-cyan/20 hover:-translate-y-0.5 cursor-pointer"
                >
                  Browse Catalog
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </FadeIn>

          {/* CTA Card 2: Custom Request */}
          <FadeIn delay={0.2} direction="up">
            <div className="group h-full bg-gray-950/40 backdrop-blur-md border border-gray-800/60 p-8 md:p-12 flex flex-col justify-between transition-all duration-500 hover:border-brand-cyan/30 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl group-hover:bg-cyan-400/10 transition-colors duration-500" />

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <PhoneCall className="w-5 h-5 text-brand-cyan" />
                  <span className="text-[10px] uppercase tracking-widest text-brand-cyan font-bold">Bespoke Manufacturing</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-snug">
                  Request Custom Physical Samples
                </h3>
                <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed mb-10 max-w-md">
                  Have unique requirements? Speak directly with our production desk to arrange pre-production samples, customized thread densities (GSM), or custom branding/weaving specifications.
                </p>
              </div>

              <div>
                <button
                  onClick={handleScrollToContact}
                  className="inline-flex items-center gap-3 bg-white hover:bg-brand-cyan text-gray-950 font-semibold px-8 py-4 text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-md hover:shadow-white/10 hover:-translate-y-0.5 cursor-pointer"
                >
                  Inquire Now / Get Quote
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
