// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Adbar from "./components/Adbar";
import Cards from "./components/Cards";
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
