import { MessageCircle, Wand2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: "Describe Your Business",
    description: "Tell our AI about your business, goals, and style preferences in a simple conversation."
  },
  {
    icon: Wand2,
    title: "AI Creates Your Site",
    description: "Watch as our AI generates your complete website with text, images, and professional design."
  },
  {
    icon: Rocket,
    title: "Customize & Launch",
    description: "Fine-tune your design, add your content, and publish your website to the world instantly."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your professional website up and running in just 3 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center">
              <div className="w-1/3 h-0.5 bg-gradient-to-r from-transparent to-purple-300"></div>
              <div className="w-1/3 h-0.5 bg-purple-300"></div>
              <div className="w-1/3 h-0.5 bg-gradient-to-r from-purple-300 to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold lg:hidden">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 relative z-10">
                  <step.icon className="w-10 h-10 text-purple-600" />
                  {/* Step number for desktop */}
                  <div className="hidden lg:block absolute -top-3 -right-3 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Demo CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to see the magic?
            </h3>
            <p className="text-gray-600 mb-6">
              Join millions of users who've built their dream websites with AI
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all transform hover:-translate-y-0.5">
              Try It Free Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}