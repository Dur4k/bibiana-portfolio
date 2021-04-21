import React from "react";
import avatar from "../avatar/this.jpeg";
import "../sass/header.scss";
import { ReactComponent as Instagram } from "../svg/facebook-square-brands.svg";
import { ReactComponent as Linkedin } from "../svg/linkedin-brands.svg";
import { ReactComponent as Whatsupp } from "../svg/whatsapp-square-brands.svg";
import { motion } from "framer-motion";

const Header = () => {
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
  const social = {
    hidden: {
      x: 300,
    },
    visible: {
      x: 0,
      transition: {
        duration: 1.3,
        type: "spring",
      },
    },
    hover: {
      scale: 1.3,
    },
  };

  const slidefromrights = {
    fromRight: {
      x: "100vw",
    },
    toCenter: {
      x: 0,
      // transition: {
      //   duration: 1,
      //   type: "spring",
      // },
    },
  };

  return (
    <div className="h">
      <motion.div variants={fadeImg} initial="hidden" animate="visible" className="img">
        <img src={avatar} />
      </motion.div>
      <div className="name-div">
        <motion.div
          variants={slidefromrights}
          initial="fromRight"
          animate="toCenter"
          transition={{
            duration: 1,
            type: "spring",
          }}
          className="name"
        >
          <h1>Bibiana Dianiskova</h1>
        </motion.div>
        <div className="work-desc">
          <motion.p
            initial="fromRight"
            animate="toCenter"
            transition={{
              duration: 1.1,
              type: "spring",
            }}
            variants={slidefromrights}
          >
            Marketing graduate passionate about Beauty Industry
          </motion.p>
        </div>

        <div className="bott">
          <div className="social">
            <motion.a
              variants={social}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              href="https://www.linkedin.com/in/bibiana-dianiskova-9ba920141/"
              target="_blank"
              className="ln"
            >
              <Linkedin />
            </motion.a>
            <motion.a
              variants={social}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fboobsbrainsandbeauty%2F%3Ffbclid%3DIwAR39nkzJkeYDvgUuPuBDk3lPZhTMQOQ6tV2Vwx78jN-8q7wbJ-ghgTXznIg&h=AT0bcGU6Eo_cG4Kc7EW4m6F37wfU1wOTR7D-sho3GqTSU9qGSoIaTc2rGlWHtWhBkOLbznInwvNSXzrtHHPP97fAW9TwIufu5QOopMHk4SyHf9Qk-ca95vznyJqTw4nL_5U4vdW8FlI"
              target="_blank"
              className="fb"
            >
              <Instagram />
            </motion.a>
            <motion.a
              variants={social}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              href="https://api.whatsapp.com/send?phone=07874161760"
              target="_blank"
              className="wht"
            >
              <Whatsupp />
            </motion.a>
          </div>
          <div className="location">
            <motion.p
              transition={{
                duration: 1.3,
                type: "spring",
              }}
              variants={slidefromrights}
              initial="fromRight"
              animate="toCenter"
            >
              London Uk
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
