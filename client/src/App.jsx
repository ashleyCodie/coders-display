import { useState } from "react";
import  Hero  from "./components/Hero"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import "./App.css";

function App() {


  return (
    <>
     <Hero />
     <About />
     <Projects />
     <Contact />
    </>
  );
}

export default App;
