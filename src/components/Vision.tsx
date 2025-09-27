export default function Vision() {
  return (
    <section className="py-24 bg-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black mb-4">Beyond Consulting</h3>
            <p className="text-black/80 leading-relaxed">
              We're evolving from a services firm to a platform company, developing proprietary AI products 
              that will revolutionize how enterprises adopt and scale AI capabilities.
            </p>
            <p className="text-black/80 leading-relaxed">
              Our long-term vision positions Ansyn.ai as the definitive partner for AI transformation across 
              industries, combining deep technical expertise with strategic business insight.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-black/10 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&w=1200&q=80&auto=format"
                alt="Futuristic AI technology roadmap"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}