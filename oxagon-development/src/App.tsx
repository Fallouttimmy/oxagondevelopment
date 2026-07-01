import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Policies from "./pages/Policies";

function AppContent() {
  const handleTitleUpdate = (title: string) => {
    document.title = title;
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={<Home onTitleChange={() => handleTitleUpdate("Homepage - Oxagon Development")} />} 
        />
        <Route 
          path="/policies" 
          element={<Policies onTitleChange={() => handleTitleUpdate("Policies - Oxagon Development")} />} 
        />
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
