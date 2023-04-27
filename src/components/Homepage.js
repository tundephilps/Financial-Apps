import React from "react";
import { Header } from "./Header";
import Hero from "./Hero";
import Feature from "./Feature";
import Solution from "./Solution";
import Footer from "./Footer";
import Nav from "./Navbar";
import Sponsors from "./Sponsors";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <Sponsors />
      <Solution />
      <Footer />
    </>
  );
};

export default Homepage;
