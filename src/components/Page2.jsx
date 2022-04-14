import { useDrag } from "@use-gesture/react";
import React, { useEffect, useState } from "react";

import { imagesArray } from "./images";
import style from "./Page2.module.css";

const Page2 = ({ phase, setPhase }) => {
  const [bagPos, setBagPos] = useState({ x: 0, y: 0 });
  const [isGame, setIsGame] = useState(false);
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
    if (phase === 3) {
      setPhase(4);
      setSeconds(0);
      setBtnStyle(style.noBtn);
      const timer = setTimeout(() => {
        setIsGame(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setPhase(3);
      setIsGame(false);
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
    phase === 3
      ? null
      : imagesArray?.map((element, index) => {
          const lastImage = imagesArray.length - 1;
          if (
            element.fit === "no" &&
            getBottom(`.${element.name}`) > getTop(`#bag`) &&
            getTop(`.${element.name}`) <
              getTop(`#bag`) + getHeigth("#bag") / 4 &&
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
              data-id={index}
              src={element.image}
              key={index}
              className={element.name}
              id={element.fit}
              style={{
                position: "absolute",
                width: element.width + "%",
                bottom: `${(1 + index) * 15 + 90}%`,
                left:
                  getBottom(`.${element.name}`) >
                    getHeigth("#bag") / 5 + getTop("#bag") &&
                  getLeft(`.${element.name}`)+10 >= getLeft("#bag") &&
                  getRight(`.${element.name}`) <= getRight("#bag")+10
                    ? bagPos.x
                    : element.left + "%",
                borderRadius: "50%",
                transform: isGame
                  ? `translate(-50%,${window.innerHeight * 6}px)`
                  : `translate(0,0)`,
                transition: isGame
                  ? `transform 50s ease`
                  : `transform 100000s ease`,
              }}
            />
          );
        });
  let overlay = (
    <div
      className={style.overlay}
      style={{ display: phase === 5 ? "block" : "none" }}
    >
      <div className={style.bubble}>
        <div className={style.sorry}></div>
      </div>
    </div>
  );

  useEffect(() => {
    if (phase === 5) {
      setIsGame(false);
      setBtnStyle(style.btnTry);
      const timer = setTimeout(() => {
        setPhase(6)
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [phase]);
  useEffect(() => {
    if (noId.length > 0) {
      setPhase(5);
    }
    const timer = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 100);
    return () => clearTimeout(timer);
  }, [seconds]);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        touchAction: "none",
      }}
    >
        <img src="https://i.imgur.com/ZyJN2ed.png" className={style.countdown} style={{
            position: "absolute",
            width: "15%",
            top: "2%",
            right: "2%",
            animationDuration: `20s`,
            opacity: `${isGame ? 1 : 0}`,
            transition: `opacity 1s ease`,
            zIndex: `${isGame ? 1 : 0}`,
        }}/>
      {phase === 3 ? gameintro : null}
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
      <div style={{ position: "absolute", bottom: 0 }}>
        <div className={style.bag}>
          <div
            {...bindBagPos()}
            id="bag"
            style={{
              position: "relative",
              bottom: "0",
              left: bagPos.x,
              touchAction: "none",
              userSelect: "none",
              width: "40%",
            }}
          >
            <img
              src="https://i.imgur.com/Yikjbp0.png"
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
