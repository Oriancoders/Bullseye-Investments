import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Markets from './components/Markets';
import Education from './components/Education';
import OpenAccount from './components/OpenAccount';
import MetaTrader from './components/MetaTrader';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Markets />
      <Education />
      <OpenAccount />
      <MetaTrader />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;