import React, { forwardRef, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer.js";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

import HeroSection from "../components/Heroimg.js";
const Home = forwardRef((props, ref) => {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (id) => {
    let targetRef = null;
    switch (id) {
      case "about":
        targetRef = aboutRef;
        break;
      case "home":
        targetRef = homeRef;
        break;

      case "project":
        targetRef = projectsRef;
        break;
      case "contact":
        targetRef = contactRef;
        break;
      default:
        break;
    }

    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <section ref={homeRef} id="home">
        <Navbar scrollToRef={scrollToRef} />
        <HeroSection />
      </section>

      <section ref={aboutRef} id="about">
        <About />
      </section>
      <section ref={projectsRef} id="project">
        <Projects />
      </section>
      <section ref={contactRef} id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
});

export default Home;
