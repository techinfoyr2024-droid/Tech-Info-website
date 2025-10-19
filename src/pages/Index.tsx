import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Ownership from "../components/Ownership";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Ownership />
        <Contact />
        {/* Removed the duplicate hero/stats section that showed "Welcome to Tech Info" and the stats */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
