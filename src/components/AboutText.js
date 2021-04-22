import React from "react";
import "../sass/text.scss";
import { motion } from "framer-motion";

const AboutText = () => {
  const bee = {
    animationTwo: {
      x: [-700, -900, -43],
      y: [-700, -630, -230, -28],
      // rotateX: [45, 20, 5, 45],
      rotateZ: [-200, -100, 50, 298],
      transition: { delay: 3, duration: 4 },
    },
  };
  const flower = {
    hidden: {
      opacity: 1,
      pathLength: 1,
      rotate: 360,
      transition: { rotate: 360 },
    },
    visible: {
      opacity: 0,
      pathLength: 1,
      rotate: 360,
      transition: { rotate: 360 },
    },
  };
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.5,
        type: "spring",
        bounce: 0.25,
      },
    },
  };
  const fadeImg = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 2.9,
        type: "Magic",
      },
    },
  };
  return (
    <>
      <motion.div variants={fadeImg} initial="hidden" animate="visible" className="txt">
        <p>
          I am a hard-working individual passionate about the beauty and wellness industry. I am fully aware of the beauty industry landscape
          including trends, brands, influencers, journalists and founders within it.
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

        <motion.svg
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 65.703 65.703"
          style={{ enableBackground: "new 0 0 65.703 65.703" }}
          xmlSpace="preserve"
          className="flower1"
        >
          <g>
            <motion.path
              variants={flower}
              style={{ fill: "#31BD4C" }}
              d="M31.519,43.85c2.056,2.055,2.882,4.559,1.848,5.594c-1.035,1.034-3.54,0.208-5.596-1.848
		c-2.054-2.053-3.087-6.835-3.087-6.835S29.464,41.795,31.519,43.85z"
            />
            <motion.path
              variants={flower}
              style={{ fill: "#31BD4C" }}
              d="M35.704,43.85c-2.056,2.055-2.882,4.559-1.847,5.594c1.036,1.034,3.54,0.208,5.595-1.848
		c2.054-2.053,3.087-6.835,3.087-6.835S37.758,41.795,35.704,43.85z"
            />
            <motion.path
              variants={flower}
              style={{ fill: "#CADC2E" }}
              d="M34.799,24.35c0-0.649-0.747-1.646-1.333-1.646h-0.219c-0.585,0-2.448,0.997-2.448,1.646v40.485
		c0,0.649,1.863,0.868,2.448,0.868h0.219c0.585,0,1.333-0.219,1.333-0.868V24.35z"
            />
            <motion.g>
              <g>
                <motion.circle variants={flower} style={{ fill: "#FF5A58" }} cx="33.38" cy="5.665" r="5.666" />
                <motion.circle variants={flower} style={{ fill: "#FF5A58" }} cx="40.402" cy="9.561" r="5.666" />
                <motion.circle variants={flower} style={{ fill: "#FF5A58" }} cx="41.28" cy="17.544" r="5.665" />
                <motion.circle variants={flower} style={{ fill: "#FF5A58" }} cx="35.272" cy="22.873" r="5.665" />
                <motion.circle variants={flower} style={{ fill: "#FF5A58" }} cx="27.45" cy="21.048" r="5.666" />
                <motion.circle variants={flower} style={{ fill: "#FF5A58" }} cx="24.421" cy="13.61" r="5.664" />
                <motion.path
                  variants={flower}
                  style={{ fill: "#FF5A58" }}
                  d="M33.557,3.855c1.647,2.661,0.828,6.153-1.831,7.801c-2.662,1.649-6.152,0.828-7.801-1.833
				c-1.647-2.657-0.828-6.15,1.831-7.798C28.416,0.377,31.908,1.196,33.557,3.855z"
                />
              </g>
              <motion.circle variants={flower} style={{ fill: "#F6F0E8" }} cx="32.832" cy="14.27" r="4.935" />
            </motion.g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </motion.svg>
        <motion.svg
          variants={bee}
          animate="animationTwo"
          initial="animationOne"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style={{ enableBackground: "new 0 0 512 512" }}
          xmlSpace="preserve"
          className="bee1"
        >
          <g>
            <path
              style={{ fill: "#242424" }}
              d="M293.648,161.884c-5.204,0-9.416-4.212-9.416-9.412c0-35.36,14.08-56.472,37.648-56.472
        c5.208,0,9.416,4.208,9.416,9.412c0,5.2-4.208,9.412-9.416,9.412c-16.984,0-18.824,26.324-18.824,37.648
        C303.06,157.672,298.852,161.884,293.648,161.884z"
            />
            <path
              style={{ fill: "#242424" }}
              d="M218.356,161.884c-5.204,0-9.416-4.212-9.416-9.412c0-11.324-1.836-37.648-18.824-37.648
        c-5.204,0-9.416-4.212-9.416-9.412c0-5.204,4.212-9.412,9.416-9.412c23.58,0,37.648,21.112,37.648,56.472
        C227.764,157.672,223.556,161.884,218.356,161.884z"
            />
          </g>
          <path
            style={{ fill: "#FFD464" }}
            d="M256,416c-33.244,0-65.884-32.628-65.884-65.884L256,208.94l65.884,141.176
      C321.884,383.372,289.252,416,256,416z"
          />
          <path
            style={{ fill: "#F2C95F" }}
            d="M256,208.94l-8.94,19.16L304,350.116c0,30.252-27.028,59.912-56.94,65.024
      c2.964,0.504,5.944,0.856,8.94,0.856c33.252,0,65.884-32.628,65.884-65.888L256,208.94z"
          />
          <g>
            <polygon style={{ fill: "#242424" }} points="212.076,303.064 299.924,303.064 291.136,284.236 220.864,284.236 	" />
            <polygon style={{ fill: "#242424" }} points="198.908,331.296 313.096,331.296 304.32,312.472 207.684,312.472 	" />
            <path
              style={{ fill: "#242424" }}
              d="M190.116,350.116c0,3.164,0.38,6.296,0.932,9.412h129.896c0.564-3.112,0.932-6.252,0.932-9.412
        l-4.396-9.416H194.508L190.116,350.116z"
            />
            <path
              style={{ fill: "#242424" }}
              d="M203.888,387.764H308.12c4.416-5.792,7.996-12.144,10.38-18.828H193.516
        C195.892,375.624,199.476,381.976,203.888,387.764z"
            />
          </g>
          <path
            style={{ fill: "#263740" }}
            d="M303.06,208.94c-5.204,0-88.916,0-94.112,0c-5.204,0-9.416-4.212-9.416-9.412
      c0-18.62,0-75.296,56.468-75.296c56.472,0,56.472,56.672,56.472,75.296C312.472,204.732,308.26,208.94,303.06,208.94z"
          />
          <path
            style={{ fill: "#1E2C33" }}
            d="M256,124.236c-2.472,0-4.796,0.144-7.06,0.356c47.044,5.988,47.06,57.18,47.06,74.704
      c0,5.2-4.212,9.412-9.416,9.412c-3.992,0-54.184,0-79.688,0c0.66,0.144,1.336,0.236,2.044,0.236c5.204,0,88.916,0,94.112,0
      c5.204,0,9.416-4.212,9.416-9.412C312.472,180.908,312.472,124.236,256,124.236z"
          />
          ////////////////////////////////wing
          <path
            style={{ fill: "#FFC066" }}
            d="M256,170.912c-54.892,0-112.94,91.808-112.94,141.172C143.06,346.78,169.256,360,192,360
      c36.224,0,53.952-45.244,64-92c10.048,46.756,27.776,92,64,92c22.752,0,48.94-13.212,48.94-47.916
      C368.94,262.72,310.892,170.912,256,170.912z"
          />
          <path
            style={{ fill: "#242424" }}
            d="M212.388,397.176C224.492,408.536,240.156,416,256,416c15.848,0,31.508-7.464,43.612-18.824H212.388z
      "
          />
          <path
            style={{ fill: "#E6AD5C" }}
            d="M180.428,358.812c3.864,0.78,7.76,1.188,11.572,1.188c36.224,0,53.952-45.244,64-92
      C244.564,294.692,210.724,348.772,180.428,358.812z"
          />
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </motion.svg>
      </motion.div>
    </>
  );
};

export default AboutText;
