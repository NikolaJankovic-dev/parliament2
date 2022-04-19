import { useDrag } from "@use-gesture/react";
import React, { useEffect, useState } from "react";

import { images, shuffle } from "../helpers/images";
import style from "./Page2.module.css";
import bag from "../assets/images/bag.png"

const Page2 = ({ phase, setPhase }) => {
  const [bagPos, setBagPos] = useState({ x: 0, y: 0 });
  const [isGame, setIsGame] = useState(false);
  const [objects, setObjects] = useState([])
  const noId = [];
  const [seconds, setSeconds] = useState(0);
  const [btnStyle, setBtnStyle] = useState(style.btnNext);
  const bindBagPos = useDrag((params) => {
    setBagPos({
      x: params.offset[0],
      y: params.offset[1],
    });
  });
 

  const handleBtn = () => {
    if (phase === 4) {
      setObjects(shuffle(images))
      setPhase(5);
      setSeconds(0);
      setBtnStyle(style.noBtn);
      const timer = setTimeout(() => {
        setIsGame(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setPhase(4);
      setIsGame(false);
      setObjects(shuffle(images))
      setBtnStyle(style.btnNext);
    }
  };

  const getTop = (el) => {
    let res = document.body.querySelector(el)?.getBoundingClientRect().top;
    return res;
  };
  const getBottom = (el) => {
    let res = document.body.querySelector(el)?.getBoundingClientRect().bottom;
    return res;
  };
  const getLeft = (el) => {
    let res = document.body.querySelector(el)?.getBoundingClientRect().left;
    return res;
  };
  const getRight = (el) => {
    let res = document.body.querySelector(el)?.getBoundingClientRect().right;
    return res;
  };

  const getHeigth = (el) => {
    let res = document.body.querySelector(el)?.getBoundingClientRect().height;
    return res;
  };

  const getWidth = (el) => {
    let res = document.body.querySelector(el)?.getBoundingClientRect().width;
    return res;
    };

  let gameintro = (
    <div className={style.gameintro}>
      <div className={style.bubble}>
        <div className={style.seamless}></div>
      </div>
      <div className={style.move}></div>
      <div className={style.arrows}></div>
    </div>
  );

  let slike =
    phase === 4
      ? null
      : objects?.map((element, index) => {
          const lastImage = images.length - 1;
          if (
            element.fit === "no" &&
            getBottom(`.${element.name}`) > getHeigth("#bag") / 5 + getTop('#bag') &&
            getTop(`.${element.name}`) <
              getTop(`#bag`) + getHeigth("#bag") / 5 &&
            getLeft(`.${element.name}`) >= getLeft(`#bag`) &&
            getRight(`.${element.name}`) <= getRight(`#bag`)
          ) {
            noId.push(element);
            // console.log(noId);
          } else if (
            index === lastImage &&
            getBottom(`.${element.name}`) > getTop(`#bag`)
          ) {
            noId.push(element);
          }

          return (
            <img
            // {...bindObjPos()}
            alt="objects"
              data-id={index}
              src={element.image}
              key={index}
              className={element.name}
              id={element.fit}
              style={{
                position: "absolute",
                width: getWidth(`#bag`) / `${element.width}`,
                bottom: `${(1 + index) * 20 + 90}%`,
                left:
                  getBottom(`.${element.name}`) >
                    getHeigth("#bag") / 5 + getTop("#bag") &&
                  getLeft(`.${element.name}`)+10 >= getLeft("#bag") &&
                  getRight(`.${element.name}`) <= getRight("#bag")+10
                    ? bagPos.x
                    : element.left + "px",
                borderRadius: "50%",
                transform: isGame
                  ? `translate(-50%,${window.innerHeight * 6}px)`
                  : `translate(0,0)`,
                  transformOrigin: "center",
                transition: isGame
                  ? `transform 90s ease`
                  : `transform 100000s ease`,
              userSelect: "none",

              }}
            />
          );
        });
  let overlay = (
    <div
      className={style.overlay}
      style={{ display: phase === 6 ? "block" : "none" }}
    >
      <div className={style.bubble}>
        <div className={style.sorry}></div>
      </div>
    </div>
  );

  useEffect(() => {
    if (phase === 6) {
      setIsGame(false);
      setBtnStyle(style.btnTry);
      const timer = setTimeout(() => {
        setPhase(7)
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [phase, setPhase]);
  useEffect(() => {
    if (noId.length > 0) {
      setPhase(6);
    }
    const timer = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 100);
    return () => clearTimeout(timer);
  }, [seconds, noId.length, setPhase]);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        touchAction: "none",
      }}
    >
            
        <img src="https://i.imgur.com/ZyJN2ed.png" className={style.countdown} alt="countdown"  style={{
            position: "absolute",
            width: "15%",
            top: "2%",
            right: "2%",
            animationDuration: `20s`,
            opacity: `${isGame ? 1 : 0}`,
            transition: `opacity 1s ease`,
            zIndex: `${isGame ? 1 : 0}`,
        }}/>
      {phase === 4 ? gameintro : null}
      {overlay}
      <div
        style={{
          position: "relative",
          height: "96%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            marginLeft: "50%",
            position: "relative",
            overflow: " visible",
          }}
        >
            {/* {console.log(noId)} */}
          {slike}
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, width:"100%" }}>
        <div className={style.bag}>
          <div
            // {...bindObjPos()}
            {...bindBagPos()}

            id="bag"
            style={{
              position: "relative",
              bottom: "0",
              left: bagPos.x,
              touchAction: "none",
              userSelect: "none",
              width: "min(40%, 170px",
            }}
          > 
            <img
            alt="bag"
              src={bag}
              style={{
                width: "100%",
                userSelect: "none",
              }}
            ></img>
          </div>
        </div>{" "}
      </div>
      <button onClick={handleBtn} className={btnStyle}></button>
    </div>
  );
};

export default Page2;
