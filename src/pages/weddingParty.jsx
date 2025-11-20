import { useState } from "react";
import Slider from "react-slick";
import { IoClose } from "react-icons/io5";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion as Motion } from "framer-motion";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";
import Header from "../components/header";
import weddingPartyBg from "/header-backgrounds/wedding-party-bg.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bridesmaids = [
  {
    name: "Oreoluwa",
    funFact: "One gecko sighting, and I’m ‘relocating’ immediately ",
    wish: "I pray that Christ remains the anchor of their home.",
    role: "Maid of honour",
    picture: "/wedding-party/Oreoluwa.jpg",
    status: "single",
  },
  {
    name: "Freda",
    funFact: "I love to dance",
    wish: "I pray God answers all their heart desires in abundance. I pray my Cynthia is happy always and her husband too. I pray their light never dims, Amen.",
    role: "bridesmaid",
    picture: "/wedding-party/Freda.jpg",
    status: "single",
  },
  {
    name: "Francisca",
    funFact: "I love to have fun and try new cuisines",
    wish: "I pray that God will bless their marriage and always give them joy, happiness and ways to renew their love for each other",
    role: "bridesmaid",
    picture: "/wedding-party/Francisca.jpg",
    status: "single",
  },
  {
    name: "Chidinma",
    funFact: "I love to watch movies",
    wish: "I pray that God bless and guide them as they begin this journey. May he grant them all their heart's desires",
    role: "bridesmaid",
    picture: "/wedding-party/Chidinma.jpg",
    status: "single",
  },
  {
    name: "Osarieme",
    funFact: "I play drums",
    wish: "All of the blessings and joy of marital bliss",
    role: "bridesmaid",
    picture: "/wedding-party/Osarieme.jpg",
    status: "single",
  },
  {
    name: "Onyinyechi",
    funFact: "I sometimes find horror 💀 movies funny",
    wish: "That this union the Lord has made will forever be in good health and love, blessed with cute babies and a home filled with laughter and only tears of joy",
    role: "bridesmaid",
    picture: "/wedding-party/Oyinyechi.jpg",
    status: "single",
  },
  {
    name: "Blessing",
    funFact: "I love movies",
    wish: "I wish them a marriage that is filled with joy laughter and happiness",
    role: "bridesmaid",
    picture: "/wedding-party/Blessing.jpg",
    status: "single",
  },
  {
    name: "Elizabeth",
    funFact: "I'm 5'9",
    wish: "Endless love and a beautiful marriage",
    role: "bridesmaid",
    picture: "/wedding-party/Elizabeth.jpg",
    status: "single",
  },
];

const groomsmen = [
  {
    name: "Adeyemi",
    funFact: "I can't use a laptop without a mouse",
    wish: "I wish you a blessed home, fruitful on every side",
    role: "best man",
    picture: "/wedding-party/Adeyemi.jpg",
    status: "married",
  },
  {
    name: "Samuel",
    funFact: "",
    wish: "Eternal love",
    role: "groomsman",
    picture: "/wedding-party/Samuel.jpg",
    status: "single",
  },
  {
    name: "Ayobami",
    funFact: "I am an Arsenal fan",
    wish: "I wish Franklin and Cynthia a blissful married life and a lifetime of love and happiness",
    role: "groomsman",
    picture: "/wedding-party/Ayobami.jpg",
    status: "single",
  },
  {
    name: "Abiodun",
    funFact: "",
    wish: "I wish you a long life of happiness, good health and wealth together.",
    role: "groomsman",
    picture: "/wedding-party/Abiodun.jpg",
    status: "single",
  },
  {
    name: "Charles",
    funFact: "I can't dance to save myself 😭",
    wish: "Dear Franklin and Cynthia,\nAs you become one, I wish you a lifetime of love, laughter, and endless adventures together. May your marriage be filled with joy, mutual respect and the kind of love that grows stronger every day. Here’s to dancing through life as the perfect team!",
    role: "groomsman",
    picture: "/wedding-party/Charles.jpg",
    status: "single",
  },
  {
    name: "Olalere",
    funFact: "I am an athlete",
    wish: "A blissful marriage",
    role: "groomsman",
    picture: "/wedding-party/Olalere.jpg",
    status: "single",
  },
];

