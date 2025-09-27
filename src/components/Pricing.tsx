import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for getting started",
    features: [
      "AI website generation",
      "Basic templates",
      "Mobile responsive",
      "SSL certificate",
      "Wix subdomain"
    ],
    cta: "Get Started Free",
    popular: false
  },
  {
    name: "Combo",
    price: "16",
    description: "Most popular for small businesses",
    features: [
      "Everything in Free",
      "Connect your domain",
      "Remove Wix ads",
      "3GB storage",
      "Basic analytics",
      "Email support"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Unlimited",
    price: "22",
    description: "For growing businesses",
    features: [
      "Everything in Combo",
      "Unlimited bandwidth",
      "10GB storage",
      "Advanced analytics",
      "Premium support",
      "Marketing suite"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Business",
    price: "32",
    description: "For serious entrepreneurs",
    features: [
      "Everything in Unlimited",
      "E-commerce features",
      "20GB storage",
      "Priority support",
      "Advanced SEO tools",
      "Custom branding"
    ],
    cta: "Start Free Trial",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose your plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Start free, then choose a plan that grows with your business
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className="text-gray-600">Monthly</span>
            <button className="relative w-12 h-6 bg-purple-600 rounded-full p-1">
              <div className="w-4 h-4 bg-white rounded-full transform translate-x-6 transition-transform"></div>
            </button>
            <span className="text-gray-900 font-semibold">Yearly</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
              Save 25%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                plan.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                plan.popular 
                  ? 'bg-purple-600 text-white hover:bg-purple-700' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Need a custom solution? <a href="#" className="text-purple-600 hover:underline">Contact our sales team</a>
          </p>
          <p className="text-sm text-gray-500">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}