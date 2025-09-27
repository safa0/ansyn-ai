import { Brain } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-bold text-white">Ansyn.ai</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors">About</a>
            <a href="#services" className="text-gray-300 hover:text-orange-500 transition-colors">Services</a>
            <a href="#success-stories" className="text-gray-300 hover:text-orange-500 transition-colors">Success Stories</a>
            <a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="#contact" 
              className="bg-orange-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-orange-400 transition-colors"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}