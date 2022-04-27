// import { useDrag } from "@use-gesture/react";
import React, { useEffect, useState } from "react";

import { images, shuffle } from "../helpers/images";
import style from "./Page2.module.css";
// import bag from "../assets/images/bag.png";
import bagfront from "../assets/images/bagfront.png";
import bagend from "../assets/images/bagend.png";

const Page2 = ({ phase, setPhase }) => {
  const [pointerPosition, setPointerPosition] = useState(window.innerWidth / 2);
  // const [bagPos, setBagPos] = useState({ x: 0, y: 0 });
  const [currentPos, setCurrentPos] = useState(0);
  const [isGame, setIsGame] = useState(false);
  const [objects, setObjects] = useState([]);
  const [touching, setTouching] = useState(0);
  const noId = [];
  const [seconds, setSeconds] = useState(0);
  const [btnStyle, setBtnStyle] = useState(style.btnNext);

  const handlePointerMove = (event) => {
    setPointerPosition(event.clientX);
  };
  // const bindBagPos = useDrag((params) => {
  //   setBagPos({
  //     x: params.offset[0],
  //     y: params.offset[1],
  //   });
  // });

  const handleBtn = () => {
    if (phase === 4) {
      setObjects(shuffle(images));
      setPhase(5);
      setSeconds(0);
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

  let slike =
    phase === 4
      ? null
      : objects?.map((element, index) => {
          // const lastImage = images.length - 1;
          // if (
          //   element.fit === "no" &&
          //   getBottom(`.${element.name}`) >
          //     getHeigth("#bag") / 4 + getTop("#bag") &&
          //   getTop(`.${element.name}`) <
          //     getTop(`#bag`) + getHeigth("#bag") / 4  - getHeigth(`.${element.name}`)/2 &&
          //   getLeft(`.${element.name}`) >= getLeft(`#bag`) &&
          //   getRight(`.${element.name}`) <= getRight(`#bag`)
          // ) {
          //   noId.push(element);
          //   // console.log(noId);
          // }
          // // if (
          // //   element.fit === "yes" &&
          // //   getBottom(`.${element.name}`) >
          // //     getHeigth("#bag") / 4 + getTop("#bag") &&
          // //     getBottom(`.${element.name}`) <
          // //     getHeigth("#bag") / 4 + getTop("#bag") +2 &&
          // //   // getTop(`.${element.name}`) <
          // //   //   getTop(`#bag`) + getHeigth("#bag") / 4  - getHeigth(`.${element.name}`)/2 &&
          // //   getLeft(`.${element.name}`) >= getLeft(`#bag`) &&
          // //   getRight(`.${element.name}`) <= getRight(`#bag`)
          // // ) {
          // //   setYesId(yesId+1)
          // //    console.log(yesId);
          // // }

          // else if (
          //   index === lastImage &&
          //   getBottom(`.${element.name}`) > getTop(`#bag`)
          // ) {
          //   noId.push(element);
          // }

          return (
            <div
              data-id = {index}
              key={index}
              className={element.name}
              id={element.fit}
              style={{
                position: "relative",
                width: getWidth(`#bag`) / `${element.width}`,
                height: getWidth(`#bag`) / `${element.width}`,
                left: element.left,
                bottom: `${
                  (2 + index) * (getHeigth("#bag") + 50) +
                  window.innerHeight / 2
                }px`,
                transform: isGame
                  ? `translate(-50%,${window.innerHeight * 12}px)`
                  : `translate(0,0)`,
                transformOrigin: "center",
                transition: isGame
                  ? `transform 120s linear`
                  : `transform 100000s ease`,
                userSelect: "none",
              }}
            >
              <img
                // {...bindObjPos()}
                alt="objects"
                data-id={index}
                src={element.image}
                style={{
                  position: "absolute",
                  // border: "50px solid rgba(0,0,0,0.5)",

                  width: "100%",

                  // left:
                  //   // getBottom(`.${element.name}`) >
                  //   //   getHeigth("#bag") / 5 + getTop("#bag") &&
                  //   // getLeft(`.${element.name}`)+10 >= getLeft("#bag") &&
                  //   // getRight(`.${element.name}`) <= getRight("#bag")+10
                  //   //   ? pointerPosition.x - currentPos + element.left
                  //   //   :
                  //   getTop(`.${element.name}`) > getHeigth("#bag") / 4 + getTop("#bag") &&
                  //   // getBottom(`.${element.name}`) < getTop(`#bag`) &&
                  //   getLeft(`.${element.name}`) >= getLeft(`#bag`) &&
                  //   getRight(`.${element.name}`) <= getRight(`#bag`)
                  //     ? pointerPosition.x - currentPos + element.left
                  //     : element.left,
                  //  element.left + "px",
                  // borderRadius: "50%",
                }}
              />
            </div>
          );
        });

  useEffect(() => {
  let yesId = "";

    [].forEach.call(
      document.body?.querySelector(`#holder`)?.children,
      (element) => {
        // console.log(element.attributes.getNamedItem("class").value)
  let test = ""

        if (
          getBottom(
            `.${element.attributes.getNamedItem("class").value}`
          ) > getTop(`#bag`) &&
          getTop(
            `.${element.attributes.getNamedItem("class").value}`
          ) <
            getTop(`#bag`) +
              getHeigth(
                `.${element.attributes.getNamedItem("class").value}`
              ) &&
          getLeft(
            `.${element.attributes.getNamedItem("class").value}`
          ) >= getLeft(`#bag`) &&
          getRight(
            `.${element.attributes.getNamedItem("class").value}`
          ) <= getRight(`#bag`)
        ) {
          console.log(element.attributes.getNamedItem("class").value);
          // element.style.zIndex = "11";
          if (element.attributes.getNamedItem("id").value === "no") {
            // element.style.zIndex = "10";
            element.style.transform = `translate(-50000px,${window.innerHeight * 12}px) `;
          }
          if (element.attributes.getNamedItem("id").value === "yes" && !touching) {
            element.style.left = pointerPosition - currentPos + element.left;
            yesId += (yesId + (element.attributes.getNamedItem("class").value));
            console.log(yesId);
            return setTouching(touching+1);
          }
          // else {
          //   setTouching(false);
          // }
        }
      }
    )
    if (yesId !== "") {
    return setTouching(touching+1)}
  }, [seconds, pointerPosition, currentPos, touching]);

  useEffect(() => {
    for (let i = 0; i < images.length; i++) {
      if (
        getBottom(`[data-id="${i}"]`) >
          getHeigth("#bag") / 4 + getTop("#bag") - 5 &&
        getBottom(`[data-id="${i}"]`) <
          getHeigth("#bag") / 4 + getTop("#bag") + 15 &&
        getLeft(`[data-id="${i}"]`) >= getLeft(`#bag`) &&
        getRight(`[data-id="${i}"]`) <= getRight(`#bag`)
      ) {
        setCurrentPos(pointerPosition);
        // if (images[i].fit === "yes") {
        //   setYesId(yesId + 1);
        // }
      }
      if (
        getBottom(`[data-id="${i}"]`) >
          getHeigth("#bag") / 4 + getTop("#bag") - 5 &&
        getBottom(`[data-id="${i}"]`) <
          getHeigth("#bag") / 4 + getTop("#bag") + 15 &&
        (getLeft(`[data-id="${i}"]`) <= getLeft(`#bag`) ||
          getRight(`[data-id="${i}"]`) >= getRight(`#bag`))
      ) {
        setCurrentPos(1000);
      }
    }
  });
  // useEffect(() => {
  //   if (getBottom(`[data-id="1"]`) > getHeigth("#bag") / 5 + getTop('#bag') &&
  //   getTop(`[data-id="1"]`) <
  //     getTop(`#bag`) + getHeigth("#bag") / 5 &&
  //   getLeft(`[data-id="1"]`) >= getLeft(`#bag`) &&
  //   getRight(`[data-id="1"]`) <= getRight(`#bag`)){
  //   setCurrentPos(pointerPosition.x)
  // }

  // },[pointerPosition.x]);
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
    if (noId.length > 0) {
      setPhase(6);
    }
    const timer = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 10);
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
          {/*document.body?.querySelector(`#holder`)?.children
            ? [].forEach.call(
                document.body?.querySelector(`#holder`)?.children,
                (element) => {
                  // console.log(element.attributes.getNamedItem("class").value)
                  if (
                    getBottom(
                      `.${element.attributes.getNamedItem("class").value}`
                    ) > getTop(`#bag`) &&
                    getTop(
                      `.${element.attributes.getNamedItem("class").value}`
                    ) <
                      getTop(`#bag`) +
                        getHeigth(
                          `.${element.attributes.getNamedItem("class").value}`
                        ) &&
                    getLeft(
                      `.${element.attributes.getNamedItem("class").value}`
                    ) >= getLeft(`#bag`) &&
                    getRight(
                      `.${element.attributes.getNamedItem("class").value}`
                    ) <= getRight(`#bag`)
                  ) {
                    console.log(element.attributes.getNamedItem("class").value);
                  }
                }
              )
              : ""*/}
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

export default Page2;
