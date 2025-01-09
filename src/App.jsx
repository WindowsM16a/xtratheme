// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Adbar from "./Adbar";
import Cards from "./Cards";
function App() {
  return (
    <>
      <Adbar />
      <Navbar />
      <HeroSection />
      <Cards />
    </>
  );
}

export default App;
