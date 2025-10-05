import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollFadeIn = (
  triggerRef,
  animationClass,
  options,
) => {
  useEffect(() => {
    // Using gsap.context() for proper cleanup
    const ctx = gsap.context(() => {
      if (!triggerRef.current) return;

      gsap.from(animationClass, {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 90%",
          end: "bottom 30%",
          toggleActions: "play none none none",
          scrub: 1,
          fastScrollEnd: true,
          markers: false,
          ...options,
        },
      });
    }, triggerRef); // scope animations to the component

    return () => ctx.revert(); // cleanup
  }, [triggerRef, animationClass, options]);
};
