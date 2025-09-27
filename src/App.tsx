import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CoreDomains from './components/CoreDomains';
import Approach from './components/Approach';
import SuccessStories from './components/SuccessStories';
import WhyChoose from './components/WhyChoose';
import Vision from './components/Vision';
import GetStarted from './components/GetStarted';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <CoreDomains />
      <Approach />
      <SuccessStories />
      <WhyChoose />
      <Vision />
      <GetStarted />
      <Contact />
    </div>
  );
}

export default App;