import { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-80px", threshold });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return { ref, controls, variants };
}
