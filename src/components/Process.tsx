import { FadeIn, SectionHeader } from './ui';

export function Process() {
  const steps = [
    {
      number: "01",
      title: "Sourcing",
      desc: "We select only the finest long-staple cotton fibers, known for their exceptional strength and softness."
    },
    {
      number: "02",
      title: "Spinning",
      desc: "Advanced spinning techniques create smooth, durable yarns that resist pilling and maintain their integrity."
    },
    {
      number: "03",
      title: "Weaving",
      desc: "Master weavers use state-of-the-art looms to craft dense, highly absorbent terry cloth structures."
    },
    {
      number: "04",
      title: "Finishing",
      desc: "Rigorous quality checks and eco-friendly dyeing processes ensure lasting color and unparalleled plushness."
    }
  ];

  return (
    <section id="process" className="py-24 md:py-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader 
          title="The Art of Weaving" 
          subtitle="A meticulous four-step process that transforms raw cotton into luxury textiles." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1}>
              <div className="flex flex-col h-full border-t border-gray-200 pt-8 group hover:border-brand-cyan transition-colors duration-300">
                <div className="text-3xl font-serif text-gray-300 mb-6 group-hover:text-brand-cyan transition-colors">
                  {step.number}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
