import { useState, FormEvent } from 'react';
import { FadeIn } from './ui';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = { name: '', company: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
      isValid = false;
    }
    if (!formData.company.trim()) {
      newErrors.company = 'Please enter your company name.';
      isValid = false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
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
        throw new Error(data.error || 'Failed to send inquiry. Please try again.');
      }

      setIsSubmitted(true);
      setFormData({ name: '', company: '', email: '', message: '', honeypot: '' });
    } catch (error: any) {
      alert(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-32 pb-24 overflow-hidden">
      <section className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-brand-cyan"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-cyan font-medium">Get In Touch</span>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-8xl font-serif text-[#111111] leading-[1.1] tracking-tight mb-6">
              Contact Us
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              Partner with us for premium, custom-manufactured towel solutions. Speak directly with our product team to request custom samples, catalog items, and container-level pricing.
            </p>
          </FadeIn>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-t border-gray-200/80 pt-16">
          {/* Left Column: Info and Map */}
          <div className="lg:col-span-5 space-y-10">
            <FadeIn direction="right" delay={0.1}>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-brand-cyan font-semibold block mb-4">Direct Office</span>
                <h2 className="text-3xl font-serif text-[#111111] mb-8">Khan Textile Headquarters</h2>
              </div>
            </FadeIn>

            {/* Direct Cards */}
            <div className="space-y-6">
              <FadeIn direction="right" delay={0.15}>
                <motion.div whileHover={{ x: 6 }} className="flex gap-4">
                  <div className="p-3 bg-brand-cyan/10 rounded-full h-fit">
                    <MapPin className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-serif text-gray-900 font-medium mb-1">Our Address</h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">
                      Plot # CI-47, Sector 6-B, <br />
                      North Karachi Industrial Area, <br />
                      Karachi, Pakistan
                    </p>
                  </div>
                </motion.div>
              </FadeIn>

              <FadeIn direction="right" delay={0.2}>
                <motion.div whileHover={{ x: 6 }} className="flex gap-4">
                  <div className="p-3 bg-brand-cyan/10 rounded-full h-fit">
                    <Mail className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-serif text-gray-900 font-medium mb-1">Email Inquiries</h4>
                    <a href="mailto:info@khantextilepk.com" className="text-brand-cyan hover:underline text-sm font-medium">
                      info@khantextilepk.com
                    </a>
                  </div>
                </motion.div>
              </FadeIn>

              <FadeIn direction="right" delay={0.25}>
                <motion.div whileHover={{ x: 6 }} className="flex gap-4">
                  <div className="p-3 bg-brand-cyan/10 rounded-full h-fit">
                    <Phone className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-serif text-gray-900 font-medium mb-1">Phone &amp; WhatsApp</h4>
                    <div className="flex flex-col gap-1.5">
                      <a href="tel:+923018240305" className="text-gray-900 hover:underline text-sm font-medium block">
                        +92 301 8240305
                      </a>
                      <a href="tel:+923321778532" className="text-gray-900 hover:underline text-sm font-medium block">
                        +92 332 1778532
                      </a>
                      <a href="tel:+923002854026" className="text-gray-900 hover:underline text-sm font-medium block">
                        +92 300 2854026
                      </a>
                      <a href="tel:+923710219843" className="text-gray-900 hover:underline text-sm font-medium block">
                        +92 371 0219843
                      </a>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>

              <FadeIn direction="right" delay={0.3}>
                <motion.div whileHover={{ x: 6 }} className="flex gap-4">
                  <div className="p-3 bg-brand-cyan/10 rounded-full h-fit">
                    <Clock className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-serif text-gray-900 font-medium mb-1">Working Hours</h4>
                    <p className="text-gray-500 text-sm font-light">
                      Monday - Saturday: 9:00 AM - 6:00 PM <br />
                      Sunday: Closed
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            </div>

            {/* Embed Mini Map */}
            <FadeIn direction="right" delay={0.35}>
              <motion.div 
                whileHover={{ y: -4 }}
                className="border border-gray-200 p-2 bg-white rounded-sm shadow-sm overflow-hidden h-72"
              >
                <iframe
                  title="Khan Textile Location Map"
                  src="https://maps.google.com/maps?q=Plot%20CI-47,%20Sector%206-B,%20North%20Karachi%20Industrial%20Area,%20Karachi,%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </FadeIn>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-white p-8 md:p-12 border border-gray-200/80 rounded-sm shadow-sm">
                <span className="text-[10px] uppercase tracking-widest text-brand-cyan font-semibold block mb-2">Request Quote</span>
                <h3 className="text-3xl font-serif text-[#111111] mb-8">Send Us a Message</h3>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-brand-cyan/10 border border-brand-cyan/30 p-8 text-center rounded-sm space-y-4"
                    >
                      <CheckCircle2 className="w-12 h-12 text-gray-900 mx-auto" />
                      <h4 className="text-xl font-serif text-gray-900 font-medium">Thank You!</h4>
                      <p className="text-gray-600 text-sm font-light max-w-md mx-auto leading-relaxed">
                        Your message has been successfully dispatched to our client relation desk. We will review your specifications and contact you back at the provided address within 24 working hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form key="form" onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name field */}
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
                            className={`w-full bg-[#FAF9F6] border ${errors.name ? 'border-red-400' : 'border-gray-200'} focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none px-4 py-3 text-gray-900 transition-colors rounded-sm`}
                            placeholder="Your Name"
                          />
                          <AnimatePresence>
                            {errors.name && (
                              <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-500 text-xs mt-1">
                                {errors.name}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Company field */}
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
                            className={`w-full bg-[#FAF9F6] border ${errors.company ? 'border-red-400' : 'border-gray-200'} focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none px-4 py-3 text-gray-900 transition-colors rounded-sm`}
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

                      {/* Email field */}
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
                          className={`w-full bg-[#FAF9F6] border ${errors.email ? 'border-red-400' : 'border-gray-200'} focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none px-4 py-3 text-gray-900 transition-colors rounded-sm`}
                          placeholder="example@company.com"
                        />
                        <AnimatePresence>
                          {errors.email && (
                            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-500 text-xs mt-1">
                              {errors.email}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Message field */}
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-xs uppercase tracking-wider text-gray-500 font-medium">Message *</label>
                        <textarea 
                          id="message"
                          value={formData.message}
                          onChange={(e) => {
                            setFormData({...formData, message: e.target.value});
                            if (errors.message) setErrors({...errors, message: ''});
                          }}
                          rows={5}
                          className={`w-full bg-[#FAF9F6] border ${errors.message ? 'border-red-400' : 'border-gray-200'} focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none px-4 py-3 text-gray-900 transition-colors rounded-sm resize-none`}
                          placeholder="Enter details of towel types, dimensions, densities, quantities, or customization requests."
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

                      {/* Submit button */}
                      <motion.button 
                        type="submit" 
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full bg-gray-900 hover:bg-brand-cyan text-white hover:text-gray-900 font-medium uppercase tracking-widest text-xs py-4 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                      >
                        {isSubmitting ? 'Dispatching Message...' : 'Send Inquiry'}
                        <Send className="w-4 h-4" />
                      </motion.button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
