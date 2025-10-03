import React from "react";
import { Link } from "react-router-dom";
import { FaArrowUp, FaHeart } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white text-emerald-800 py-10 px-4 font-cormorant">
      <div className="container mx-auto flex flex-col items-center text-center max-w-4xl">
        <Link to="/" className="text-4xl font-semibold mb-4">
          <span>Franklin</span>
          <span className="text-amber-400"> & </span>
          <span>Cynthia</span>
        </Link>
        <p className="font-allura text-3xl mb-6 flex items-center gap-2">
          Thank you for visiting
          <FaHeart className="text-amber-400" />
        </p>
        <button
          onClick={scrollToTop}
          className="mb-10 bg-amber-400 text-emerald-900 p-3 rounded-full hover:bg-amber-300 transition-colors duration-300"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>

        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-lg">
          <Link to="/story" className="hover:text-amber-400 transition-colors">Love Story</Link>
          <Link to="/schedule" className="hover:text-amber-400 transition-colors">Schedule</Link>
          <Link to="/moments" className="hover:text-amber-400 transition-colors">Moments</Link>
          <Link to="/wedding-party" className="hover:text-amber-400 transition-colors">Wedding Party</Link>
          <Link to="/accommodation" className="hover:text-amber-400 transition-colors">Accommodation</Link>
          <Link to="/gift" className="hover:text-amber-400 transition-colors">Gifts</Link>
        </div>

        {/* Divider */}
        <div className="w-full max-w-md h-px bg-gray-300 mb-8"></div>

        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Cyprian Obi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
