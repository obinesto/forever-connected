import { useRef } from "react";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";
import { Link } from "react-router-dom";
import { FaQuoteLeft, FaQuoteRight, FaCloudDownloadAlt } from "react-icons/fa";
import { RiHeartsLine } from "react-icons/ri";
import img1 from "/pre-wedding-shots/F&C1.jpg";
import img2 from "/pre-wedding-shots/F&C2.jpg";
import img3 from "/pre-wedding-shots/F&C3.jpg";
import img4 from "/pre-wedding-shots/F&C4.jpg";
import img5 from "/pre-wedding-shots/F&C5.jpg";
import img6 from "/pre-wedding-shots/F&C6.jpg";
import img7 from "/pre-wedding-shots/F&C7.jpg";
import img8 from "/pre-wedding-shots/F&C8.jpg";
import img9 from "/pre-wedding-shots/F&C9.jpg";
import img10 from "/pre-wedding-shots/F&C10.jpg";
import img11 from "/pre-wedding-shots/F&C11.jpg";
import img12 from "/pre-wedding-shots/F&C13.jpg";

const storySections = [
  {
    title: "Our Encounter",
    image: img1,
    icon: RiHeartsLine,
    text: "Our story began in 2017 at the University of Ibadan, where we were both members of the Board of Lectors at Our Lady Seat of Wisdom Catholic Church. Fate intervened during a lectors’ meeting. Frank, drawn by my natural hair, initiated a conversation. For me, as the financial secretary, it was a simple act of exchanging contacts to keep him informed about meetings after he had missed one. For him, it was the beginning of something special after saving me from a stalker. This simple act unknowingly set the stage for our future.",
    quote:
      "Sometimes the most ordinary things could be made extraordinary, simply by doing them with the right people.",
  },
  {
    title: "From Friendship to Forever",
    image: img2,
    icon: RiHeartsLine,
    text: "Following our first real conversation, Frank began to call and chat frequently, and we found myself eagerly looking forward to our interactions. What started as friendly check-ins quickly blossomed into something beautiful and sweet that neither of us could ignore. Years down the line, we officially became a couple, and the rest is history. It has been a journey of divine timing, deep friendship, and unwavering love, and we are so grateful for the path that brought us together.",
    quote: "A true love story never ends.",
  },
];

const galleryImages = [
  { src: img1 },
  { src: img7 },
  { src: img10 },
  { src: img9 },
  { src: img5 },
  { src: img11 },
  { src: img2 },
  { src: img8 },
  { src: img4 },
  { src: img3 },
  { src: img6 },
  { src: img12 },
];

export default function Story() {
  const storyRef = useRef(null);
  useScrollFadeIn(storyRef, ".animate-story");

  const handleDownload = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    // Extracting filename from URL
    const filename = imageUrl.split("/").pop();
    link.download = filename || "couple-photo.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div ref={storyRef} className="pt-[60px] bg-amber-50 text-emerald-900">
      {/* Header */}
      <header
        className="relative h-[50vh] md:h-screen bg-cover bg-top bg-fixed"
        style={{ backgroundImage: `url(${img4})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-amber-50/30 to-emerald-900/40 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="font-allura text-6xl md:text-8xl bg-gradient-to-r from-amber-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-md py-1 px-2">
              Our Love Story
            </h1>
            <p className="mt-2 text-lg font-cormorant">
              From a simple hello to a lifetime together.
            </p>
          </div>
        </div>
      </header>

      {/* Story Sections */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-story">
        <div className="max-w-6xl mx-auto space-y-20 md:space-y-32">
          {storySections.map((section, index) => (
            <section
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Framed Image */}
              <div className="w-full md:w-5/12 flex-shrink-0">
                <div className="p-1 md:p-2 rounded-lg shadow-xl bg-gradient-to-br from-emerald-800 to-amber-400 transform md:hover:scale-105 transition-transform duration-500">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-auto object-cover rounded-md"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Story Text */}
              <div className="w-full md:w-7/12 text-center md:text-left transition-transform duration-300 md:hover:-translate-y-2">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <section.icon size={28} className="text-amber-400" />
                  <h2 className="text-2xl md:text-4xl font-cormorant font-bold text-emerald-800">
                    {section.title}
                  </h2>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                  {section.text}
                </p>
                <div className="flex justify-center md:justify-start text-gray-500 italic">
                  <FaQuoteLeft className="text-amber-400 mr-3 flex-shrink-0 rotate-" />
                  <p className="font-cormorant text-lg">{section.quote}</p>
                  <FaQuoteRight className="text-amber-400 ml-3 flex-shrink-0" />
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Photo Gallery */}
      <section
        id="photo-gallery"
        className="bg-white py-16 md:py-24 scroll-mt-[60px]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-story">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-emerald-800">
              Our Moments
            </h2>
            <p className="mt-2 font-allura text-3xl text-amber-500">
              a glimpse into our journey
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 animate-story">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
                tabIndex={0}
              >
                <img
                  src={image.src}
                  alt={`couple shot ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => handleDownload(image.src)}
                    className="absolute bottom-2 right-2 flex items-center gap-2 bg-white bg-opacity-80 text-emerald-800 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 hover:bg-amber-300 focus:outline-none"
                    aria-label={`Download ${image.alt}`}
                  >
                    <FaCloudDownloadAlt size={20} />
                    <span className="font-semibold text-sm inline">
                      Download
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-story">
            <p className="text-lg text-black font-light">
              These photos embodifies the essence of our relationship—being{" "}
              <span className="font-extrabold font-cormorant text-emerald-800">
                Forever-Connected.
              </span>
              <br />
              We hope you love them as much as we do.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding Memories Link Section */}
      <section className="bg-emerald-800 text-white py-16 md:py-20 shadow-xl animate-story">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold">
            Be a Part of Our Story
          </h2>
          <p className="mt-4 font-allura text-3xl text-amber-300">
            share your memories from our special day
          </p>
          <p className="mt-4 max-w-2xl mx-auto">
            Help us build our wedding album with the beautiful moments you
            captured. Your photos and videos are a treasured part of our new
            beginning.
          </p>
          <Link
            to="/wedding-memories"
            className="mt-8 inline-block bg-white text-emerald-800 font-bold py-3 px-10 rounded-full hover:bg-amber-300 hover:text-emerald-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Share Your Memories
          </Link>
        </div>
      </section>
    </div>
  );
}
