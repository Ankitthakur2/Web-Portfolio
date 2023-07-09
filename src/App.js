import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import About from "../src/routes/About";
import Contact from "../src/routes/Contact";
import Home from "../src/routes/Home";
import Projects from "../src/routes/Projects";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
