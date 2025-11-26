import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScrollFadeIn = (direction, options = {}, transitionOptions = {}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    ...options,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  let x = 0;
  let y = 0;

  if (direction === "left") {
    x = -100;
  } else if (direction === "right") {
    x = 100;
  } else {
    y = 100;
  }

  const animation = {
    ref,
    initial: "hidden",
    animate: controls,
    variants: {
      hidden: { opacity: 0, x, y },
      visible: () => ({
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          staggerChildren: 0.6,
          delayChildren: 0.6,
          duration: 1.2,
          ease: "easeOut",
          ...transitionOptions
        },
      }),
    },
  };
  return [animation];
};
