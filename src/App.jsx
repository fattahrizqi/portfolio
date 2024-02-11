import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Projects, About } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <Router className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/portfolio/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
