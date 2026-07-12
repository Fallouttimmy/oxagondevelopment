import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Policies from "./pages/Policies";
import Explore from "./pages/Explore";
import OSN from "./pages/OSN";
import Advertise from "./pages/Advertise";
import Creator from "./pages/Creator";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Homepage - Oxagon Development";
    } else if (location.pathname === "/policies") {
      document.title = "Policies - Oxagon Development";
    } else if (location.pathname === "/explore") {
      document.title = "Explore - Oxagon Development";
    } else if (location.pathname === "/osn") {
      document.title = "OSN - Oxagon Development";
    } else if (location.pathname === "/advertise") {
      document.title = "Advertisement Program - Oxagon Development";
    } else if (location.pathname === "/creator") {
      document.title = "Creator Program - Oxagon Development";
    } else {
      document.title = "Oxagon Development";
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/osn" element={<OSN />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/creator" element={<Creator />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
