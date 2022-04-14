import { useDrag } from "@use-gesture/react";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { imagesArray } from "./images";
import style from "./Page2.module.css";

const Page2 = ({ phase, setPhase }) => {
  const [bagPos, setBagPos] = useState({ x: 0, y: 0 });
  const [isGame, setIsGame] = useState(false);
  const [intro, setIntro] = useState(true);
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
      setIntro(false);
      setBtnStyle(style.noBtn);
      const timer = setTimeout(() => {
        setIsGame(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setPhase(3);
      setIsGame(false);
      setBtnStyle(style.btnNext)
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
                bottom: `${(1 + index) * 15 + 80}%`,
                left:
                  getBottom(`.${element.name}`) >
                    getHeigth("#bag") / 5 + getTop("#bag") &&
                  getLeft(`.${element.name}`) >= getLeft("#bag") &&
                  getRight(`.${element.name}`) <= getRight("#bag")
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
    }
    
  }, [phase]);
  useEffect(()=>{
      if (noId.length > 0) {
        setPhase(5);
      }
     const timer = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearTimeout(timer); 
  },[seconds]);
  //   const phase5 = () => {
  //     const timer = setInterval(() => {
  //       setPhase(5);
  //       setIsGame(true);

  //     }, 1000);
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   };

  //   useEffect(() => {
  //     if (phase === 3) {
  //       slike = null;
  //       setIsGame(false);
  //     }
  //     if (phase === 4) {
  //       phase5();
  //     }
  //     if (phase === 5) {
  //     //   setIsGame(true);
  //       const interval = setInterval(() => {
  //         setSeconds(seconds + 1);
  //       }, 1000);
  //         return () => {
  //           clearInterval(interval);
  //         }
  //     }
  //     if (phase === 6) {
  //       setIsGame(false);
  //     //   setSeconds(0);
  //     }
  //   }, [phase, seconds, bagPos]);
  //   useEffect(() => {
  //     if (noId.length > 0) {
  //       setPhase(6);
  //       setSeconds(0)
  //     }
  //   }, [seconds]);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        touchAction: "none",
      }}
    >
      {/* {console.log(noId)} */}
      {phase === 3  ? gameintro : null}
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

              // textAlign: "center",
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
        </div>
        <button onClick={handleBtn} className={btnStyle}></button>
      </div>
    </div>
  );
};

export default Page2;
