import { useRef } from "react";
import flower from "/flower-bg-3.jpg";
import { RiHeartsLine } from "react-icons/ri";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";

export default function ContentOne({ img2Prop }) {
  const contentOneRef = useRef(null);

  useScrollFadeIn(contentOneRef, ".animate-content-one");

  return (
    <div
      ref={contentOneRef}
      className="w-full min-h-screen pt-20 bg-amber-50 py-4 overflow-hidden"
    >
      <div className="px-2 h-[10%] animate-content-one mb-10">
        <h1 className="text-center font-bold text-3xl md:text-4xl mb-1">
          We're Getting Married!
        </h1>
        <p className="font-allura text-2xl text-emerald-800 flex items-center justify-center gap-2">
          join us as we celebrate our love{" "}
          <span>
            <RiHeartsLine color="gold" />
          </span>
        </p>
      </div>
      <div className="relative grid h-[90%] w-[80%] md:w-[90%] lg:w-[80%] m-auto">
        <div className="hidden md:flex flex-col gap-12 absolute top-0 right-0 h-full w-72 lg:w-80 py-2 animate-content-one px-4">
          {/* text content for desktop 1 */}
          <p className="text-center text-sm md:text-base leading-relaxed">
            From our very first conversation, we knew something special was
            unfolding. Every shared laugh and late-night talk has woven our
            lives together in the most beautiful way, building a foundation of
            love, trust, and endless support.
          </p>
          <img
            src={flower}
            alt="flower image"
            className="h-60 object-cover rounded-md"
          />
        </div>
        <div className="hidden md:flex flex-col gap-12 absolute left-0 bottom-0 h-full w-72 lg:w-80 py-2 animate-content-one px-4">
          <img
            src={flower}
            alt="flower image"
            className="h-60 object-cover rounded-md"
          />
          {/* text content for desktop 2 */}
          <p className="text-center text-sm md:text-base leading-relaxed">
            Now, as we stand on the brink of forever, we are filled with so much
            joy for the future. We can't wait to continue building our lives
            together as husband and wife, surrounded by the people who mean the
            most to us.
          </p>
        </div>
        {/* text content for mobile 1 */}
        <div className="md:hidden w-full m-auto animate-content-one px-4">
          <p className="text-center text-sm leading-relaxed">
            From our very first conversation, we knew something special was
            unfolding. Every shared laugh and late-night talk has woven our
            lives together in the most beautiful way, building a foundation of
            love, trust, and endless support.
          </p>
        </div>
        <div className="size-60 sm:size-72 md:size-80 relative m-auto rounded-full circle-glow animate-content-one">
          <img
            src={img2Prop}
            alt="pre-wedding shot 2"
            className="object-cover rounded-full size-full hover:scale-110 transition-transform duration-500 ease-in-out"
            loading="lazy"
          />
        </div>
        {/* text content for mobile 2 */}
        <div className="md:hidden w-full m-auto animate-content-one px-4 mt-10">
          <p className="text-center text-sm leading-relaxed">
            Now, as we stand on the brink of forever, we are filled with so much
            joy for the future. We can't wait to continue building our lives
            together as husband and wife, surrounded by the people who mean the
            most to us.
          </p>
        </div>
      </div>
    </div>
  );
}
