import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Policies from "./pages/Policies";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Homepage - Oxagon Development";
    } else if (location.pathname === "/policies") {
      document.title = "Policies - Oxagon Development";
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
