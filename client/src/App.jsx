import { useState } from "react";
import  Hero  from "./components/Hero"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import "./App.css";

function App() {


  return (
    <div className="min-h-screen">
     <Hero />
     <About />
     <Projects />
     <Contact />
    </div>
  );
}

export default App;
