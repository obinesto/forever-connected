import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Preloader from "./components/preloader";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Homepage from "./components/homepage";
import Story from "./components/story";
import Schedule from "./components/schedule";
import Gift from "./components/gift";
import WeddingParty from "./components/weddingParty";
import WeddingMemories from "./components/weddingMemories";
import Accommodation from "./components/accommodation";
import Admin from "./components/admin";
import ScrollManager from "./components/scrollManager";

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
          <ScrollManager>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/story" element={<Story />} />
              <Route path="/wedding-memories" element={<WeddingMemories />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/gift" element={<Gift />} />
              <Route path="/wedding-party" element={<WeddingParty />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </ScrollManager>
          <Footer />
        </BrowserRouter>
      )}
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
