import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Solutions from './components/sections/Solutions';
import LogoClouds from './components/sections/LogoClouds';
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
        <Solutions />
        <WhyUs />
        <Products />
        <LogoClouds />
        <Clients />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 