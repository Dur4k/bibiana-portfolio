import React from "react";
import avatar from "../avatar/this.jpeg";
// import fb1 from "../svg/facebook-square-brands.svg";
// import linkedin1 from "../svg/linkedin-in-brands.svg";
import "../sass/header.scss";
import { ReactComponent as Fb } from "../svg/facebook-brands.svg";
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
          <p>Freelance Editor: Beauty, Jewellery & Lifestyle</p>
        </div>

        <div className="bott">
          <div className="social">
            <a href="https://www.facebook.com/bibus.dianiskova/" target="_blank" className="fb">
              <Fb />
            </a>
            <a href="https://www.linkedin.com/in/bibiana-dianiskova-9ba920141/" target="_blank" className="ln">
              <Linkedin />
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
