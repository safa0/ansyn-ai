const steps = [
  { number: "01", title: "Discovery & Strategy" },
  { number: "02", title: "Rapid Prototyping" },
  { number: "03", title: "Iterative Development" },
  { number: "04", title: "Production Deployment" },
  { number: "05", title: "Ongoing Support" }
];

export default function Approach() {
  return (
    <section className="py-24 bg-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Partnership Over Projects</h3>
              <p className="text-black/80 leading-relaxed">
                We embed with your team as trusted advisors, not just vendors. Our agile methodology 
                ensures rapid iteration, continuous feedback, and solutions that evolve with your needs.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Trustworthy AI First</h3>
              <p className="text-black/80 leading-relaxed">
                Every system we build prioritizes transparency, auditability, and explainability. 
                We eliminate AI hallucinations and ensure your stakeholders can trust the decisions our systems make.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-black/10 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-orange-500 font-bold">{step.number}</span>
                </div>
                <h4 className="text-lg font-semibold text-black">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}