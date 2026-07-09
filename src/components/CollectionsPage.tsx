import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';
import { FadeIn } from './ui';
import { PRODUCTS } from '../data/products';

type PageType = 'home' | 'about' | 'collections' | 'quality-control' | 'contact';

export function CollectionsPage({ setCurrentPage }: { setCurrentPage: (page: PageType) => void }) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = PRODUCTS.filter(prod => {
    let matchesCategory = true;
    if (activeCategory === 'bath') {
      matchesCategory = ['bath-towel', 'bath-sheet', 'hotel-towel', 'hand-towel', 'wash-cloth', 'wash-mits'].includes(prod.id);
    } else if (activeCategory === 'spa') {
      matchesCategory = ['spa-towel', 'salon-towel', 'face-towel'].includes(prod.id);
    } else if (activeCategory === 'kitchen') {
      matchesCategory = ['kitchen-towel', 'dish-towel', 'bar-mop', 'microfiber-towel'].includes(prod.id);
    } else if (activeCategory === 'sports') {
      matchesCategory = ['gym-towel', 'sports-towel', 'beach-towel', 'pool-towel', 'baby-hooded-towel'].includes(prod.id);
    }

    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      prod.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.longDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-32 pb-24 overflow-hidden relative">
      {/* Decorative ambient background blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header section */}
      <section className="container mx-auto px-6 max-w-7xl mb-16 relative z-10">
        <div className="max-w-4xl">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-brand-cyan"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-cyan font-medium">Curated Weaves</span>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-8xl font-serif text-[#111111] leading-[1.1] tracking-tight mb-8">
              Woven <br />
              Collections
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
              Explore our complete bespoke textile catalog. Each weave is engineered to strict specifications of density, fiber standard, and dimensional tolerance.
            </p>
          </FadeIn>
        </div>

        {/* Filter controls */}
        <FadeIn direction="up" delay={0.4} className="mt-12 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center border-t border-b border-gray-200/80 py-6">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 text-xs uppercase tracking-widest rounded-full transition-all duration-300 ${
                activeCategory === 'all' 
                  ? 'bg-gray-900 text-white shadow-md' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-brand-cyan hover:text-brand-cyan'
              }`}
            >
              All Weaves
            </button>
            <button
              onClick={() => setActiveCategory('bath')}
              className={`px-5 py-2 text-xs uppercase tracking-widest rounded-full transition-all duration-300 ${
                activeCategory === 'bath' 
                  ? 'bg-gray-900 text-white shadow-md' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-brand-cyan hover:text-brand-cyan'
              }`}
            >
              Bath &amp; Hospitality
            </button>
            <button
              onClick={() => setActiveCategory('spa')}
              className={`px-5 py-2 text-xs uppercase tracking-widest rounded-full transition-all duration-300 ${
                activeCategory === 'spa' 
                  ? 'bg-gray-900 text-white shadow-md' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-brand-cyan hover:text-brand-cyan'
              }`}
            >
              Spa &amp; Salon
            </button>
            <button
              onClick={() => setActiveCategory('kitchen')}
              className={`px-5 py-2 text-xs uppercase tracking-widest rounded-full transition-all duration-300 ${
                activeCategory === 'kitchen' 
                  ? 'bg-gray-900 text-white shadow-md' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-brand-cyan hover:text-brand-cyan'
              }`}
            >
              Kitchen &amp; Utility
            </button>
            <button
              onClick={() => setActiveCategory('sports')}
              className={`px-5 py-2 text-xs uppercase tracking-widest rounded-full transition-all duration-300 ${
                activeCategory === 'sports' 
                  ? 'bg-gray-900 text-white shadow-md' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-brand-cyan hover:text-brand-cyan'
              }`}
            >
              Sports &amp; Leisure
            </button>
          </div>

          <div className="w-full md:w-80">
            <input
              type="text"
              placeholder="Search catalog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none px-5 py-2 text-sm text-gray-900 transition-colors rounded-full"
            />
          </div>
        </FadeIn>
      </section>

      {/* Interactive static organic alternating row section */}
      <section className="container mx-auto px-6 max-w-7xl min-h-[600px] relative z-10 py-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-gray-400 font-serif italic text-lg">No matching weaves found. Try another filter or search term.</p>
          </div>
        ) : (
          <div className="space-y-24 md:space-y-32">
            {filteredProducts.map((prod, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={prod.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div 
                      className="group relative rounded-2xl overflow-hidden bg-white/45 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-2xl hover:border-brand-cyan/40 transition-all duration-500 aspect-[4/3] w-full"
                    >
                      <div className="absolute inset-3 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                        <img
                          src={prod.img}
                          alt={prod.name}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/25 transition-colors duration-500" />
                      </div>
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className={`lg:col-span-7 flex flex-col justify-center ${isEven ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'}`}>
                    {/* Material & GSM Pill */}
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-cyan-50/80 text-cyan-700 border border-cyan-100/60 font-mono">
                        {prod.material} • {prod.gsm}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-3xl md:text-4xl font-serif text-[#111111] leading-tight mb-2">
                      {prod.name}
                    </h3>

                    {/* Short Description Quote */}
                    <p className="text-cyan-700/90 text-sm md:text-base font-medium font-serif italic mb-4">
                      "{prod.desc}"
                    </p>

                    {/* Complete Long Description */}
                    <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed mb-6">
                      {prod.longDesc}
                    </p>

                    {/* Technical Specifications & Laundering care Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 border-t border-b border-gray-200/40 py-4">
                      <div className="space-y-1">
                        <span className="text-[9px] uppercase tracking-wider text-gray-400 font-bold block">Standard Size</span>
                        <span className="text-gray-800 text-xs font-semibold font-mono">{prod.size}</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] uppercase tracking-wider text-gray-400 font-bold block">Weight Class</span>
                        <span className="text-gray-800 text-xs font-semibold font-mono">{prod.gsm}</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] uppercase tracking-wider text-gray-400 font-bold block">Fiber Blend</span>
                        <span className="text-gray-800 text-xs font-semibold font-mono">{prod.material}</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] uppercase tracking-wider text-gray-400 font-bold block">Care Instructions</span>
                        <span className="text-gray-500 text-xs leading-relaxed italic">{prod.care}</span>
                      </div>
                    </div>

                    {/* Inquiry Direct Action */}
                    <div>
                      <button
                        onClick={() => {
                          setCurrentPage('contact');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-2 bg-gray-900 hover:bg-brand-cyan text-white hover:text-gray-900 px-6 py-3.5 uppercase tracking-widest text-[10px] font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer border-none"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Inquire Specifications &amp; Pricing
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
