import { Zap, DollarSign, Users, Star } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: "Rapid Execution",
    description: "Deliver results in weeks, not months. Our streamlined processes and elite team ensure faster time-to-market without sacrificing quality."
  },
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    description: "Boutique pricing with enterprise-grade results. We provide the expertise of major consultancies at a fraction of the cost and overhead."
  },
  {
    icon: Users,
    title: "Personal Partnership",
    description: "Direct access to senior experts on every project. No junior consultants or account managers—you work directly with the architects of your solution."
  },
  {
    icon: Star,
    title: "Proven Excellence",
    description: "Track record of successful deployments across critical industries. Our clients trust us with their most important AI initiatives."
  }
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Ansyn.ai
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group relative">
              {/* Decorative shape */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 transform rotate-45 opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <reason.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {reason.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}