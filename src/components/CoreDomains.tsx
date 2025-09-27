import { Eye, Hexagon, Brain } from 'lucide-react';

const domains = [
  {
    icon: Eye,
    title: "Computer Vision AI",
    description: "Advanced image processing, document intelligence, and visual recognition systems. We transform visual data into actionable business insights with precision and speed."
  },
  {
    icon: Hexagon,
    title: "DeFi & Financial AI",
    description: "Sophisticated AI for decentralized finance, automated market making, and risk management. We build secure, auditable financial intelligence systems."
  },
  {
    icon: Brain,
    title: "Large Language Models",
    description: "Custom LLM implementations, fine-tuning, and integration. We create conversational AI that understands your domain and delivers consistent, reliable results."
  }
];

export default function CoreDomains() {
  return (
    <section className="py-24 bg-black relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&w=2400&q=80&auto=format")'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Core Domains
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <div key={index} className="group relative">
              {/* Arrow Shape Background */}
              <div className="absolute inset-0 bg-orange-500 transform skew-y-1 group-hover:skew-y-2 transition-transform duration-300 rounded-lg" />
              
              <div className="relative bg-black/90 backdrop-blur-sm rounded-lg p-8 border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <domain.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {domain.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  {domain.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}