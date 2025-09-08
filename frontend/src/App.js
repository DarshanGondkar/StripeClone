import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ModularSolutions from "./components/ModularSolutions";
import Sections from "./components/Sections";
import Footer from "./components/Footer";
import BusinessSupport from "./components/SupportBussiness";
import EnterpriseReinvention from "./components/EnterpriseReinvention";
import LowCodeOptions from "./components/LowCodeOptions";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
    <ModularSolutions />
            <Sections />
            <BusinessSupport />
            <EnterpriseReinvention />
            <LowCodeOptions />
            <Footer />

    </div>
  );
}
export default App;
