export function Footer({ setCurrentPage }: { setCurrentPage: (page: 'home' | 'about' | 'collections' | 'quality-control' | 'contact') => void }) {
  const handleNav = (page: 'home' | 'about' | 'collections' | 'quality-control' | 'contact', hash?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <footer className="bg-gray-50 text-gray-900 py-20 px-6 border-t border-gray-200">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-20">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <button onClick={() => handleNav('home')} className="relative mb-6 block hover:opacity-80 transition-opacity cursor-pointer">
              <img 
                src="/logo.png" 
                alt="Brand Logo" 
                className="h-28 md:h-32 w-auto object-contain mix-blend-darken"
              />
            </button>
            <p className="text-gray-500 font-light text-sm max-w-[280px] leading-relaxed">
              Where Softness Becomes a Standard. Uncompromising luxury and commercial towel solutions for retail brands and prestigious hotels worldwide.
            </p>
          </div>

          {/* Explore */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-900 font-semibold mb-6">Explore</h4>
            <nav className="flex flex-col gap-4">
              <button onClick={() => handleNav('home')} className="text-sm text-gray-500 hover:text-brand-cyan transition-colors text-left cursor-pointer">Home</button>
              <button onClick={() => handleNav('about')} className="text-sm text-gray-500 hover:text-brand-cyan transition-colors text-left cursor-pointer">About Us</button>
              <button onClick={() => handleNav('quality-control')} className="text-sm text-gray-500 hover:text-brand-cyan transition-colors text-left cursor-pointer">Quality Control</button>
              <button onClick={() => handleNav('contact')} className="text-sm text-gray-500 hover:text-brand-cyan transition-colors text-left cursor-pointer">Contact Us</button>
            </nav>
          </div>

          {/* Visit Us */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-900 font-semibold mb-6">Visit Us</h4>
            <address className="not-italic text-sm text-gray-500 leading-relaxed flex flex-col gap-4">
              <p>
                Plot # CI-47, Sector 6-B,<br />
                North Karachi Industrial Area,<br />
                Karachi, Pakistan
              </p>
              <p className="flex flex-col gap-1 items-center md:items-start">
                <a href="mailto:info@khantextilepk.com" className="hover:text-brand-cyan transition-colors">info@khantextilepk.com</a>
                <a href="tel:+923018240305" className="hover:text-brand-cyan transition-colors">+92 301 8240305</a>
                <a href="tel:+923321778532" className="hover:text-brand-cyan transition-colors">+92 332 1778532</a>
                <a href="tel:+923002854026" className="hover:text-brand-cyan transition-colors">+92 300 2854026</a>
                <a href="tel:+923710219843" className="hover:text-brand-cyan transition-colors">+92 371 0219843</a>
              </p>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <div className="text-gray-400 text-[10px] uppercase tracking-[0.2em]">
              &copy; {new Date().getFullYear()} KHAN TEXTILE. ALL RIGHTS RESERVED.
            </div>
            <div className="text-gray-400 text-[10px] uppercase tracking-[0.2em]">
              Powered By <a href="https://huzzz.tech" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-cyan transition-colors underline decoration-brand-cyan/40 underline-offset-4 font-semibold">Huzaifa Ali</a>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/khantextile.co" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-cyan text-[10px] uppercase tracking-[0.2em] transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-brand-cyan text-[10px] uppercase tracking-[0.2em] transition-colors">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
