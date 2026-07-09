import { useState, FormEvent } from 'react';
import { FadeIn, SectionHeader } from './ui';
import { MapPin, Mail, Send, MessageCircle, Phone } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '', honeypot: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.company.trim()) newErrors.company = 'Please enter your company name.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide a message.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message. Please try again.');
      }

      setIsSuccess(true);
      setFormData({ name: '', company: '', email: '', message: '' });
      setErrors({});
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error: any) {
      alert(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader title="Get in Touch" subtitle="Partner with us for unparalleled textile solutions." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mt-16">
          
          {/* Form */}
          <FadeIn delay={0.2}>
            <form className="space-y-6 relative" onSubmit={handleSubmit} noValidate>
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute -top-16 left-0 right-0 bg-cyan-50 text-cyan-800 p-4 rounded-md text-sm text-center"
                  >
                    Your message has been sent successfully.
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider text-gray-500 font-medium">Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({...formData, name: e.target.value});
                      if (errors.name) setErrors({...errors, name: ''});
                    }}
                    className={`w-full bg-gray-50 border ${errors.name ? 'border-red-400' : 'border-gray-200'} focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none px-4 py-3 text-gray-900 transition-colors rounded-sm`}
                    placeholder="John Doe"
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-500 text-xs mt-1">
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs uppercase tracking-wider text-gray-500 font-medium">Company *</label>
                  <input 
                    type="text" 
                    id="company"
                    value={formData.company}
                    onChange={(e) => {
                      setFormData({...formData, company: e.target.value});
                      if (errors.company) setErrors({...errors, company: ''});
                    }}
                    className={`w-full bg-gray-50 border ${errors.company ? 'border-red-400' : 'border-gray-200'} focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none px-4 py-3 text-gray-900 transition-colors rounded-sm`}
                    placeholder="Company Name"
                  />
                  <AnimatePresence>
                    {errors.company && (
                      <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-500 text-xs mt-1">
                        {errors.company}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-wider text-gray-500 font-medium">Email *</label>
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({...formData, email: e.target.value});
                    if (errors.email) setErrors({...errors, email: ''});
                  }}
                  className={`w-full bg-gray-50 border ${errors.email ? 'border-red-400' : 'border-gray-200'} focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none px-4 py-3 text-gray-900 transition-colors rounded-sm`}
                  placeholder="john@example.com"
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-wider text-gray-500 font-medium">Message *</label>
                <textarea 
                  id="message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({...formData, message: e.target.value});
                    if (errors.message) setErrors({...errors, message: ''});
                  }}
                  rows={4}
                  className={`w-full bg-gray-50 border ${errors.message ? 'border-red-400' : 'border-gray-200'} focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none px-4 py-3 text-gray-900 transition-colors rounded-sm resize-none`}
                  placeholder="Tell us about your requirements..."
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Honeypot field (hidden from real users, bots will auto-fill it) */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <input 
                  type="text" 
                  name="website" 
                  value={formData.honeypot} 
                  onChange={(e) => setFormData({...formData, honeypot: e.target.value})} 
                  tabIndex={-1} 
                  autoComplete="off" 
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-cyan-500 text-white px-8 py-4 text-sm uppercase tracking-widest font-medium transition-colors shadow-sm disabled:opacity-70 rounded-sm"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4 ml-2" />
              </button>

            </form>
          </FadeIn>

          {/* Details */}
          <FadeIn delay={0.4} direction="left">
            <h3 className="text-2xl font-serif text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start text-gray-600">
                <MapPin className="w-6 h-6 text-brand-cyan shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">Khan Textile Headquarters</p>
                  <p className="font-light leading-relaxed">
                    Plot # CI-47, Sector 6-B,<br />
                    North Karachi Industrial Area,<br />
                    Karachi, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-center text-gray-600">
                <Mail className="w-6 h-6 text-brand-cyan shrink-0" />
                <a href="mailto:info@khantextilepk.com" className="hover:text-brand-cyan transition-colors font-medium">
                  info@khantextilepk.com
                </a>
              </div>

              <div className="flex gap-4 items-start text-gray-600">
                <Phone className="w-6 h-6 text-brand-cyan shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">Phone &amp; WhatsApp</p>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+923018240305" className="hover:text-brand-cyan transition-colors font-light block">
                      +92 301 8240305
                    </a>
                    <a href="tel:+923321778532" className="hover:text-brand-cyan transition-colors font-light block">
                      +92 332 1778532
                    </a>
                    <a href="tel:+923002854026" className="hover:text-brand-cyan transition-colors font-light block">
                      +92 300 2854026
                    </a>
                    <a href="tel:+923710219843" className="hover:text-brand-cyan transition-colors font-light block">
                      +92 371 0219843
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-100">
              <p className="text-gray-600 mb-6 font-light">Need an immediate response for a bulk order?</p>
              <a 
                href="https://wa.me/923018240305" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-cyan-600 hover:text-cyan-700 font-medium transition-colors border border-cyan-100 hover:border-cyan-200 bg-cyan-50/50 px-6 py-3 rounded-full"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp (+92 301 8240305)
              </a>
            </div>
            
            {/* Embedded Google Map */}
            <div className="w-full h-48 bg-gray-100 mt-12 rounded-sm overflow-hidden border border-gray-200">
              <iframe 
                src="https://maps.google.com/maps?q=Plot%20CI-47,%20Sector%206-B,%20North%20Karachi%20Industrial%20Area,%20Karachi,%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
