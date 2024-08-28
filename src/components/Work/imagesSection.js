import lamp from "../../img/lamp.png";
import lamon from "../../img/lemon.png";
import speaker from "../../img/speaker.png";
import lable from "../../img/label.png";
import sneakers from "../../img/sneakers.png";
import smartWatch from "../../img/smartWatch.png";
import { useContext, useEffect, useState } from "react";
import { dataFlow } from "./work";
import "./workImage.css";
const Image = () => {
  const { btnId } = useContext(dataFlow);

  const arr = [
    { type: "branding", png: lamp },
    { type: "branding", png: lamon },
    { type: "illustration", png: speaker },
    { type: "illustration", png: lable },
    { type: "web", png: sneakers },
    { type: "web", png: smartWatch },
  ];
  const [jsonfile, setjsonfile] = useState(arr);
  useEffect(() => console.log(btnId), [btnId]);
  useEffect(() => {
    console.log(arr);
  }, []);

  return (
    <>
      <div className="main container">
        {btnId.type === "All"
          ? jsonfile.map((item, index) => (
              <div className="card">
                <div className="imageCard">
                  <img src={item.png} className="image" alt=""></img>
                </div>
                <div className="content">
                  <h1>{btnId.type}</h1>
                </div>
              </div>
            ))
          : btnId.type === "Branding"
          ? jsonfile.map((item, index) =>
              item.type === "branding" ? (
                <div className="card">
                  <div className="imageCard">
                    <img src={item.png} className="image" alt=""></img>
                  </div>
                  <div className="content">
                    <h1>{btnId.type}</h1>
                  </div>
                </div>
              ) : (
                ""
              )
            )
          : btnId.type === "Illustraiton"
          ? jsonfile.map((item, index) =>
              item.type === "illustration" ? (
                <div className="card">
                  <div className="imageCard">
                    <img src={item.png} className="image" alt=""></img>
                  </div>
                  <div className="content">
                    <h1>{btnId.type}</h1>
                  </div>
                </div>
              ) : (
                ""
              )
            )
          : btnId.type === "Web"
          ? jsonfile.map((item, index) =>
              item.type === "web" ? (
                <div className="card">
                  <div className="imageCard">
                    <img src={item.png} className="image" alt=""></img>
                  </div>
                  <div className="content">
                    <h1>{btnId.type}</h1>
                  </div>
                </div>
              ) : (
                ""
              )
            )
          : jsonfile.map((item, index) => (
              <div className="card">
                <div className="imageCard">
                  <img src={item.png} className="image" alt=""></img>
                </div>
                <div className="content">
                  <h1>{btnId.type}</h1>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};
export default Image;
