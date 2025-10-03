import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaRegCalendarDays, FaHotel, FaGift } from "react-icons/fa6";
import { GiGlassCelebration } from 'react-icons/gi';
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";

const events = [
  {
    type: "schedule",
    icon: FaRegCalendarDays,
    content: "Explore our wedding timeline so as not to miss any moment.",
    link: "view schedule",
    path: "/schedule",
  },
  {
    type: "venue",
    icon: FaHotel,
    content: "Find directions and accommodation options for our venue.",
    link: "find location",
    path: "/schedule",
  },
  {
    type: "gifts",
    icon: FaGift,
    content: "Support our new journey together with your generous gifts.",
    link: "gift registry",
    path: "/gifts",
  },
];

export default function ContentThree() {
  const contentThreeRef = useRef(null);

  useScrollFadeIn(contentThreeRef, ".animate-content-three", {
    duration: 1,
    start: "top 80%",
  });

  return (
    <div ref={contentThreeRef} className="relative w-full h-screen pt-20">
      {/* Background Divs */}
      <div className="h-[65%] bg-amber-50 flex flex-col items-center pt-12 animate-content-three">
        <h1 className="font-bold font-allura text-3xl md:text-4xl text-emerald-800 flex items-center gap-2">
          Join Our Celebration
          <GiGlassCelebration size={40} />
        </h1>
        <p className="mt-2 font-cormorant text-lg text-gray-600">
          We look forward to having you.
        </p>
      </div>
      <div className="h-[35%] bg-emerald-800" />

      {/* event cards */}
      <div className="absolute inset-0 top-[15%] flex flex-col md:flex-row items-center justify-center gap-16 px-4">
        {events.map((event, index) => (
          <div
            className="bg-white rounded-2xl shadow-xl w-full max-w-xs h-96 p-8 flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:-translate-y-2 animate-content-three"
            key={index}
          >
            <div className="mb-4 flex items-center justify-center size-20 rounded-full border-4 border-amber-300 bg-amber-50">
              <div className="text-emerald-800">
                <event.icon size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold capitalize text-emerald-800">
              {event.type}
            </h3>
            <p className="mt-2 text-gray-600 flex-grow">
              {event.content}
            </p>
            <Link
              to={event.path}
              className="mt-4 text-emerald-800 uppercase tracking-wider font-semibold text-sm border-b-2 border-amber-400 hover:text-amber-400 transition-colors duration-300"
            >
              {event.link}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
