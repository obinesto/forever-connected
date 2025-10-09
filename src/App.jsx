import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Preloader from './components/preloader'
import Nav from './components/nav'
import Footer from "./components/footer";
import Homepage from './components/homepage'
import Story from './components/story'
import Schedule from './components/schedule'
import Gift from './components/gift'
import WeddingParty from './components/weddingParty'
import Accommodation from './components/accommodation'


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