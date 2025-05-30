import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Solutions from './components/sections/Solutions';
import TechPartnerships from './components/sections/TechPartnerships';
import Products from './components/sections/Products';
import WhyUs from './components/sections/WhyUs';
import Clients from './components/sections/Clients';
import CTA from './components/sections/CTA';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <TechPartnerships />
        <Solutions />
        <Products />
        <WhyUs />
        <Clients />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 