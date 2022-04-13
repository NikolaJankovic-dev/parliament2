import { useDrag } from "@use-gesture/react";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { imagesArray } from "./images";
import style from "./Page2.module.css";

const Page2 = ({ phase, setPhase }) => {
  const [bagPos, setBagPos] = useState({ x: 0, y: 0 });
  const [isGame, setIsGame] = useState(false);
  const noId = [];
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (phase === 4) {
      const interval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  });
  const bindBagPos = useDrag((params) => {
    setBagPos({
      x: params.offset[0],
      y: params.offset[1],
    });
  });
  const handleBtn = () => {
    setPhase(phase + 1);
  };
  useEffect(() => {
    if (phase === 4) {
      const timer = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
      const timer2 = setInterval(() => {
        setIsGame(true);
      }, 200);
      return () => {
        clearInterval(timer);
        clearInterval(timer2);
      };
    }
  }, [phase]);

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
  const slike =
    phase === 3
      ? null
      : imagesArray?.map((element, index) => {
          const lastImage = imagesArray[imagesArray.length - 1];
          if (
            element.fit === "no" &&
            getBottom(`.${element.name}`) > getTop(`#bag`) &&
            getTop(`.${element.name}`) <
              getTop(`#bag`) + getHeigth("#bag") / 4 &&
            getLeft(`.${element.name}`) >= getLeft(`#bag`) &&
            getRight(`.${element.name}`) <= getRight(`#bag`)
          ) {
            noId.push(element);
          }

          return (
            <img
              data-id={element.name}
              src={element.image}
              key={index}
              className={element.name}
              id={element.fit}
              style={{
                position: "absolute",
                width: element.width + "%",
                bottom: `${(1 + index) * 15 + 80}%`,
                left:
                  getBottom(`.${element.name}`) >
                    getHeigth("#bag") / 5 + getTop("#bag") &&
                  getLeft(`.${element.name}`) >= getLeft("#bag") &&
                  getRight(`.${element.name}`) <= getRight("#bag")
                    ? bagPos.x
                    : element.left + "%",
                // left: bagPos.x,
                borderRadius: "50%",
                transform: isGame ? `translate(0,5000px)` : `translate(0,0)`,
                transition: isGame ? `transform 60s ease` : `transform 10000s ease`,
              }}
            />
          );
        });
  useEffect(() => {
    if (noId.length > 0) {
      setIsGame(false);
      setPhase(phase + 1);
    }
  }, [seconds, bagPos]);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        touchAction: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "96%",
          marginInline: "auto",
          //   border: "1px black solid",
          position: "relative",
          overflowX: "visible",
          overflowY: "hidden",
        }}
      >
        {slike}
      </div>
      <div style={{ position: "absolute", bottom: 0 }}>
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

            // textAlign: "center",
          }}
        >
          <img
            src="https://i.imgur.com/Yikjbp0.png"
            style={{
              width: "100%",
              userSelect: "none",
              position: "relative",
              left: "0px",
            }}
          ></img>
        </div>{" "}
        <button onClick={handleBtn}>Start</button>
      </div>
    </div>
  );
};

export default Page2;
