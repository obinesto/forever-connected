import { useRef } from "react";
import flower from "/flower-bg-3.jpg";
import { RiHeartsLine } from "react-icons/ri";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";

export default function ContentOne({ img2Prop }) {
  const contentOneRef = useRef(null);

  useScrollFadeIn(contentOneRef, ".animate-content-one");

  return (
    <div ref={contentOneRef} className="w-full h-screen mt-20 bg-amber-50 py-4">
      <div className="px-2 h-[10%] animate-content-one">
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
      <div className="relative grid h-[90%] w-[80%] m-auto ">
        <div className="absolute top-0 right-0 h-full w-76 flex flex-col justify-between py-2 animate-content-one">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut non,
            cum officiis quasi inventore numquam nesciunt nulla quibusdam sed
            vitae eos alias architecto quo natus officia cumque perspiciatis
            nihil possimus?
          </p>
          <img
            src={flower}
            alt="flower image"
            className="h-60 object-cover rounded-md"
          />
        </div>
        <div className="absolute left-0 bottom-0 h-full w-76 flex flex-col justify-between py-2 animate-content-one">
          <img
            src={flower}
            alt="flower image"
            className="h-60 object-cover rounded-md"
          />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            incidunt nihil hic facere earum dolorum sint quam, quia dicta libero
            enim, blanditiis eius! Laborum doloremque sed quasi excepturi animi
            quo?
          </p>
        </div>

        <div className="size-80 relative m-auto rounded-full circle-glow animate-content-one">
          <img
            src={img2Prop}
            alt="pre-wedding shot 2"
            className="object-cover rounded-full size-full hover:scale-110 transition-transform duration-500 ease-in-out"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
