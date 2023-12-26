import "../components/About.css";
import PicMain4 from "../assets/PicMain4.png";
export const About = () => {
  return (
    <div className="contentAbout">
      <div className="contentAboutLeft">
        <img src={PicMain4} className="imgAbout" />
      </div>
      <div className="contentAboutRight">
        <div className="contentAboutMain">
          <h1 className="TextAboutMain">About me</h1>
          <h3>Name : Attapol</h3>
          <h3>Surname : Kerdlamjiak</h3>
          <h3>Year : 4</h3>
          <h3>Major : Computer Engineering</h3>{" "}
          <h3>University : Rangsit University</h3>{" "}
          <h3>Gmail : tenten0074@hotmail.com</h3> <h3>Phone : 0946616101</h3>
        </div>
      </div>
       <div className="contentAboutRight">
        <div className="contentAboutMain">
          <h1 className="TextAboutMain">Skills</h1>
          <h3>HTML : ⭐⭐⭐⭐</h3>
          <h3>CSS  : ⭐⭐⭐⭐ </h3>
          <h3>Javascript : ⭐⭐⭐</h3>
          <h3>C# : ⭐⭐⭐</h3>{" "}
          <h3>C : ⭐⭐</h3>{" "}
          <h3>SQL : ⭐⭐</h3>
          <h3>Photoshop : ⭐⭐⭐</h3>
        </div>
      </div>
    </div>
  );
};
