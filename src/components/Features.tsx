import { Bot, Palette, Zap, Shield, Globe, Users } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: "AI-Powered Design",
    description: "Our advanced AI analyzes your business and creates a unique website tailored to your needs in seconds."
  },
  {
    icon: Palette,
    title: "Unlimited Customization", 
    description: "Fine-tune every aspect of your site with our intuitive editor. Change colors, fonts, layouts, and more."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Go from idea to published website in under 2 minutes. No coding or design experience required."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SSL certificates, secure hosting, and automatic backups included."
  },
  {
    icon: Globe,
    title: "Mobile Optimized",
    description: "Every website is automatically optimized for mobile, tablet, and desktop viewing experiences."
  },
  {
    icon: Users,
    title: "Built-in Analytics",
    description: "Track visitors, measure performance, and grow your business with comprehensive analytics tools."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to succeed online
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered design to enterprise-grade hosting, we provide all the tools you need to build and grow your business online.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl">
            Start Building Your Website
          </button>
        </div>
      </div>
    </section>
  );
}