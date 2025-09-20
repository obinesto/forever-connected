import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "/F&C1.jpg";
import img2 from "/F&C2.jpg";
import img3 from "/F&C3.jpg";
import img4 from "/F&C4.jpg";
import img5 from "/F&C5.jpg";
import img6 from "/F&C6.jpg";
import { RiHeartsLine } from "react-icons/ri";

export default function Homepage() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-11-08T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const carouselImages = [img1, img2, img3, img4, img5, img6];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="relative w-full pt-[60px]">
      {/* Carousel images container */}
      <Slider {...sliderSettings} className="h-screen w-full">
        {carouselImages.map((img, index) => (
          <div key={index} className="h-[105vh]">
            <img
              src={img}
              alt={`pre-wedding shot ${index + 1}`}
              className="h-full w-full object-cover object-top"
            />
          </div>
        ))}
      </Slider>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start">
        <div className="text-center md:ml-24 text-white p-4">
          <h1 className="text-5xl md:text-7xl font-allura flex flex-col items-center">
            <span className="text-amber-400">Franklin</span>
            <span className="text-emerald-800"> & </span>
            <span className="text-amber-400">Cynthia</span>
          </h1>
          <p className="mt-2 text-lg">November 08, 2025 • Delta, Nigeria</p>
          <p className="mt-8 text-xl tracking-[0.2em] text-amber-400">
            SAVE THE DATE!
          </p>

          {/* Countdown Timer */}
          <div className="mt-4 flex justify-center md:justify-start space-x-4 md:space-x-8 text-center">
            <div>
              <div className="text-4xl font-semibold">
                {formatTime(timeLeft.days || 0)}
              </div>
              <div className="text-xs">Days</div>
            </div>
            <div>
              <div className="text-4xl font-semibold">
                {formatTime(timeLeft.hours || 0)}
              </div>
              <div className="text-xs">Hours</div>
            </div>
            <div>
              <div className="text-4xl font-semibold">
                {formatTime(timeLeft.minutes || 0)}
              </div>
              <div className="text-xs">Minutes</div>
            </div>
            <div>
              <div className="text-4xl font-semibold">
                {formatTime(timeLeft.seconds || 0)}
              </div>
              <div className="text-xs">Seconds</div>
            </div>
          </div>
        </div>
      </div>
      {/* Additional information */}
      <div className="w-full pt-20">
        <div className="px-2">
          <h1 className="text-center font-bold text-3xl md:text-4xl mb-1">
            We're Getting Married!
          </h1>
          <p className="font-allura text-xl text-emerald-800 flex items-center justify-center gap-2">
            join us as we celebrate our love{" "}
            <span>
              <RiHeartsLine color="gold" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
