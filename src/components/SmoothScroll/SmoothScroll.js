import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother.js";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const SmoothScroll = ({ children }) => {
  const location = useLocation();
  let test;

  useEffect(() => {
    setTimeout(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      test = ScrollSmoother.create({
        smooth: 1.8,
        effects: true,
        smoothTouch: 0.1,
      });
    }, 50);

    return () => {
      if (test) {
        test.scrollTo(0, true);
      }
    };
  }, [location]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default SmoothScroll;
