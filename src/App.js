import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";

function App() {
  return (
    // <>fragment
    <>
      <Router>
        <>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
