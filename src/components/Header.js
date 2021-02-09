import React from "react";
import avatar from "../avatar/IMG_6026.jpeg";
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
            <div className="fb">
              <Fb style={{ fontSize: "30px" }} />
            </div>
            <div className="linked">
              <Linkedin style={{ fontSize: "30px" }} />
            </div>
            <div style={{ fontSize: "30px" }} className="whatsupp">
              <Whatsupp />
            </div>
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
