import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./Title.css";
import gsap from "gsap";
import SplitType from "split-type";

function App() {
  useEffect(() => {
    // Split the text into characters for animation
    const myText = new SplitType("#my-title");
    //const mySubtitle = new SplitType("#my-subtitle");

    // GSAP animation
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 1,
      opacity: 1,
    });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="App bg-light text-dark">
      <header className="bg-black text-white text-center p-4">
        <h1 id="my-title" className="gsap-title">
          Giuseppe.Merlerati
        </h1>
        <p id ="my-subtitle">Software Engineer | Powerlifter | Tech Enthusiast</p>
      </header>
      <div className="container mt-4">
        <Contact />
        <Profile />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;

