import { useRef } from "react";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";
import { FaStar, FaMapMarkerAlt, FaMap } from "react-icons/fa";
import headerBg from "/header-backgrounds/emerald-dark-image.jpg";

const accommodationDetails = [
  {
    name: "Villa Toscana Hotel",
    picture: "/accommodation/villa-toscana-hotel-asaba.jpg",
    address: "6M9V+2R3, Okpanam Rd, Central Area, Asaba 320108, Delta",
    rating: 4.2,
    mapLink: "https://maps.app.goo.gl/dTKLRv2XZzVs5f2K9",
  },
  {
    name: "GK Apartments",
    picture: "/accommodation/GK-Apartments.jpg",
    address: "Micheal Fidelis Nwaefulu St, off Squash Club, Road, Asaba 320242, Delta",
    rating: 4.8,
    mapLink: "https://maps.app.goo.gl/TL89CxC2PZTJtyQE9",
  },
  {
    name: "⁠Qubes Hotel and Suites",
    picture: "/accommodation/Qubes-Hotel-and-Suites.jpg",
    address: "Plot 100 Old Anwai Rd, GRA Phase I, Asaba 320231, Delta",
    rating: 4.3,
    mapLink: "https://maps.app.goo.gl/A4tBDB3MwAjSGLbp7",
  },
  {
    name: "El Green Hotel",
    picture: "/accommodation/El-Green-hotel.jpg",
    address: "32, Old Anwai Road, Infant Jesus Rd, Asaba, Delta",
    rating: 3.7,
    mapLink: "https://maps.app.goo.gl/weYQ1g476cKsXcS47",
  },
  {
    name: "⁠Black Tower hotel",
    picture: "/accommodation/Black-Tower-Hotel.jpg",
    address: "78 Old Anwai Rd, Isieke, Asaba 320242, Delta",
    rating: 4.4,
    mapLink: "https://maps.app.goo.gl/izWqZZk8eXYrUDXf6",
  },
  {
    name: "Ternopil Dew Hotel and Suites",
    picture: "/accommodation/Ternopil-Dew-Hotel-and Suites.jpg",
    address: "No 7 Dummudu Close, off Summit Rd, beside Mobile Filling Station, Asaba, Delta",
    rating: 4.2,
    mapLink: "https://maps.app.goo.gl/2Q4tTWCHs2wVUCCy5",
  },
];

export default function Accommodation() {
  const accommodationRef = useRef(null);
  useScrollFadeIn(accommodationRef, ".animate-accommodation");

  return (
    <div ref={accommodationRef} className="pt-[60px] bg-amber-50 text-emerald-900">
      {/* Header */}
      <header
        className="relative h-[50vh] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="font-allura text-6xl md:text-8xl bg-gradient-to-r from-amber-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-md py-1 px-2">
              Accommodation
            </h1>
            <p className="mt-2 text-lg font-cormorant">
              Find a comfortable place to stay
            </p>
          </div>
        </div>
      </header>

      {/* Accommodation List */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {accommodationDetails.map((hotel, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <img src={hotel.picture} alt={hotel.name} className="w-full h-56 object-cover" loading="lazy" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-cormorant font-bold text-emerald-800">{hotel.name}</h3>
                  <div className="flex items-center bg-amber-400 text-emerald-900 px-2 py-1 rounded-full text-sm font-bold">
                    <FaStar className="mr-1" />
                    <span>{hotel.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm flex items-start gap-2 mb-4">
                  <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
                  <span>{hotel.address}</span>
                </p>
                <a href={hotel.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-emerald-800 font-semibold hover:text-amber-500 transition-colors">
                  <span><FaMap /></span>
                  View on Map
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
