import React, { useEffect, useState } from "react";
import { images, shuffle } from "../helpers/images";

import bagfront from "../assets/images/bagfront.png";
import bagend from "../assets/images/bagend.png";

import style from "./Page2.module.css";

const Page2t = ({ phase, setPhase }) => {
  const [pointerPosition, setPointerPosition] = useState(window.innerWidth / 2);
  const [objects, setObjects] = useState([]);
  const [isGame, setIsGame] = useState(false);

  const [btnStyle, setBtnStyle] = useState(style.btnNext);
  const objNodes = [];

  const handlePointerMove = (event) => {
    setPointerPosition(event.clientX);
  };
  const handleBtn = () => {
    if (phase === 4) {
      setObjects(shuffle(images));
      setPhase(5);
      setBtnStyle(style.noBtn);
      const timer = setTimeout(() => {
        setIsGame(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setPhase(4);
      setIsGame(false);
      setObjects(shuffle(images));
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
  useEffect(() => {
    for (let i = 0; i < objNodes.length; i++) {
      if (
        getTop(`.${objNodes[i].props?.className}`) > getTop(`#bag`) &&
        getTop(`.${objNodes[i].props?.className}`) <
          getTop(`#bag`) + getHeigth(`.${objNodes[i].props?.className}`)
      ) {
        console.log(objNodes[i].props?.className);
      }
    }
  }, [objNodes]);
  let slike =
    phase === 4
      ? null
      : objects.map((el, i) => {
          objNodes.push(
            <div
              key={i}
              className={el.name}
              id={el.fit}
              style={{
                position: "absolute",
                width: getWidth(`#bag`) / `${el.width}`,
                height: getWidth(`#bag`) / `${el.width}`,
                left: el.left,
                bottom: `${
                  (2 + i) * (getHeigth("#bag") + 50) + window.innerHeight / 2
                }px`,
                transform: isGame
                  ? `translate(-50%,${window.innerHeight * 12}px)`
                  : `translate(0,0)`,
                // transformOrigin: "center",
                transition: isGame
                  ? `transform 120s linear`
                  : `transform 100000s ease`,
                userSelect: "none",
                backgroundImage: `url(${el.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {/* <img
                src={el.image}
                alt=""
                style={{
                  width: getWidth(`#bag`) / `${el.width}`,
                  position: "absolute",
                  left: "50%",
                    top: "50%",
                    transform: "translate(-50%,-50%)",
                  
                  //   aspectRatio: `1/1`,
                }}
              /> */}
            </div>
          );
          return objNodes;
        });
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        touchAction: "none",
      }}
    >
      <img
        src="https://i.imgur.com/ZyJN2ed.png"
        className={style.countdown}
        alt="countdown"
        style={{
          position: "absolute",
          width: "15%",
          top: "2%",
          right: "2%",
          animationDuration: `20s`,
          opacity: `${isGame ? 1 : 0}`,
          transition: `opacity 1s ease`,
          zIndex: `${isGame ? 1 : 0}`,
        }}
      />
      {phase === 4 ? gameintro : null}
      <div
        style={{
          position: "relative",
          height: "96%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            // marginLeft: "50%",
            position: "relative",
            overflow: " visible",
          }}
        >
          {/* {console.log(noId)} */}
          {slike}
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <div className={style.bag}>
          <img
            alt="bag"
            src={bagfront}
            style={{
              position: "relative",
              bottom: "0",
              left: pointerPosition,
              touchAction: "none",
              userSelect: "none",
              width: "min(40%, 170px)",
              transform: "translate(-50%,0)",
            }}
          ></img>
          <img
            alt="bag"
            src={bagend}
            style={{
              position: "absolute",
              top: "0",
              left: pointerPosition,
              touchAction: "none",
              userSelect: "none",
              width: "min(40%, 170px)",
              transform: "translate(-50%,0)",
            }}
          ></img>
          <div
            id="bag"
            onPointerMove={handlePointerMove}
            style={{
              position: "absolute",
              bottom: "0",
              left: pointerPosition,
              touchAction: "none",
              userSelect: "none",
              width: "min(40%, 170px)",
              height: " 70%",
              transform: "translate(-50%,0)",
              //  backgroundColor: "red",
            }}
          ></div>
          {/* </div> */}
        </div>{" "}
      </div>
      <button onClick={handleBtn} className={btnStyle}></button>
    </div>
  );
};

export default Page2t;
