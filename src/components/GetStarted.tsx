const options = [
  {
    title: "Discovery Call",
    description: "Consultation to understand your AI challenges and explore potential solutions. No commitment, just expert insights."
  },
  {
    title: "Pilot Project",
    description: "Rapid proof-of-concept to demonstrate value and establish working relationship. Typically 2-4 weeks with clear success metrics."
  },
  {
    title: "Advisory Workshop",
    description: "Comprehensive AI strategy session with your leadership team. Define roadmap, priorities, and implementation approach."
  }
];

export default function GetStarted() {
  return (
    <section className="py-24 bg-black relative">
      {/* Background Image */}
      <div 
        className="absolute left-0 top-0 w-1/3 h-full bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&w=1200&q=80&auto=format")'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Build Your AI Future?
            </h2>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {options.map((option, index) => (
              <div key={index} className="bg-orange-500/10 backdrop-blur-sm rounded-lg p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-bold text-white mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}