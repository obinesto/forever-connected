import { Link } from "react-router-dom";
import { motion as Motion} from "framer-motion";
import { FaUsers, FaEnvelopeOpenText } from "react-icons/fa";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";
import bridesmaid1 from "/wedding-party/Oreoluwa.jpg";
import groomsman1 from "/wedding-party/Adeyemi.jpg";
import bridesmaid2 from "/wedding-party/Freda.jpg";
import groomsman2 from "/wedding-party/Samuel.jpg";

const partyImages = [
  { src: groomsman1, alt: "Groomsman" },
  { src: bridesmaid1, alt: "Bridesmaid" },
  { src: groomsman2, alt: "Groomsman" },
  { src: bridesmaid2, alt: "Bridesmaid" },
];

export default function ContentFour() {
  const [animation] = useScrollFadeIn();

  return (
    <Motion.div
      {...animation}
      className="w-full min-h-[80vh] py-16 md:py-24 bg-amber-50 flex items-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* Wedding Party Section */}
        <Motion.div
          variants={animation.variants}
          className="text-center flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl transition-transform duration-300 hover:-translate-y-2"
        >
          <FaUsers className="text-5xl text-emerald-800 mb-4" />
          <h2 className="text-4xl font-allura text-emerald-800">
            Meet Our Wedding Party
          </h2>
          <p className="mt-2 text-gray-600 font-cormorant max-w-md">
            We're so grateful to have these amazing people standing by our side.
            Get to know our bridesmaids and groomsmen!
          </p>
          <div className="flex justify-center -space-x-4 mt-6">
            {partyImages.map((image, index) => (
              <img
                key={index}
                className="size-16 rounded-full border-2 border-white object-cover object-top shadow-md transition-transform hover:scale-110"
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
          <Link
            to="/wedding-party"
            className="mt-8 text-emerald-800 uppercase tracking-wider font-semibold text-sm border-b-2 border-amber-400 hover:text-amber-400 transition-colors duration-300"
          >
            Meet Them All
          </Link>
        </Motion.div>

        {/* RSVP Section */}
        <Motion.div
          variants={animation.variants}
          className="text-center flex flex-col items-center p-8 bg-emerald-800 text-white rounded-2xl shadow-xl transition-transform duration-300 hover:-translate-y-2"
        >
          <FaEnvelopeOpenText className="text-5xl text-amber-300 mb-4" />
          <h2 className="text-4xl font-allura text-amber-300">
            Will You Be There?
          </h2>
          <p className="mt-2 font-cormorant max-w-md">
            Your presence at our wedding is the greatest gift of all. Please let
            us know if you can celebrate with us by October 31st, 2025.
          </p>
          <Link
            to="/schedule#rsvp"
            className="mt-8 bg-white text-emerald-800 font-bold py-3 px-10 rounded-full hover:bg-amber-300 hover:text-emerald-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            RSVP Now
          </Link>
        </Motion.div>
      </div>
    </Motion.div>
  );
}