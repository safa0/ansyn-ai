import { ArrowRight, ExternalLink } from 'lucide-react';

const templates = [
  {
    category: "Restaurant",
    title: "Modern Bistro",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    color: "from-orange-400 to-red-500"
  },
  {
    category: "Portfolio",
    title: "Creative Agency",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    color: "from-purple-400 to-indigo-500"
  },
  {
    category: "Business",
    title: "Professional Services",
    image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    color: "from-blue-400 to-cyan-500"
  },
  {
    category: "E-commerce",
    title: "Fashion Store",
    image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    color: "from-pink-400 to-rose-500"
  },
  {
    category: "Blog",
    title: "Lifestyle Blog",
    image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    color: "from-green-400 to-emerald-500"
  },
  {
    category: "Fitness",
    title: "Gym & Wellness",
    image: "https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    color: "from-yellow-400 to-orange-500"
  }
];

export default function Templates() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI-generated websites for every business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI creates stunning, professional websites across different industries and styles
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {templates.map((template, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={template.image} 
                  alt={template.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${template.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span>View Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 bg-gradient-to-r ${template.color} text-white text-xs font-semibold rounded-full`}>
                    {template.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {template.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Templates CTA */}
        <div className="text-center">
          <button className="group bg-gray-100 hover:bg-purple-600 text-gray-900 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 flex items-center mx-auto">
            View All Templates
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}