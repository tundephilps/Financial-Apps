import React from "react";
import Homepage from "./components/Homepage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Projects/Projects";
import Demo from "./components/Demo";
import SignUp from "./components/SignUp";
import AboutUs from "./components/AboutUs";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />

          <Route path="/Homepage" element={<Homepage />} />

          <Route path="/Projects" element={<Projects />} />

          <Route path="/Demo" element={<Demo />} />

          <Route path="/AboutUs" element={<AboutUs />} />

          <Route path="/Pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
