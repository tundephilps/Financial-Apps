import React from "react";
import Homepage from "./components/Homepage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Projects/Projects";
import Demo from "./components/Demo";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/Projects" element={<Projects />} />

          <Route path="/Demo" element={<Demo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
