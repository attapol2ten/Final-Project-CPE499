import PicMain from "../assets/PicMain.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import github from "../assets/github.png";
import "../components/Home.css";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="content">
      <div className="contentLeft">
        <h2 className="h2ContentLeft">สวัสดี, </h2>
        <h1 className="h1ContentLeft">
          I'm <span className="spanContentLeft">Attapol Kerdlamjiak</span>
        </h1>
        <p className="textContent">
          Hello, my name is Attapol. I’m a senior student of Rangsit University. My major is in Computer Engineering.This is Portfolio Website Final Project by React
        </p>
        <ul>
          <li>
            <a href="https://www.facebook.com/autapol1234/" target="_blank">
              <img src={facebook} className="imgFacebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/hofaka1234" target="_blank">
              <img src={instagram} className="imgInstagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCV95M_3Qw-YoD89530uJEMQ"
              target="_blank"
            >
              <img src={youtube} className="imgYoutube" />
            </a>
          </li>
          <li>
            <a href="https://github.com/attapol2ten" target="_blank">
              <img src={github} className="imgGithub" />
            </a>
          </li>
        </ul>
        <div className="contentBottom">
          {" "}
          <NavLink className="button" to="/about">
            View More
          </NavLink>
        </div>
      </div>
      <div className="contentRight">
        <img src={PicMain} className="imgProfile" />
      </div>
    </div>
  );
};
