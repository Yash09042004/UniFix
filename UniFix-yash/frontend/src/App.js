import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Domains from "./pages/Domains";
import Feedback from "./pages/Feedback";
import Navbar from "./components/Navbar";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/domains/:category" element={<CategoryPage />} /> {/* Dynamic route */}
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;