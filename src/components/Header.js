import React from "react";
import avatar from "../avatar/this.jpeg";
// import fb1 from "../svg/facebook-square-brands.svg";
// import linkedin1 from "../svg/linkedin-in-brands.svg";
import "../sass/header.scss";
import { ReactComponent as Instagram } from "../svg/facebook-square-brands.svg";
import { ReactComponent as Linkedin } from "../svg/linkedin-brands.svg";
import { ReactComponent as Whatsupp } from "../svg/whatsapp-square-brands.svg";

const Header = () => {
  return (
    <div className="h">
      <div className="img">
        <img src={avatar} />
      </div>
      <div className="name-div">
        <div className="name">
          <h1>Bibiana Dianiskova</h1>
        </div>
        <div className="work-desc">
          <p>Marketing graduate passionate about Beauty Industry</p>
        </div>

        <div className="bott">
          <div className="social">
            <a href="https://www.linkedin.com/in/bibiana-dianiskova-9ba920141/" target="_blank" className="ln">
              <Linkedin />
            </a>
            <a
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fboobsbrainsandbeauty%2F%3Ffbclid%3DIwAR39nkzJkeYDvgUuPuBDk3lPZhTMQOQ6tV2Vwx78jN-8q7wbJ-ghgTXznIg&h=AT0bcGU6Eo_cG4Kc7EW4m6F37wfU1wOTR7D-sho3GqTSU9qGSoIaTc2rGlWHtWhBkOLbznInwvNSXzrtHHPP97fAW9TwIufu5QOopMHk4SyHf9Qk-ca95vznyJqTw4nL_5U4vdW8FlI"
              target="_blank"
              className="fb"
            >
              <Instagram />
            </a>
            <a href="https://api.whatsapp.com/send?phone=07874161760" target="_blank" className="wht">
              <Whatsupp />
            </a>
          </div>
          <div className="location">
            <p>London Uk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
