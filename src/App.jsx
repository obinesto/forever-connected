import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Preloader from './components/preloader'
import Nav from './components/nav'
import Footer from "./components/footer";
import Homepage from './components/homepage'
import Story from './components/story'
import Schedule from './components/schedule'
import Gift from './components/gift'
import WeddingParty from './components/weddingParty'
import Accommodation from './components/accommodation'

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <Nav />
          <ScrollToHashElement />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/story" element={<Story />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/gift" element={<Gift />} />
            <Route path="/wedding-party" element={<WeddingParty />} />
            <Route path="/accommodation" element={<Accommodation />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App