import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StyledNavbar from "./components/Navbar";
import ProjectsPage from "./pages/Project";

const App: React.FC = () => {
  return (
    <Router>
      <StyledNavbar />
      <div style={{ marginTop: "4rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/fundraising" element={<Fundraising />} />{" "}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
