import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Service from "../components/Service";
import Diverse from "../components/Diverse";
import Achivement from "../components/Achivement";
import ChooseUs from "../components/ChooseUs";
import Placement from "../components/placement";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Diverse />
      <Achivement />
      <ChooseUs />
      <Placement />
      <Footer/>
    </div>
  );
};

export default Home;