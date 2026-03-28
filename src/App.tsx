import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PortFolio from './components/PortFolio';
import SocialLinks from './components/SocialLinks';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';

function App() {
  return (
    <div className='App bg-gradient-to-b from-gray-800 to-black h-full overflow-y-auto'>
      <NavBar />
      <Home />
      <About />
      <WorkExperience />
      <PortFolio />
      <Skills />
      <Education />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
