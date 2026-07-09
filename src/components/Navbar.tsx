import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type PageType = 'home' | 'about' | 'collections' | 'quality-control' | 'contact';

const NAV_LINKS = [
  { name: 'HOME', page: 'home' as const },
  { name: 'ABOUT US', page: 'about' as const },
  { name: 'COLLECTION', page: 'collections' as const },
  { name: 'QUALITY CONTROL', page: 'quality-control' as const },
  { name: 'CONTACT', page: 'contact' as const },
];

export function Navbar({ currentPage, setCurrentPage }: { currentPage: PageType, setCurrentPage: (page: PageType) => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: PageType) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none flex justify-center px-4 md:px-6">
        <div
          className={`w-full transition-all duration-500 ease-[0.22,1,0.36,1] pointer-events-auto flex justify-between items-center ${
            isScrolled
              ? 'mt-4 max-w-5xl bg-white/80 backdrop-blur-md shadow-lg border border-gray-200/40 rounded-full py-3 px-6 md:px-10'
              : currentPage === 'home'
                ? 'mt-0 max-w-7xl bg-transparent border-b border-transparent py-8 px-6'
                : 'mt-0 max-w-full bg-[#FAF9F6]/95 backdrop-blur-md border-b border-gray-200/50 py-5 px-6 md:px-12'
          }`}
        >
          <button 
            onClick={() => handleNav('home')} 
            className="relative group flex items-center hover:opacity-80 transition-opacity cursor-pointer text-left"
          >
            <img 
              src="/logo.png" 
              alt="Brand Logo" 
              className={`w-auto object-contain mix-blend-darken transition-all duration-500 ${
                isScrolled ? 'h-16 md:h-20' : 'h-24 md:h-28'
              }`}
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10">
            {NAV_LINKS.map((link) => {
              // Active page state check
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.page)}
                  className="relative group text-xs uppercase tracking-[0.2em] transition-colors pb-2 cursor-pointer"
                >
                  <span className={`transition-colors duration-300 ${isActive ? 'text-brand-cyan' : 'text-gray-900 group-hover:text-brand-cyan'}`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-cyan"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-gray-900 focus:outline-none hover:scale-110 transition-transform"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <img 
                src="/logo.png" 
                alt="Brand Logo" 
                className="h-24 w-auto object-contain mix-blend-darken"
              />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-900 hover:scale-110 transition-transform"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>
            
            <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
              {NAV_LINKS.map((link, i) => {
                const isActive = currentPage === link.page;
                return (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNav(link.page)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`text-2xl font-serif tracking-wider transition-colors duration-300 cursor-pointer block ${
                      isActive ? 'text-brand-cyan italic' : 'text-gray-900 hover:text-brand-cyan'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
