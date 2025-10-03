import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollFadeIn = (
  triggerRef,
  animationClass,
  options = {}
) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(animationClass, {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scrub: 1,
          fastScrollEnd: true,
          markers: false,
          ...options,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, [triggerRef, animationClass, options]);
};
