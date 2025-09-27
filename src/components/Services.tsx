import { Target, Code, Zap } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: "AI Strategy & Architecture",
    description: "Strategic guidance from concept to deployment. We design AI systems that align with your business objectives and scale with your growth."
  },
  {
    icon: Code,
    title: "AI Software Factory",
    description: "End-to-end software development and AI implementation. From prototypes to production-ready systems, we handle every aspect of your technical needs."
  },
  {
    icon: Zap,
    title: "System Integration",
    description: "Seamless integration of AI capabilities into your existing infrastructure. We ensure minimal disruption while maximizing impact and performance."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What We Do
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/20 transition-all duration-300">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                {service.title}
              </h3>
              <p className="text-black/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}