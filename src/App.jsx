import '@/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@components/Navbar";
import Footer from '@components/Footer'
import ErrorBoundary from '@components/ErrorBoundary';
import { LanguageProvider } from '@contexts/LanguageContext';
import Home from "@pages/Home";
import About from '@pages/About'
import Contact from "@pages/Contact";
import Portfolio from '@pages/Portfolio';
import Impressum from '@pages/Impressum';
import Datenschutz from '@pages/Datenschutz';
import NotFound from '@pages/NotFound';

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col">
          <Router>
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<div className="pt-20 min-h-screen"><About /></div>} />
                <Route path="/portfolio" element={<div className="pt-20 min-h-screen"><Portfolio /></div>} />
                <Route path="/contact" element={<div className="pt-20 min-h-screen"><Contact /></div>} />
                <Route path="/impressum" element={<div className="pt-20 min-h-screen"><Impressum /></div>} />
                <Route path="/datenschutz" element={<div className="pt-20 min-h-screen"><Datenschutz /></div>} />
                {/* 404 - Catch all */}
                <Route path="*" element={<div className="pt-20 min-h-screen"><NotFound /></div>} />
              </Routes>
            </main>
            <Footer/>
          </Router>
        </div>
      </LanguageProvider>
    </ErrorBoundary>
  )
}

export default App
