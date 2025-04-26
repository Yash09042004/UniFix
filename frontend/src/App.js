import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Domains from './pages/Domains';
import Feedback from './pages/Feedback';
import ViewFeedback from './pages/ViewFeedback';
import Contribute from './pages/Contribute';
import CategoryPage from './pages/CategoryPage';
import Navbar from './components/Navbar';
//comments added 
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/view-feedback" element={<ViewFeedback />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/domains/:category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
