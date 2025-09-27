export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Who We Are
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Elite Pedigree</h3>
            <p className="text-gray-300 leading-relaxed">
              Our team brings world-class experience from Ericsson, McKinsey, ETH Zürich, and EPFL. 
              We've built our reputation on delivering complex AI solutions that enterprises depend on.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Named after the Norse Æsynjur—goddesses of foresight and wisdom—Ansyn.ai embodies the 
              guardianship of quality, trust, and enduring value in every project we undertake.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Mission-Driven</h3>
            <p className="text-gray-300 leading-relaxed">
              We exist to democratize access to enterprise-grade AI capabilities. Unlike massive consultancies, 
              we provide personalized attention and cost-efficient solutions without compromising on quality.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our focus on trustworthy AI means we build systems that are auditable, explainable, and 
              reliable—because your business deserves AI that works when it matters most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}