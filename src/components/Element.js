import React from "react";

const Element = ({ pic, main, text, link }) => {
  return (
    <div className="grid2">
      <a href={link} target="_blank" className="picc">
        <img src={pic} alt="" />
      </a>
      <div className="main-text">
        <h2>{main}</h2>
      </div>
      <div className="txt-grid">{text}</div>
    </div>
  );
};

export default Element;
