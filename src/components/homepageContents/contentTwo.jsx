import { motion as Motion} from "framer-motion";
import { Link } from "react-router-dom";
import { RiHotelLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";

export default function ContentTwo({ img5Prop }) {
  const [animation] = useScrollFadeIn({
    threshold: 0.2,
  });

  return (
    <Motion.div
      {...animation}
      className="w-full min-h-screen py-10 flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-between px-4 overflow-x-hidden"
    >
      {/* snip frame */}
      <Motion.figure
        variants={animation.variants}
        className="w-full md:w-[40%] font-cormorant relative overflow-hidden m-2.5 bg-white text-center shadow-lg"
      >
        <img
          src={img5Prop}
          alt="pre-wedding shot 5"
          className="object-cover w-full max-w-[85%] mx-auto my-6 md:my-10 relative border-3 border-amber-400 p-4 pb-[25%]"
        />
        <figcaption className="absolute left-0 right-0 bottom-20 h-16 bg-white">
          <h3 className="text-emerald-800 text-[1.7em] w-full py-[5px] px-3 m-0 uppercase font-normal">
            Forever <span className="font-extrabold">Connected</span>
          </h3>
          <h4 className="m-0 uppercase tracking-tighter text-[1.1em]">
            <span className="text-amber-400">F</span>
            <span className="text-emerald-800">&</span>
            <span className="text-amber-400">C</span>
          </h4>
        </figcaption>
      </Motion.figure>
      <div className="w-full md:w-[55%] flex flex-col items-center">
        <Motion.div
          variants={animation.variants}
          className="w-full flex flex-col items-center "
        >
          <div className="md:w-[80%] text-center camera-shot-border hover:scale-110 transition-transform duration-500 ease-in-out">
            <h1 className="font-bold text-2xl md:text-4xl">
              We Anticpate your Presence
            </h1>
            <p className="flex items-center justify-center text-lg font-cormorant text-emerald-800 gap-2">
              <IoLocationOutline />
              Delta, Nigeria
            </p>
          </div>
        </Motion.div>
        {/* reception card */}
        <Motion.div
          variants={animation.variants}
          className="flex flex-col items-center"
        >
          <div className="mt-12 border-t-1 border-t-gray-50 p-4 md:p-8 bg-white rounded-lg shadow-xl w-full md:w-[80%] min-h-[300px] text-center flex flex-col justify-center transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="flex items-center justify-center gap-2">
              <RiHotelLine className="text-emerald-800" size={28} />
              <h2 className="text-2xl font-bold text-emerald-800">
                Wedding Reception
              </h2>
            </div>
            <p className="mt-4 text-gray-600">
              Celebrate with us during our Wedding Reception as we begin our
              journey together.
            </p>
            <p className="mt-6 font-semibold text-amber-400 text-lg">
              November 8, 2025
            </p>
            <div className="flex items-center justify-center gap-2 mt-2 text-gray-700">
              <IoLocationOutline />
              <p>Delta State, Nigeria</p>
            </div>
          </div>
        </Motion.div>
        {/* Buttons */}
        <Motion.div
          variants={animation.variants}
          className="mt-12 flex flex-col md:flex-row gap-4 md:gap-8"
        >
          <div className="flex gap-4 md:gap-8">
            <Link
              to="/story"
              className="text-emerald-800 p-2 md:py-2 md:px-8 border-emerald-800 border-1 rounded-md hover:text-amber-400 hover:border-amber-400 transition-colors duration-300 text-center"
            >
              LOVE STORY
            </Link>
            <Link
              to="/story#photo-gallery"
              className="text-emerald-800 p-2 md:py-2 md:px-8 border-emerald-800 border-1 rounded-md hover:text-amber-400 hover:border-amber-400 transition-colors duration-300 text-center"
            >
              OUR MOMENTS
            </Link>
          </div>
          <Link
            to="/wedding-party"
            className="text-emerald-800 p-2 md:py-2 md:px-8 border-emerald-800 border-1 rounded-md hover:text-amber-400 hover:border-amber-400 transition-colors duration-300 text-center"
          >
            WEDDING PARTY
          </Link>
        </Motion.div>
      </div>
    </Motion.div>
  );
}
