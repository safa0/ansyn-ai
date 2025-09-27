import { Mail, Users, Building, Shield, Zap } from 'lucide-react';

const clientTypes = [
  { icon: Building, text: "Technology companies scaling AI capabilities" },
  { icon: Shield, text: "Financial services implementing DeFi solutions" },
  { icon: Building, text: "Construction firms automating workflows" },
  { icon: Shield, text: "Legal organizations requiring compliant AI" },
  { icon: Zap, text: "Any enterprise needing trustworthy AI systems" }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to transform your business with AI that actually works? Our team of elite engineers 
              and strategists is standing by to help you navigate the future.
            </p>
            
            {/* Contact Details */}
            <div className="bg-orange-500/10 backdrop-blur-sm rounded-lg p-6 border border-orange-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-orange-500" />
                <h3 className="text-lg font-bold text-white">Contact Details</h3>
              </div>
              <a 
                href="mailto:info@ansyn.ai" 
                className="text-orange-500 hover:text-orange-400 transition-colors text-lg font-semibold"
              >
                info@ansyn.ai
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Who We Serve</h3>
            <div className="space-y-4">
              {clientTypes.map((client, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-orange-500/20">
                  <client.icon className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-300">{client.text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-gray-300 leading-relaxed mt-6">
              Whether you're a CEO envisioning transformation or a CTO executing strategy, 
              we speak your language and deliver on your timeline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}