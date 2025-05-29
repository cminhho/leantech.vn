import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Solutions from './components/sections/Solutions';
import Products from './components/sections/Products';
import WhyUs from './components/sections/WhyUs';
import Clients from './components/sections/Clients';
import CTA from './components/sections/CTA';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Products />
        <WhyUs />
        <Clients />
        <CTA />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 