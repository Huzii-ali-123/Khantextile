import { FadeIn, SectionHeader } from './ui';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Khan Textile has completely elevated our guest experience. The plushness and durability of their hotel collection is unmatched.",
      author: "Elena R.",
      title: "DIRECTOR OF HOUSEKEEPING, GRAND LUXURY PLAZA"
    },
    {
      quote: "We switched to Khan for our spa's entire linen inventory. The absorbency and softness remain perfect even after hundreds of washes.",
      author: "Michael T.",
      title: "OWNER, SERENITY WELLNESS SPA"
    },
    {
      quote: "The custom bulk order was handled flawlessly. Exceptional quality, rapid delivery, and beautiful craftsmanship.",
      author: "Sarah L.",
      title: "PROCUREMENT MANAGER, GLOBAL RESORTS INC."
    }
  ];

  return (
    <section className="py-24 md:py-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader 
          title="Voices of Luxury" 
          subtitle="What our partners say about the Khan Textile experience."
          centered 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          {testimonials.map((test, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1}>
              <div className="flex flex-col h-full items-start text-left border border-gray-100 p-8 rounded-sm shrink-0">
                <Quote className="w-10 h-10 text-brand-cyan/20 mb-6" />
                <p className="text-gray-700 italic font-serif leading-relaxed mb-8 flex-1 text-lg">
                  "{test.quote}"
                </p>
                <div>
                  <h4 className="text-gray-900 font-medium font-serif">{test.author}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-2">{test.title}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
