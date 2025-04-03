import './App.css'
import About from './pages/About.tsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import Footer from './components/Footer.tsx'
import Portfolio from './pages/Portfolio.tsx';


function App() {
  

  return (
    <>

      <Router>
      <Navbar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
      <Footer/>
    </>
  )
}

export default App
