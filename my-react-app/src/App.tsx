import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StyledNavbar from "./components/Navbar";
import ContactPage from "./pages/contact";
import KnowledgePage from "./pages/KnowlegdePage";
import PotterPort from "./potter/PotterPort";
import PortAom from "./aom/PortAom";
import Financial from "./pages/Financial";
import DonationPage from "./pages/DonationPage";
import Marketplace from "./pages/Marketplace";
import Community from "./pages/CommunityForumPage";

const App: React.FC = () => {
  return (
    <Router>
      <StyledNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/knowledge" element={<KnowledgePage />} />
        <Route path="/potterport" element={<PotterPort />} />
        <Route path="/portaom" element={<PortAom />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/donationpage" element={<DonationPage />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
};

export default App;
