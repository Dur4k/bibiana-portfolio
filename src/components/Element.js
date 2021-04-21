import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
const Element = ({ pic, main, text, link }) => {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);
  return (
    <motion.div
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeInOut" },
        },
        hidden: { opacity: 0, y: 92 },
      }}
      className="grid2"
    >
      <a href={link} target="_blank" className="picc">
        <img src={pic} alt="" />
      </a>
      <div className="main-text">
        <h2>{main}</h2>
      </div>
      <div className="txt-grid">{text}</div>
    </motion.div>
  );
};

export default Element;
