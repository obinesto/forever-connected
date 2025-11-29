import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContentOne from "../components/homepageContents/contentOne";
import ContentTwo from "../components/homepageContents/contentTwo";
import ContentThree from "../components/homepageContents/contentThree";
import ContentFour from "../components/homepageContents/contentFour";
import img1 from "/pre-wedding-shots/F&C1.jpg";
import img2 from "/pre-wedding-shots/F&C2.jpg";
import img3 from "/pre-wedding-shots/F&C3.jpg";
import img4 from "/pre-wedding-shots/F&C4.jpg";
import img5 from "/pre-wedding-shots/F&C5.jpg";
import img6 from "/pre-wedding-shots/F&C6.jpg";
import img7 from "/pre-wedding-shots/F&C7.jpg";
import img11 from "/pre-wedding-shots/F&C11.jpg";

export default function Homepage() {
  // Time to or after wedding config
  const difference = +new Date("2025-11-08T00:00:00") - +new Date();

  const calculateTimeLeft = () => {
    let timeBefore = {};
    let timeAfter = {};

    if (difference > 0) {
      timeBefore = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
      return timeBefore;
    } else {
      timeAfter = {
        days: Math.floor(-difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((-difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((-difference / 1000 / 60) % 60),
        seconds: Math.floor((-difference / 1000) % 60),
      };
      return timeAfter;
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  // Carousel config
  const carouselImages = [img1, img2, img11, img4, img5, img6, img7, img3];

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

  return (
    // Carousel
    <>
      <div className="relative max-w-full pt-[60px] overflow-x-hidden">
        {/* Carousel images container */}
        <Slider {...sliderSettings} className="h-screen w-full">
          {carouselImages.map((img, index) => (
            <div key={index} className="h-[105vh]">
              <img
                src={img}
                alt={`pre-wedding shot ${index + 1}`}
                className="h-full w-full object-cover object-top"
                loading="eager"
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
            {difference > 0 && (
              <p className="mt-8 text-xl tracking-[0.2em] text-amber-400">
                SAVE THE DATE!
              </p>
            )}

            {/* Countdown Timer */}
            <div className="mt-4 flex justify-center md:justify-start space-x-4 md:space-x-8 text-center">
              <div>
                <div className="text-4xl font-semibold">
                  {formatTime(timeLeft.days)}
                </div>
                <div className="text-xs">Days</div>
              </div>
              <div>
                <div className="text-4xl font-semibold">
                  {formatTime(timeLeft.hours)}
                </div>
                <div className="text-xs">Hours</div>
              </div>
              <div>
                <div className="text-4xl font-semibold">
                  {formatTime(timeLeft.minutes)}
                </div>
                <div className="text-xs">Minutes</div>
              </div>
              <div>
                <div className="text-4xl font-semibold">
                  {formatTime(timeLeft.seconds)}
                </div>
                <div className="text-xs">Seconds</div>
              </div>
              {difference < 0 && (
                <div className="text-4xl font-semibold -ml-2 md:-ml-4">ago</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ContentOne img2Prop={img2} />
      <ContentTwo img5Prop={img5} />
      <ContentThree sliderProp={Slider} />
      <ContentFour />
    </>
  );
}