const PartyMemberCard = ({ member, onOpenModal }) => (
  <div className="w-full transition-transform duration-300 hover:-translate-y-2">
    {/* Desktop Card */}
    <div className="hidden md:block h-130 bg-white p-4 rounded-lg shadow-lg text-center font-cormorant">
      <div className="bg-gray-100 h-80 p-4 rounded-md polaroid-frame">
        <img
          src={member.picture}
          alt={member.name}
          className="w-full h-[80%] object-cover object-top rounded-sm"
          loading="lazy"
        />
        <h3 className="mt-2 text-2xl font-bold text-emerald-800">
          {member.name}
        </h3>
        <p className="text-sm text-gray-500 capitalize">{member.role}</p>
      </div>
      <div className="mt-4 h-40 flex flex-col justify-around text-left px-2">
        <p className="text-gray-700 text-sm">
          <span className="font-bold text-emerald-800 italic">Fun Fact:</span>{" "}
          {member.funFact.trim() !== "" ? member.funFact : "💁‍♂️"}
        </p>
        <div className="mt-2 text-gray-700 text-sm overflow-y-scroll">
          <p className="font-bold text-emerald-800">
            Best wishes for the couple:
          </p>
          <blockquote className="relative mt-1 p-2 border-l-2 border-amber-300">
            <FaQuoteLeft className="absolute -top-1 -left-4 text-amber-300 text-xs" />
            <p className="italic">{member.wish}</p>
            <FaQuoteRight className="absolute -bottom-1 right-2 text-amber-300 text-xs" />
          </blockquote>
        </div>
      </div>
    </div>

    {/* Mobile Card */}
    <div className="md:hidden bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4">
      <img
        src={member.picture}
        alt={member.name}
        className="w-32 h-32 object-cover object-top rounded-full border-4 border-amber-300"
        loading="lazy"
      />
      <h3 className="mt-4 text-xl font-bold text-emerald-800 font-cormorant">
        {member.name}
      </h3>
      <p className="text-xs text-gray-500 capitalize">{member.role}</p>
      <p className="mt-2 text-center text-sm text-gray-600 h-10 overflow-hidden">
        {member.wish}
      </p>
      <button
        onClick={onOpenModal}
        className="mt-3 text-sm font-semibold text-emerald-800 border-b-2 border-amber-400 hover:text-amber-400 transition-colors"
      >
        View Details
      </button>
    </div>
  </div>
);

const PartyModal = ({ isOpen, onClose, members, startIndex }) => {
  if (!isOpen) return null;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: startIndex,
    arrows: false,
  };

  return (
    <div
      className="fixed inset-0 bg-gradient-to-t from-amber-50/30 to-emerald-900/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-amber-50 rounded-2xl shadow-2xl px-4 py-8 m-4 max-w-lg w-full relative transform transition-all duration-300 scale-95"
        onClick={(e) => e.stopPropagation()}
        style={{ transform: "scale(1)" }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 z-10"
          aria-label="Close modal"
        >
          <IoClose size={28} />
        </button>
        <Slider {...sliderSettings}>
          {members.map((member, index) => (
            <div key={index} className="px-2 pb-8">
              <div className="flex flex-col items-center text-center pt-8">
                <img
                  src={member.picture}
                  alt={member.name}
                  className="w-40 h-40 object-cover object-top rounded-full border-4 border-amber-300 shadow-lg"
                />
                <h3 className="mt-4 text-3xl font-cormorant font-bold text-emerald-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 capitalize">
                  {member.role}
                </p>
                <div className="mt-6 text-left w-full px-4">
                  <p className="text-gray-700">
                    <span className="font-bold text-emerald-800 italic">
                      Fun Fact:
                    </span>{" "}
                    {member.funFact.trim() !== "" ? member.funFact : "💁‍♂️"}
                  </p>
                  <div className="mt-4 text-gray-700">
                    <p className="font-bold text-emerald-800">
                      Best wishes for the couple:
                    </p>
                    <blockquote className="relative mt-1 pl-4 border-l-2 border-amber-300">
                      <FaQuoteLeft className="absolute -top-1 -left-6 text-amber-300 text-xs" />
                      <p className="italic">{member.wish}</p>
                      <FaQuoteRight className="absolute -bottom-1 right-0 text-amber-300 text-xs" />
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default function WeddingParty() {
  const [bridalAnimation] = useScrollFadeIn();
  const [groomAnimation] = useScrollFadeIn();
  
  const [modalState, setModalState] = useState({
    isOpen: false,
    members: [],
    startIndex: 0,
  });

  const openModal = (members, startIndex) => {
    setModalState({ isOpen: true, members, startIndex });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, members: [], startIndex: 0 });
  };

  return (
    <div className="pt-[60px] bg-amber-50 text-emerald-900">
      {/* Header */}
      <Header
        backgroundImage={weddingPartyBg}
        headerText={"Wedding Party"}
        headerParagraph={" Meet the amazing people standing by our side."}
      />
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col gap-16 md:gap-8">
          {/* Bridesmaids Section */}
          <Motion.section {...bridalAnimation} className="w-full">
            <h2 className="text-4xl md:text-5xl text-center font-allura text-emerald-800 mb-6">
              Bridal Party
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
              {bridesmaids.map((member, index) => (
                <Motion.div variants={bridalAnimation.variants} key={index}>
                  <PartyMemberCard
                    member={member}
                    onOpenModal={() => openModal(bridesmaids, index)}
                  />
                </Motion.div>
              ))}
            </div>
          </Motion.section>

          {/* Groomsmen Section */}
          <Motion.section {...groomAnimation} className="w-full mt-12">
            <h2 className="text-4xl md:text-5xl text-center font-allura text-emerald-800 mb-6">
              Groom's Party
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
              {groomsmen.map((member, index) => (
                <Motion.div variants={groomAnimation.variants} key={index}>
                  <PartyMemberCard
                    member={member}
                    onOpenModal={() => openModal(groomsmen, index)}
                  />
                </Motion.div>
              ))}
            </div>
          </Motion.section>
        </div>
      </main>

      <PartyModal {...modalState} onClose={closeModal} />
    </div>
  );
}
