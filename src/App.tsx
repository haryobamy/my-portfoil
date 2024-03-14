import React from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PortFolio from "./components/PortFolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App bg-gradient-to-b from-gray-800 to-black ">
      <NavBar />
      <Home />
      <About />
      <PortFolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
