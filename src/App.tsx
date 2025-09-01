import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Industry from "./pages/Industry";
import Competencies from "./pages/Competencies";
import Channels from "./pages/Channels";
import Specialists from "./pages/Specialists";
import Brands from "./pages/Brands";
import Management from "./pages/Management";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar appears on all pages */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> {/* Our Story */}
            <Route path="/industry" element={<Industry />} /> {/* Industries We Serve */}
            <Route path="/competencies" element={<Competencies />} /> {/* Our Expertise */}
            <Route path="/channels" element={<Channels />} /> {/* Distribution Network */}
            <Route path="/specialists" element={<Specialists />} /> {/* Solutions */}
            <Route path="/brands" element={<Brands />} /> {/* Our Partners */}
            <Route path="/management" element={<Management />} /> {/* Leadership Team */}
            <Route path="/contact" element={<Contact />} /> {/* Contact Us */}
          </Routes>
        </main>

        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}
