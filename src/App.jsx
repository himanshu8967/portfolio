import React from 'react';
import About from './components/About/About'; // Ensure correct path and casing
import Skills from './components/Skills/Skills'; // Ensure correct path and casing
import Footer from './components/Footer/Footer'; // Ensure correct path and casing
import Projects from './components/Projects/Projects'; // Ensure correct path and casing
import Navbar from './components/Navbar'; // Ensure correct path and casing
import Home from './components/Home'; // Ensure correct path and casing

function App() {
  return (
    <div className="bg-[#171d32] min-h-screen w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
