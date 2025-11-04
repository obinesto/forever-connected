import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Preloader from "./components/preloader";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Homepage from "./pages/homepage"
import Story from "./pages/story";
import Schedule from "./pages/schedule";
import Gift from "./pages/gift";
import WeddingParty from "./pages/weddingParty";
import WeddingMemories from "./pages/weddingMemories";
import Accommodation from "./pages/accommodation";
import Admin from "./pages/admin";
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
