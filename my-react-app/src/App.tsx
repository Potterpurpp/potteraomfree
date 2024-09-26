import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StyledNavbar from "./components/Navbar";
import ProjectsPage from "./pages/Project";
import ContactPage from "./pages/contact";
import FundraisingPage from "./pages/Fundraising";
import KnowledgePage from "./pages/KnowlegdePage";
import PotterPort from "./potter/PotterPort";

const App: React.FC = () => {
  return (
    <Router>
      <StyledNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/fundraising" element={<FundraisingPage />} />{" "}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/knowledge" element={<KnowledgePage />} />
        <Route path="/potterport" element={<PotterPort />} />
      </Routes>
    </Router>
  );
};

export default App;
