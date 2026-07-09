import { ReactNode } from 'react';
import { motion } from 'motion/react';

export function FadeIn({ children, delay = 0, direction = 'up', className = '' }: { children: ReactNode, delay?: number, direction?: 'up' | 'down' | 'left' | 'right', className?: string, key?: import('react').Key }) {
  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) {
  return (
    <div className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <FadeIn direction="up" delay={0.1}>
        <div className={`flex items-center gap-4 mb-4 ${centered ? 'justify-center' : ''}`}>
          <div className="h-[1px] w-12 bg-brand-cyan"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-cyan font-medium">Khan Textile</span>
        </div>
      </FadeIn>
      <FadeIn direction="up" delay={0.2}>
        <h2 className="text-4xl md:text-6xl font-serif text-[#111111] leading-tight mb-6">{title}</h2>
      </FadeIn>
      {subtitle && (
        <FadeIn direction="up" delay={0.3}>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
