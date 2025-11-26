import { useState } from "react";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";
import { motion as Motion} from "framer-motion";
import { FaRegCopy, FaRegCreditCard } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import Header from "../components/header";
import giftHeaderBg from "/header-backgrounds/golden-gift-bg.jpg";

const giftOptions = [
  {
    type: "cash",
    picture: "/wedding-gifts/cash-gift.avif",
    paymentMethod: "cash",
    amount: "As Desired",
  },
  {
    type: "honeymoon pocket",
    picture: "/wedding-gifts/honeymoon-pocket-gift.avif",
    paymentMethod: "cash",
    amount: "As Desired",
  },
  {
    type: "gas cooker",
    picture: "/wedding-gifts/Gas-Cooker.jpg",
    paymentMethod: "cash",
    amount: "158000",
  },
  {
    type: "deep freezer",
    picture: "/wedding-gifts/Chest-Freezer.jpg",
    paymentMethod: "cash",
    amount: "400200",
  },
  {
    type: "pots set",
    picture: "/wedding-gifts/Sets-of-Pots.jpg",
    paymentMethod: "cash",
    amount: "42000",
  },
  {
    type: "cultlery set",
    picture: "/wedding-gifts/Cultlery-Set.jpg",
    paymentMethod: "cash",
    amount: "21000",
  },
  {
    type: "pressure pot",
    picture: "/wedding-gifts/Pressure-Pot.jpg",
    paymentMethod: "cash",
    amount: "53000",
  },
  {
    type: "toaster",
    picture: "/wedding-gifts/Toaster.jpg",
    paymentMethod: "cash",
    amount: "31800",
  },
  {
    type: "microwave",
    picture: "/wedding-gifts/Microwave.jpg",
    paymentMethod: "cash",
    amount: "48000",
  },
  {
    type: "juicer",
    picture: "/wedding-gifts/Juicer.jpg",
    paymentMethod: "cash",
    amount: "53000",
  },
  {
    type: "buchymix blender",
    picture: "/wedding-gifts/Buchymix-Blender.jpg",
    paymentMethod: "cash",
    amount: "475000",
  },
  {
    type: "yam pounder",
    picture: "/wedding-gifts/Yam-Pounder.jpg",
    paymentMethod: "cash",
    amount: "40000",
  },
  {
    type: "choppers",
    picture: "/wedding-gifts/Choppers.jpg",
    paymentMethod: "cash",
    amount: "25000",
  },
  {
    type: "rice boiler",
    picture: "/wedding-gifts/Rice-boiler.jpg",
    paymentMethod: "cash",
    amount: "38000",
  },
  {
    type: "deep fryer",
    picture: "/wedding-gifts/Deep-Fryer.jpg",
    paymentMethod: "cash",
    amount: "48000",
  },
  {
    type: "table cooker",
    picture: "/wedding-gifts/Table-Cooker.jpg",
    paymentMethod: "cash",
    amount: "58000",
  },
];

export default function Gift() {
  const [copyStatus, setCopyStatus] = useState("Copy");
  const [introAnimation] = useScrollFadeIn();
  const [giftsAnimation] = useScrollFadeIn();

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus("Copy"), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="pt-[60px] bg-amber-50 text-emerald-900">
      {/* Header */}
      <Header
        backgroundImage={giftHeaderBg}
        headerText={"Gift Registry"}
        headerParagraph={"Your presence is the greatest gift"}
      />
      {/* Intro & Bank Details */}
      <Motion.section {...introAnimation} className="container mx-auto px-2 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl p-4 md:p-8 transition-transform hover:-translate-y-2 duration-500">
          <div className="text-center">
            <p className="text-lg text-gray-800 leading-relaxed ">
              We would be honored to have you with us on our special day - your
              presence is a present! If you wish to give us something more,
              there is a wish-list below to help you out. You can send it in
              form of a cash gift to the account below so we can make the
              purchase. <br />
              Don't forget to include a description of the gift you are getting
              for us. <br />
              See details below:
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-8 bg-emerald-200/20 p-6 rounded-lg shadow-inner text-left font-cormorant">
            <div className="space-y-4">
              <div className="flex sm:items-baseline">
                <span className="w-28 font-semibold text-gray-600">
                  Beneficiary:
                </span>
                <span className="font-cormorant text-xl font-bold text-emerald-800">
                  Cynthia Nwaokocha
                </span>
              </div>
              <div className="flex sm:items-baseline">
                <span className="w-28 font-semibold text-gray-600">Bank:</span>
                <span className="text-lg font-bold text-emerald-800">
                  GTBank
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex gap-0 items-center">
                  <span className="w-28 font-semibold text-gray-600">A/C:</span>
                  <span className="text-2xl font-mono text-emerald-800 tracking-wider">
                    0709945500
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard("0709945500")}
                  className="mt-2 sm:mt-0 sm:ml-4 flex items-center gap-2 text-amber-500 hover:text-amber-600 transition-colors"
                  aria-label="Copy account number"
                >
                  <FaRegCopy />
                  <span
                    className={`text-sm font-semibold ${
                      copyStatus === "Copied!" ? "text-emerald-600" : ""
                    }`}
                  >
                    {copyStatus}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Motion.section>

      {/* Gift List */}
      <Motion.main {...giftsAnimation} className="bg-white py-16 md:py-24">
        <div className="flex items-center justify-center gap-4 p-4 md:p-6">
          <FaGift className="text-4xl md:text-6xl" />
          <p className="text-3xl md:text-4xl font-allura text-center ">
            Explore Gift Options
          </p>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-12">
            {giftOptions.map((gift, index) => (
              <div
                key={index}
                className="rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <img
                  src={gift.picture}
                  alt={gift.type}
                  className="w-full h-32 md:h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="py-2 sm:p-3 md:p-6 text-center bg-emerald-800 text-amber-400">
                  <h3 className="text-xl font-cormorant font-bold capitalize">
                    {gift.type}
                  </h3>
                  <div className="mt-2 flex items-center justify-center gap-2 ">
                    <FaRegCreditCard className="text-amber-500" />
                    <p>
                      {gift.paymentMethod === "cash" &&
                      gift.amount.toLowerCase() !== "as desired"
                        ? "₦"
                        : ""}
                      {gift.amount.toLowerCase() !== "as desired"
                        ? Number(gift.amount).toLocaleString()
                        : gift.amount}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Motion.main>
    </div>
  );
}
