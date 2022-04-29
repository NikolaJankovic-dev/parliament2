import React, { useEffect, useState } from "react";
import { images, shuffle } from "../helpers/images";
import style from "./Page2.module.css";
import bagfront from "../assets/images/bagfront.png";
import bagend from "../assets/images/bagend.png";

const Page2 = ({ phase, setPhase }) => {
  const [pointerPosition, setPointerPosition] = useState(window.innerWidth / 2);
  const [currentPos, setCurrentPos] = useState(0);
  const [isGame, setIsGame] = useState(false);
  const [objects, setObjects] = useState([]);
  const [touching, setTouching] = useState(5);
  const noId = [];
  const [inBag, setInBag] = useState({ firstKey: "", secondKey: "" });
  const [seconds, setSeconds] = useState(0);
  const [btnStyle, setBtnStyle] = useState(style.btnNext);

  const handlePointerMove = (event) => {
    setPointerPosition(event.clientX);
  };

  const handleBtn = () => {
    if (phase === 4) {
      setObjects(shuffle(images));
      setTouching(5);
      setInBag({ firstKey: "", secondKey: "" });
      setPhase(5);
      setSeconds(0);
      setBtnStyle(style.noBtn);
      const timer = setTimeout(() => {
        setIsGame(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsGame(false);
      setObjects(shuffle(images));
      setBtnStyle(style.btnNext);
      setTouching(5);
      setInBag({ firstKey: "", secondKey: "" });
      setPhase(4);
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
          return (
            <div
              data-id={index}
              key={index}
              className={element.name}
              id={element.fit}
              style={{
                position: "relative",
                width: getWidth(`#bag`) / `${element.width}`,
                height: getWidth(`#bag`) / `${element.width}`,
                left:
                  getBottom(`.${element.name}`) > getTop("#bag") &&
                  getLeft(`.${element.name}`) >= getLeft(`#bag`) &&
                  getRight(`.${element.name}`) <= getRight(`#bag`) &&
                  element.fit === "yes"
                    ? pointerPosition - currentPos + element.left
                    : element.left,
                bottom: `${
                  (2 + index) * (getHeigth("#bag") + 100) 
                }px`,
                transform: isGame
                  ? `translate(-50%,${window.innerHeight * 12}px)`
                  : `translate(0,0)`,
                transformOrigin: "center",
                transition: isGame
                  ? `transform 120s linear`
                  : `transform 100000s ease`,
                userSelect: "none",
                zIndex: "2",
              }}
            >
              <img
                alt="objects"
                data-id={index}
                src={element.image}
                style={{
                  position: "absolute",
                  width: "100%",
                  zIndex: "3",
                }}
              />
            </div>
          );
        });

  useEffect(() => {
    [].forEach.call(
      document.body?.querySelector(`#holder`)?.children,
      (element) => {
        if (
          getBottom(`.${element.attributes.getNamedItem("class").value}`) >
            getTop(`#bag`) &&
          getTop(`.${element.attributes.getNamedItem("class").value}`) <
            getTop(`#bag`) +
              getHeigth(`.${element.attributes.getNamedItem("class").value}`) &&
          getLeft(`.${element.attributes.getNamedItem("class").value}`) >=
            getLeft(`#bag`) &&
          getRight(`.${element.attributes.getNamedItem("class").value}`) <=
            getRight(`#bag`)
        ) {
          console.log(element.attributes.getNamedItem("class").value);
          if (element.attributes.getNamedItem("id").value === "no") {
            element.style.transform = getLeft(`.${element.attributes.getNamedItem("class").value}`) > getLeft(`#bag`) + getWidth(`#bag`)/2 ? `translate(-50000px,${
              -window.innerHeight * 90
            }px) ` : `translate(50000px,${
              -window.innerHeight * 90
            }px) `
          }
          if (element.attributes.getNamedItem("id").value === "yes") {
            setInBag(() => ({
              firstKey: inBag.secondKey,
              secondKey: element.attributes.getNamedItem("class").value,
            }));
          }
          // if (element.attributes.getNamedItem("data-id").value === "26") {
          //   console.log(element.attributes.getNamedItem("class").value);
          // }
        }
        
      }
    );
    if (getBottom('[data-id="26"]') > getTop(`#bag`)) {
      const timer = setTimeout(() => {
        setPhase(7);
      }, 2000);
    }
    if (inBag.firstKey !== inBag.secondKey) {
      return setTouching(touching - 1);
    }
    if (inBag.firstKey === "" && inBag.secondKey === "") {
      return setTouching(5);
    }
  }, [seconds, pointerPosition, currentPos, touching, inBag]);

  useEffect(() => {
    for (let i = 0; i < images.length; i++) {
      if (
        getBottom(`[data-id="${i}"]`) > getTop("#bag") - 5 &&
        getBottom(`[data-id="${i}"]`) < getTop("#bag") + 15 &&
        getLeft(`[data-id="${i}"]`) >= getLeft(`#bag`) &&
        getRight(`[data-id="${i}"]`) <= getRight(`#bag`)
      ) {
        setCurrentPos(pointerPosition);
      }
      if (
        getBottom(`[data-id="${i}"]`) > getTop("#bag") - 5 &&
        getBottom(`[data-id="${i}"]`) < getTop("#bag") + 15 &&
        (getLeft(`[data-id="${i}"]`) <= getLeft(`#bag`) ||
          getRight(`[data-id="${i}"]`) >= getRight(`#bag`))
      ) {
        setCurrentPos(1000);
      }
    }
  }, [seconds]);
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
        setPhase(7);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [phase, setPhase]);
  useEffect(() => {
    if (touching < 1) {
      setPhase(6);
    }
    
    const timer = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 10);
    return () => clearTimeout(timer);
  }, [seconds, noId.length, setPhase, touching]);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        touchAction: "none",
      }}
    >
      <div style={{
        position: "absolute",
        width: "15vw",
        height: "15vw",
        top: "2%",
        right: "2%",
      }}>
      <img
        src="https://i.imgur.com/ZyJN2ed.png"
        className={style.countdown}
        alt="countdown"
        style={{
          position: "absolute",
          width: "100%",
          // top: "2%",
          // right: "2%",
          animationDuration: `20s`,
           opacity: `${isGame ? 1 : 0}`,
          transition: `opacity 1s ease`,
           zIndex: `${isGame ? 1 : 0}`,
        }}
      />
      <span style={{
          position: "absolute",
           width: "100%",
           height: "100%",
          // top: "2%",
          // right: "2%",
          // textAlign: "center",
          // verticalAlign: "middle",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5rem",
          color: "rgb(26,59,88)",
          textShadow: "1px 1px 2px rgba(252,252,252,0.5), 1px 3px 2px rgba(152,152,252,0.5)",
          // animationDuration: `20s`,
           opacity: `${isGame ? 1 : 0}`,
          transition: `opacity 1s ease`,
           zIndex: `${isGame ? 1 : 0}`,
        }}>
        {touching >= 0 ? touching : 0}
      </span>
      </div>
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
          id="holder"
          style={{
            width: "100%",
            height: "100%",
            // marginLeft: "50%",
            position: "relative",
            overflow: " visible",
          }}
        >
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
              zIndex: "2",
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
              zIndex: "0",
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
              zIndex: "2",
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

export default Page2;
