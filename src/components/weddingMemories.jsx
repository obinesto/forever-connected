import { useRef } from "react";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";
import { FaCameraRetro, FaGoogleDrive } from "react-icons/fa";
import weddingMemoriesBg from "/header-backgrounds/memories-bg.jpg";

export default function WeddingMemories() {
  const memoriesRef = useRef(null);
  useScrollFadeIn(memoriesRef, ".animate-weddingMemories");

  const googleDriveLink = "https://drive.google.com/drive/folders/1xjZMPEjqLWX__-yeYaUEtLqNMauXIrFk";

  return (
    <div ref={memoriesRef} className="pt-[60px] bg-amber-50 text-emerald-900">
      {/* Header */}
      <header
        className="relative h-[50vh] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${weddingMemoriesBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="font-allura text-6xl md:text-8xl bg-gradient-to-r from-amber-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-md py-1 px-2">
              Share The Memories
            </h1>
            <p className="mt-2 text-lg font-cormorant">
              Help us capture every moment of our special day.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-weddingMemories">
        <div className="max-w-3xl mx-auto text-center p-8 md:p-12">
          <FaCameraRetro className="text-6xl text-emerald-800 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-emerald-800">
            Our Shared Album
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Our wedding day was filled with love, laughter, and unforgettable
            moments. Many of those moments were captured through your eyes, and
            we'd be honored if you would share them with us. Please upload your
            favorite photos and videos to our shared Google Drive folder.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Your memories are a precious part of our story, and we can't wait
            to see the day from your perspective!
          </p>
          <a
            href={googleDriveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-emerald-800 text-white font-bold py-4 px-10 rounded-full hover:bg-amber-400 hover:text-emerald-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaGoogleDrive size={22} />
            Upload to Google Drive
          </a>
        </div>
      </main>
    </div>
  );
}
