import { FadeIn } from './ui';
import { motion } from 'motion/react';
import { 
  Building, 
  Target, 
  Award, 
  Layers, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  ClipboardCheck, 
  Compass, 
  Anchor, 
  ChevronRight,
  Sparkles,
  ShoppingBag,
  Truck,
  Flame,
  CheckCircle2,
  Package
} from 'lucide-react';

export function AboutPage() {
  const products = [
    { name: "Bath Towels", desc: "Luxurious, high-density cotton towels crafted for ultimate absorbency and comfort." },
    { name: "Hand Towels", desc: "Premium quality and perfect texture for everyday luxury." },
    { name: "Face Towels", desc: "Extra soft, gentle on skin, and durably stitched for high-frequency use." },
    { name: "Beach Towels", desc: "Generously sized, vibrant, and quick-drying cotton towels." },
    { name: "Hotel Towels", desc: "Heavy-duty, commercial-grade towels designed to withstand frequent industrial washing." },
    { name: "Kitchen Towels", desc: "Highly absorbent, durable weaves designed for versatile culinary needs." },
    { name: "Promotional Towels", desc: "Customized woven or printed towels for premium brand merchandising." },
    { name: "Custom-Made Towels", desc: "Tailored to your precise dimensions, yarn specifications, colorways, and designs." }
  ];

  const coreStrengths = [
    {
      icon: <Award className="w-6 h-6 text-brand-cyan" />,
      title: "25+ Years of Experience",
      desc: "With decades of dedicated towel manufacturing, we understand international standards and custom market specifications inside out."
    },
    {
      icon: <Layers className="w-6 h-6 text-brand-cyan" />,
      title: "Flexible Manufacturing",
      desc: "We deliver tailored production runs. Whether custom size, GSM count, color, packaging, or brand labels, we adapt to you."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-cyan" />,
      title: "Strong Production Capacity",
      desc: "Our state-of-the-art facilities easily scale from small boutique requests to high-volume commercial shipments without delay."
    },
    {
      icon: <Users className="w-6 h-6 text-brand-cyan" />,
      title: "Customer-Focused Approach",
      desc: "We build partnerships through clear communication, prompt updates, reliability, and long-term business collaboration."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-cyan" />,
      title: "Competitive Factory Pricing",
      desc: "By handling weaving, cutting, and stitching directly, we offer exceptional manufacturer-direct pricing to optimize your margins."
    }
  ];

  const processSteps = [
    { step: "01", name: "Yarn Selection", desc: "We source high-grade long-staple cotton yarn for maximum strength, softness, and absorption." },
    { step: "02", name: "Weaving", desc: "Using advanced looms, the yarn is woven into precise terry loops or waffle designs according to density rules." },
    { step: "03", name: "Cutting", desc: "Computerized cutting guarantees exact dimensions across all product batches." },
    { step: "04", name: "Stitching", desc: "Reinforced double-lock stitching is applied to the borders to prevent fraying and ensure longevity." },
    { step: "05", name: "Quality Inspection", desc: "Each item is checked individually under professional lighting for loom errors, color consistency, and weight." },
    { step: "06", name: "Packing", desc: "Compressed and packed securely in protective packaging to prevent moisture or dust ingress during transport." },
    { step: "07", name: "Delivery Preparation", desc: "Customs-cleared and packed onto pallets ready for efficient shipping internationally." }
  ];

  const industries = [
    { name: "Hotels & Hospitality", desc: "Bespoke hotel towel supply and high-grade resort collections." },
    { name: "Retail Brands", desc: "Premium bath and beach towel ranges ready for department store shelves." },
    { name: "Wholesalers & Distributors", desc: "High-volume container shipments at optimized cost structures." },
    { name: "Promotional Companies", desc: "Custom jacquard weaving or embroidery for high-profile marketing campaigns." },
    { name: "Export Buyers", desc: "Strict adherence to international standards and shipping regulations." }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Hero Header */}
      <section className="container mx-auto px-6 max-w-7xl mb-24">
        <div className="max-w-4xl">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-brand-cyan"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-cyan font-medium">Since 2000</span>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-8xl font-serif text-[#111111] leading-[1.1] tracking-tight mb-8">
              Our Heritage <br />
              &amp; Vision
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-gray-500 text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
              For over two decades, Khan Textile has woven comfort and durability into premium towels. Guided by founder Adeel Ahmed Khan in Karachi, Pakistan, our commitment remains absolute: uncompromising quality and client trust.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Narrative Split */}
      <section className="container mx-auto px-6 max-w-7xl mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start border-t border-gray-200/80 pt-16">
          <FadeIn direction="right" delay={0.1}>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-brand-cyan font-semibold block mb-4">Our Story</span>
              <h2 className="text-3xl font-serif text-[#111111] mb-6">Crafting Quality Towels Since 2000</h2>
              <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                <p>
                  Khan Textile is a towel manufacturing company based in Karachi, Pakistan, founded by Adeel Ahmed Khan in 2000. With over 25 years of experience in the textile industry, we are committed to producing high-quality towels with a focus on consistency, durability, and customer satisfaction.
                </p>
                <p>
                  Our manufacturing facilities are nestled in the heart of Karachi's prominent Industrial Area, operating with a specialized team that handles advanced yarn inspection, looming, cutting, sewing, and strict packaging checks under one umbrella.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-brand-cyan font-semibold block mb-4">The Outlook</span>
              <h2 className="text-3xl font-serif text-[#111111] mb-6">Our Vision</h2>
              <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                <p>
                  Our vision is to deliver reliable towel manufacturing solutions that meet both local and international market requirements. We continuously work to improve our production quality and capabilities to serve a wide range of business needs.
                </p>
                <p>
                  Khan Textile is actively expanding its presence in global markets and welcomes inquiries from importers, wholesalers, retailers, and private-label brands worldwide. We believe in trust, quality, and consistency as the foundation of every successful business relationship.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Manufacture */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16">
            <FadeIn direction="up">
              <span className="text-[10px] uppercase tracking-widest text-brand-cyan font-semibold block mb-4">Our Expertise</span>
              <h2 className="text-4xl font-serif text-[#111111]">What We Manufacture</h2>
              <p className="text-gray-500 text-sm mt-2 max-w-xl">We specialize in a complete range of towel products designed to suit both everyday luxury and intense commercial utility.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p, idx) => (
              <FadeIn key={idx} delay={idx * 0.08} direction="up">
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="p-8 bg-[#FAF9F6] rounded-sm shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-brand-cyan/30 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="h-1.5 w-8 bg-brand-cyan mb-6 rounded-full" />
                    <h3 className="text-xl font-serif text-gray-900 mb-3">{p.name}</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Quality Standards banner */}
      <section className="container mx-auto px-6 max-w-7xl my-32">
        <FadeIn direction="up">
          <div className="bg-gray-950 text-white rounded-sm p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-cyan font-medium block mb-4">Materials &amp; Quality</span>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6">Exceptional Long-Staple Cotton &amp; Multi-Stage Inspection</h2>
              <p className="text-gray-300 font-light leading-relaxed mb-8 text-base md:text-lg">
                We use carefully selected cotton-based materials suitable for towel manufacturing. Our focus is on softness, absorbency, durability, and consistent finishing. Every single towel is manufactured under strict quality control at multiple stages to ensure reliable and consistent results for our clients.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8 mt-8">
                <div>
                  <h4 className="text-brand-cyan font-medium mb-2">Sustainable Sourcing</h4>
                  <p className="text-gray-400 text-sm font-light">We source raw cotton yarn ethically, supporting sustainable practices that conserve water and guarantee fiber purity.</p>
                </div>
                <div>
                  <h4 className="text-brand-cyan font-medium mb-2">Multi-Tier Inspection</h4>
                  <p className="text-gray-400 text-sm font-light">From yarn tensile testing to border seam strength checks, no towel leaves our plant without a strict 4-stage review.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Process Flow */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16">
            <FadeIn direction="up">
              <span className="text-[10px] uppercase tracking-widest text-brand-cyan font-semibold block mb-4">Systematic Execution</span>
              <h2 className="text-4xl font-serif text-[#111111]">Our Manufacturing Process</h2>
              <p className="text-gray-500 text-sm mt-2 max-w-xl">Every stage of production is structured for flawless luxury and structural longevity.</p>
            </FadeIn>
          </div>

          <div className="relative">
            {/* Desktop progress connector line */}
            <div className="hidden lg:block absolute top-[44px] left-8 right-8 h-[1px] bg-gray-200 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
              {processSteps.map((step, idx) => (
                <FadeIn key={idx} delay={idx * 0.1} direction="up" className="flex flex-col">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="flex flex-col h-full"
                  >
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center font-serif text-brand-cyan font-semibold text-lg mb-6 shadow-sm transition-colors hover:border-brand-cyan">
                      {step.step}
                    </div>
                    <h3 className="text-base font-serif text-gray-900 mb-2">{step.name}</h3>
                    <p className="text-gray-500 text-xs font-light leading-relaxed">{step.desc}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us and MOQ */}
      <section className="container mx-auto px-6 max-w-7xl my-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <FadeIn direction="up">
                <span className="text-[10px] uppercase tracking-widest text-brand-cyan font-semibold block mb-4">Values &amp; Capabilities</span>
                <h2 className="text-4xl font-serif text-[#111111] mb-10">Why Choose Khan Textile</h2>
              </FadeIn>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreStrengths.map((s, idx) => (
                <FadeIn key={idx} delay={idx * 0.08} direction="up" className="space-y-3">
                  <motion.div whileHover={{ x: 6 }} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-brand-cyan/10 rounded-full">{s.icon}</div>
                      <h4 className="text-lg font-medium text-gray-900">{s.title}</h4>
                    </div>
                    <p className="text-gray-500 text-sm font-light leading-relaxed pl-12">{s.desc}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* MOQ Card */}
          <div className="mt-12 lg:mt-0">
            <FadeIn direction="left" delay={0.2}>
              <motion.div 
                whileHover={{ y: -6 }}
                className="bg-gray-50 border border-gray-200 p-8 rounded-sm shadow-sm flex flex-col justify-between"
              >
                <div>
                  <Package className="w-8 h-8 text-brand-cyan mb-6 animate-pulse" />
                  <h3 className="text-2xl font-serif text-gray-900 mb-4">Minimum Order Quantity (MOQ)</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">
                    MOQ depends on product type and customization requirements. We offer flexible order quantities suitable for both small-scale retailers, custom promotional events, and high-volume wholesale or import buyers.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold block mb-2">Inquire for details</span>
                  <p className="text-gray-900 text-sm font-medium">We design custom solutions starting from pilot runs up to container shipments.</p>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 text-center">
            <FadeIn direction="up">
              <span className="text-[10px] uppercase tracking-widest text-brand-cyan font-semibold block mb-4">Global Markets</span>
              <h2 className="text-4xl font-serif text-[#111111]">Industries We Serve</h2>
              <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">Providing customized woven excellence across a wide variety of commercial sectors.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((ind, idx) => (
              <FadeIn key={idx} delay={idx * 0.06} direction="up">
                <motion.div 
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="p-6 border border-gray-100 hover:border-brand-cyan/20 hover:shadow-md transition-all duration-300 rounded-sm bg-white h-full"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan mb-4" />
                  <h4 className="font-serif text-gray-900 text-lg mb-2">{ind.name}</h4>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{ind.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Direct Details Banner */}
      <section className="container mx-auto px-6 max-w-7xl mt-32 text-center">
        <FadeIn direction="up">
          <div className="max-w-2xl mx-auto py-12 border-t border-gray-200">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Ready to Discuss Your Production?</h2>
            <p className="text-gray-500 text-sm font-light leading-relaxed mb-8">
              Get in touch with Adeel Ahmed Khan or our product specialists. We provide free quotations, consultations, and sample towel reviews.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Email:</span>
                <a href="mailto:Khantextileforwork@gmail.com" className="text-brand-cyan font-medium hover:underline">Khantextileforwork@gmail.com</a>
              </div>
              <div className="h-1 w-1 bg-gray-300 rounded-full hidden md:block" />
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Phone:</span>
                <a href="tel:+923018240305" className="text-gray-900 font-medium hover:underline">+92 301 8240305</a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
