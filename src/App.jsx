import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import AboutUs from './components/sections/AboutUs';
import Services from './components/sections/Services';
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
        {/* <AboutUs /> */}
        <Services />
        <Products />
        <WhyUs />
        <Clients />
        <TechPartnerships />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 