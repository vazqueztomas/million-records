import React from "react";
import "./sec-recomendaciones.css";
import logo_ig from "../assets/svg/instagram-logo.svg";
import logo_tw from "../assets/svg/twitter-logo.svg";
import logo_fb from "../assets/svg/facebook-logo.svg";
import logo_sc from "../assets/svg/soundcloud-logo.svg";
import logo_yt from "../assets/svg/youtube-logo.svg";
const IMG_URL = "https://wallpaperaccess.com/full/2798.jpg";
const Fotos = (props) => {
  return (
    <div className="recomendacionesDiv">
      <div className="redes-sociales">
        <a href="instagram.com/tomasvazquez21">
          <img src={logo_ig} alt="Instagram Logo" />
        </a>

        <a href="twitter.com/vazquezcabj21">
          <img src={logo_tw} alt="Twitter Logo" />
        </a>
        <a href="facebook.com/">
          <img src={logo_fb} alt="Facebook Logo" />
        </a>
        <a href="souncloud.com/">
          <img src={logo_sc} alt="Soundcloud Logo" />
        </a>
        <a href="youtube.com/">
          <img src={logo_yt} alt="Youtube Logo" />
        </a>
      </div>
      <img src={IMG_URL} alt="" srcset="" id = 'background' />
      
    </div>
  );
};

export default Fotos;
