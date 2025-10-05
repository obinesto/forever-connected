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

export default function ContentThree({sliderProp}) {
  const contentThreeRef = useRef(null);

  useScrollFadeIn(contentThreeRef, ".animate-content-three", {
    start: "top 70%",
  });

  const Slider = sliderProp;

  const mobileSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
  };

  return (
    <div
      ref={contentThreeRef}
      className="relative w-full h-[80vh] md:h-screen mt-10"
    >
      {/* Background Divs */}
      <div className="h-[45vh] md:h-[65%] bg-amber-50 flex flex-col items-center pt-8 md:pt-12 animate-content-three">
        <h1 className="font-bold font-allura text-2xl sm:text-3xl md:text-4xl text-emerald-800 flex items-center gap-2 text-center px-4">
          Join Our Celebration
          <GiGlassCelebration size={40} />
        </h1>
        <p className="mt-2 font-cormorant text-base md:text-lg text-gray-600 px-4">
          We look forward to having you
        </p>
      </div>
      <div className="h-[25vh] md:h-[35%] bg-emerald-800" />

      {/* Mobile Slider */}
      <div className="absolute inset-0 top-[25%] w-full px-4 md:hidden animate-content-three">
        <Slider {...mobileSliderSettings}>
          {events.map((event, index) => (
            <div className="px-2" key={index}>
              <div
                className="bg-white rounded-2xl shadow-xl max-w-[300px] sm:max-w-xs h-[350px] sm:h-96 p-6 sm:p-8 flex flex-col items-center text-center mx-auto"
              >
                <div className="mb-4 flex items-center justify-center size-20 rounded-full border-4 border-amber-300 bg-amber-50">
                  <div className="text-emerald-800">
                    <event.icon size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold capitalize text-emerald-800">{event.type}</h3>
                <p className="mt-2 text-gray-600 flex-grow">{event.content}</p>
                <Link to={event.path} className="mt-4 text-emerald-800 uppercase tracking-wider font-semibold text-sm border-b-2 border-amber-400 hover:text-amber-400 transition-colors duration-300">
                  {event.link}
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Desktop event cards */}
      <div
        className="absolute inset-0 top-[15%] flex items-center justify-center gap-8 lg:gap-16 px-8 animate-content-three"
      >
        {events.map((event, index) => (
          <div
            className="hidden md:flex flex-col items-center bg-white rounded-2xl shadow-xl max-w-[320px] h-96 p-8 text-center animate-content-three"
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
