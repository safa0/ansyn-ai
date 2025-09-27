import { Shield, Gavel, Building } from 'lucide-react';

const stories = [
  {
    icon: Shield,
    title: "Locked.Money",
    subtitle: "DeFi AI Platform:",
    description: "Built comprehensive AI/ML infrastructure for vault logic, automated market making, and AI-enabled security systems."
  },
  {
    icon: Gavel,
    title: "Ecsper.com",
    subtitle: "Legal AI Agents:",
    description: "Developed secure AI systems for legal document analysis, structured drafting, and citation management with complete audit trails for regulatory compliance."
  },
  {
    icon: Building,
    title: "Calibrix.se",
    subtitle: "Construction Vision AI:",
    description: "Created advanced document intelligence system that reads architectural drawings, extracts bill of materials, and automates construction workflows."
  }
];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-24 bg-black relative">
      {/* Background Image */}
      <div 
        className="absolute left-0 top-0 w-1/3 h-full bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&w=1200&q=80&auto=format")'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Client Success Stories
            </h2>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            {stories.map((story, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-orange-500/10 backdrop-blur-sm rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <story.icon className="w-6 h-6 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{story.title}</h3>
                  <p className="text-gray-300">
                    <span className="font-semibold text-orange-500">{story.subtitle}</span>{' '}
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}