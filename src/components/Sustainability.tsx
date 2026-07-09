import { FadeIn, SectionHeader } from './ui';
import { Leaf, Droplets, Recycle } from 'lucide-react';
import { motion } from 'motion/react';

export function Sustainability() {
  const initiatives = [
    {
      icon: <Leaf className="w-6 h-6 text-brand-cyan" />,
      title: "Sustainable Sourcing",
      desc: "We partner with certified farms that practice regenerative agriculture, ensuring our cotton is grown responsibly without harmful pesticides."
    },
    {
      icon: <Droplets className="w-6 h-6 text-brand-cyan" />,
      title: "Water Conservation",
      desc: "Our closed-loop dyeing facilities recycle up to 85% of water used during manufacturing, drastically reducing our environmental footprint."
    },
    {
      icon: <Recycle className="w-6 h-6 text-brand-cyan" />,
      title: "Zero-Waste Initiatives",
      desc: "Fabric offcuts are repurposed into industrial cleaning materials, ensuring minimal waste reaches landfills."
    }
  ];

  return (
    <section id="sustainability" className="py-24 md:py-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <FadeIn delay={0.2}>
            <motion.div 
              className="relative aspect-square md:aspect-[4/3] overflow-hidden bg-gray-100"
              whileHover={{ scale: 1.02, rotateY: 5, rotateX: 2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
                alt="Hands holding green plant" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </FadeIn>

          <div>
            <SectionHeader 
              title="Conscious Crafting" 
              subtitle="Our commitment to the environment is woven into every textile we produce." 
            />
            
            <div className="mt-12 space-y-10">
              {initiatives.map((item, index) => (
                <FadeIn key={index} delay={0.3 + index * 0.1} direction="left">
                  <div className="flex gap-6">
                    <div className="shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
