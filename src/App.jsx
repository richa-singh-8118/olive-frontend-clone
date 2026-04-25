import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhoneMockup from './components/PhoneMockup';
import Features from './components/Features';
import HealthBenefits from './components/HealthBenefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-off-white font-sans overflow-x-hidden">
      <Navbar />
      <main className="pt-8">
        <Hero />
        <PhoneMockup />
        <Features />
        <HealthBenefits />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
