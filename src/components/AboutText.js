import React from "react";
import "../sass/text.scss";
import { motion } from "framer-motion";

const AboutText = () => {
  const fadeImg = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.9,
        type: "Magic",
      },
    },
  };
  return (
    <motion.div variants={fadeImg} initial="hidden" animate="visible" className="txt">
      <p>
        I am a hard-working individual passionate about the beauty and wellness industry. I am fully aware of the beauty industry landscape including
        trends, brands, influencers, journalists and founders within it.
      </p>
      <br />
      <p>I have a first-class Bachelor’s degree in Marketing from Middlesex University London.</p>
      <p>
        I have been committed to working within beauty and wellness industry. My prior experiences include working on a business development of a
        startup cosmetics company and also marketing and customer relations role for a wellness company.
      </p>
      <br />
      <p>I am also a beauty and lifestyle contributor editor at KeiSei Magazine. </p>
      <br />
      <p>
        For any inquires please email me at: <a href="mailto:bibiana.dianiskova@gmail.com">bibiana.dianiskova@gmail.com</a>
      </p>
    </motion.div>
  );
};

export default AboutText;
