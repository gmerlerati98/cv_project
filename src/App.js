import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <header className="App Header">
        <h1>Giuseppe Merlerati</h1>
        <p>Software Engineer | Frontend Developer | Backend Enthusiast</p>
      </header>
      <div className="container mt-4">
        <Profile />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
