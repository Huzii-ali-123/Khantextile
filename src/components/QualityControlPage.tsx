import { FadeIn } from './ui';
import { motion } from 'motion/react';
import { 
  Shield, 
  CheckCircle, 
  Eye, 
  Settings, 
  HeartHandshake, 
  Droplets, 
  Maximize2, 
  Palette, 
  Award, 
  Cpu, 
  ClipboardCheck, 
  PackageCheck,
  ChevronRight,
  Sparkles,
  Scissors
} from 'lucide-react';

export function QualityControlPage() {
  const qcStages = [
    {
      title: "Raw Material Inspection",
      description: "Yarn selection is analyzed for staple length, tensile strength, and twist counts before loom allocation. Only standard premium fibers are certified."
    },
    {
      title: "Yarn & Fabric Quality Checking",
      description: "Frequent sampling checks on the looms are executed to identify and prevent weaving faults, lint problems, or loop inconsistencies early."
    },
    {
      title: "In-Process Weaving Monitoring",
      description: "Our loom technicians inspect warp and weft tension setups constantly. Terry height is measured dynamically to ensure the requested GSM density."
    },
    {
      title: "Stitching & Finishing Inspection",
      description: "Reinforced double-stitching is applied to all edges. Skilled sewers check corners and hems individually to avoid any loose threads."
    },
    {
      title: "Color Consistency & Absorbency",
      description: "We use high-grade safe dyes to ensure colorfastness. Daily tests verify water absorbency speeds and fabric touch profiles."
    },
    {
      title: "Final Product Inspection",
      description: "Every single finished towel is spread out under intense lighting to check for skipped stitches, size variations, or structural defects."
    },
    {
      title: "Packaging Quality Checks",
      description: "Bales and carton weight are cross-checked before loading. Water-tight packing protects towels from dust or moisture during marine transit."
    }
  ];

  const qualityParameters = [
    {
      icon: <Award className="w-6 h-6 text-brand-cyan" />,
      title: "Softness & Fabric Feel",
      desc: "Delicate and gentle touch suitable for baby skin and high-end luxury hospitality environments."
    },
    {
      icon: <Droplets className="w-6 h-6 text-brand-cyan" />,
      title: "Water Absorbency",
      desc: "Instant capillary absorbency that captures moisture quickly and dries efficiently between uses."
    },
    {
      icon: <Scissors className="w-6 h-6 text-brand-cyan" />,
      title: "Stitch Strength & Durability",
      desc: "Double lock-stitch borders designed to survive intensive commercial laundering without fraying."
    },
    {
      icon: <Palette className="w-6 h-6 text-brand-cyan" />,
      title: "Color Consistency",
      desc: "Safe, vibrant dyes that maintain brilliance and shade precision across repeating production batches."
    },
    {
      icon: <Maximize2 className="w-6 h-6 text-brand-cyan" />,
      title: "Size & Measurement Accuracy",
      desc: "Strict adherence to custom dimensional tolerances requested by clients for a uniform presentation."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-brand-cyan" />,
      title: "Finishing & Edge Quality",
      desc: "Perfect square-corner alignment and crisp, seamless edge-binding for a luxury retail display."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Header */}
      <section className="container mx-auto px-6 max-w-7xl mb-24">
        <div className="max-w-4xl">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-brand-cyan"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-cyan font-medium">Zero Compromise</span>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-8xl font-serif text-[#111111] leading-[1.1] tracking-tight mb-8">
              Quality Control <br />
              System
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-gray-500 text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
              At Khan Textile, quality is our top priority. Every towel is manufactured under strict quality control procedures to ensure consistency, durability, and customer satisfaction.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container mx-auto px-6 max-w-7xl mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start border-t border-gray-200/80 pt-16">
          <FadeIn direction="right" delay={0.1}>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-brand-cyan font-semibold block mb-4">Our Attitude</span>
              <h2 className="text-3xl font-serif text-[#111111] mb-6">Our Quality Philosophy</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                We believe quality is not a one-step process—it is a continuous system that starts from raw material selection and continues through every stage of production until final packaging.
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                Our goal is to ensure that every product delivered meets customer expectations without compromise. By treating quality as a system-wide discipline, we prevent defects rather than just sorting them out.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <motion.div 
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white p-12 border border-gray-200/80 rounded-sm shadow-sm"
            >
              <h3 className="text-xl font-serif text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-5 h-5 text-brand-cyan animate-pulse" />
                Standard Compliance
              </h3>
              <div className="space-y-6 text-sm text-gray-500 font-light leading-relaxed">
                <p>
                  We produce towels according to exact specifications, catering to clients with strict tolerances for shrinking, skewing, and color retention.
                </p>
                <div className="h-[1px] bg-gray-100" />
                <p>
                  Whether you represent a 5-star hotel chain requiring heavy-duty terry loops, or a premium retail private-label looking for smooth ring-spun luxury, our supervision teams execute custom testing to verify absolute suitability.
                </p>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* QC Stages Steps */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16">
            <FadeIn direction="up">
              <span className="text-[10px] uppercase tracking-widest text-brand-cyan font-semibold block mb-4">Inspection Pipeline</span>
              <h2 className="text-4xl font-serif text-[#111111]">Our Multi-Stage Inspection Process</h2>
              <p className="text-gray-500 text-sm mt-2 max-w-xl">Every batch of yarn goes through seven sequential quality validation checks before cargo release.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {qcStages.map((stage, idx) => (
              <FadeIn key={idx} delay={idx * 0.08} direction="up">
                <motion.div 
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="p-8 bg-[#FAF9F6] border border-gray-100 rounded-sm h-full flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="text-brand-cyan font-serif text-3xl font-light mb-6">0{idx + 1}</div>
                    <h3 className="text-lg font-serif text-gray-900 mb-3">{stage.title}</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">{stage.description}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Key Quality Parameters */}
      <section className="container mx-auto px-6 max-w-7xl my-32">
        <div className="mb-16 text-center">
          <FadeIn direction="up">
            <span className="text-[10px] uppercase tracking-widest text-brand-cyan font-semibold block mb-4">Standard Evaluation</span>
            <h2 className="text-4xl font-serif text-[#111111]">Key Quality Parameters</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">We measure and optimize these variables to ensure the finest premium towel touch.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualityParameters.map((param, idx) => (
            <FadeIn key={idx} delay={idx * 0.06} direction="up">
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-10 bg-white border border-gray-200/60 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center mb-6">
                  {param.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{param.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{param.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Production Supervision and Final Inspection Split */}
      <section className="bg-gray-950 text-white py-24 border-y border-gray-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="right">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-cyan font-medium block mb-4">Rigorous Management</span>
                <h2 className="text-3xl md:text-5xl font-serif mb-6">Production Supervision &amp; Final Review</h2>
                <p className="text-gray-300 font-light leading-relaxed mb-6">
                  Our production is managed by experienced textile professionals and skilled supervisors who monitor every single stage of manufacturing. Each order is carefully checked to ensure consistency and reliability.
                </p>
                <p className="text-gray-300 font-light leading-relaxed">
                  Before packaging, every single towel undergoes a final, exhaustive manual review under specialized standard lightboxes. Only approved items are packed and prepared for delivery to ensure customers receive consistent, reliable quality.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FadeIn direction="left" delay={0.1}>
                <motion.div 
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="p-8 bg-white/5 border border-white/10 rounded-sm h-full"
                >
                  <Cpu className="w-8 h-8 text-brand-cyan mb-4" />
                  <h4 className="font-serif text-lg text-white mb-2">Expert Overseers</h4>
                  <p className="text-gray-400 text-xs font-light leading-relaxed">Textile engineers monitoring looms, dye balances, and weaving dynamics daily.</p>
                </motion.div>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.2}>
                <motion.div 
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="p-8 bg-white/5 border border-white/10 rounded-sm h-full"
                >
                  <PackageCheck className="w-8 h-8 text-brand-cyan mb-4" />
                  <h4 className="font-serif text-lg text-white mb-2">Final Certification</h4>
                  <p className="text-gray-400 text-xs font-light leading-relaxed">Absolute approval checks ensuring strict compliance with packing list standards.</p>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Banner */}
      <section className="container mx-auto px-6 max-w-7xl mt-32 text-center">
        <FadeIn direction="up">
          <div className="max-w-3xl mx-auto py-12 border-t border-gray-200">
            <HeartHandshake className="w-12 h-12 text-brand-cyan mx-auto mb-6 animate-bounce" style={{ animationDuration: '3s' }} />
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Our Commitment to Partners</h2>
            <p className="text-gray-500 font-light leading-relaxed max-w-xl mx-auto">
              We are committed to building long-term business relationships based on trust, consistency, and quality. At Khan Textile, we never compromise on product standards at any stage of production.
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
