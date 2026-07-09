import { ShieldCheck, Package, Award } from 'lucide-react';
import { FadeIn, SectionHeader } from './ui';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { ReactNode } from 'react';

function TiltCard({ children }: { children: ReactNode }) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [0, 1], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [0, 1], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      style={{
        perspective: 1000,
        height: "100%",
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="bg-white p-12 h-full shadow-lg shadow-black/5 relative transition-colors duration-500 ease-out flex flex-col"
      >
        <motion.div style={{ transform: "translateZ(30px)" }}>
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function WhyUs() {
  const reasons = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-brand-cyan" />,
      title: "Uncompromised Quality",
      desc: "Woven from the finest long-staple cotton for superior absorbency and enduring softness."
    },
    {
      icon: <Package className="w-10 h-10 text-brand-cyan" />,
      title: "Custom Bulk Orders",
      desc: "Tailored solutions for hospitals, retail, and spa businesses with rapid global fulfillment."
    },
    {
      icon: <Award className="w-10 h-10 text-brand-cyan" />,
      title: "Legacy Since 2000",
      desc: "Over two decades of established industry trust and relentless pursuit of textile perfection."
    }
  ];

  return (
    <section id="why-us" className="py-24 md:py-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader title="Why Choose Us" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 perspective-1000">
          {reasons.map((reason, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1}>
              <TiltCard>
                <div className="w-16 h-16 rounded-full bg-brand-cyan/10 flex items-center justify-center mb-8">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {reason.desc}
                </p>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
