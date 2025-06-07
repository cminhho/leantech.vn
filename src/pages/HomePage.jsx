import React from 'react';
import Hero from '../components/sections/Hero';
// import AboutUs from '../components/sections/AboutUs';
import Services from '../components/sections/Services';
import Products from '../components/sections/Products';
import WhyUs from '../components/sections/WhyUs';
import Clients from '../components/sections/Clients';
import CTA from '../components/sections/CTA';
import Contact from '../components/sections/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      {/* <AboutUs /> */}
      <Services />
      <Products />
      <WhyUs />
      <Clients />
      <CTA />
      <Contact />
    </>
  );
};

export default HomePage; 