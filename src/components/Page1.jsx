import React, { useEffect, useRef, useState } from "react";
import style from "./Page1.module.css";

const Page1 = ({ phase, setPhase }) => {
  const [bubbleStyle, setBubbleStyle] = useState(style.nobubble);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (phase === 0) {
        setPhase(1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <div className={style.page1}>
      <div
        className={phase === 0 ? style.nobubble : style.bubble}
        onClick={() => setPhase(1)}
      >
        <div
          className={style.meter}
          style={{ opacity: phase === 1 ? 1 : 0 }}
        ></div>
        <div
          className={style.introducing}
          style={{ opacity: phase === 1 ? 1 : 0 }}
        ></div>
        <div className={style.prioritize} style={{opacity: phase < 2 ? 0 : 1}}></div>
      </div>
      <div
        className={style.brought}
        style={{
          opacity: phase === 1 ? 1 : 0,
          transition: phase < 2 ? "opacity 3s ease 3s" : "-moz-initial",
        }}
      ></div>
      <button
        className={phase < 2 ? style.btnStart : style.btnNext}
        style={{
          opacity: phase === 0 ? 0 : 1,
          transition: phase < 2 ? "all 3s ease 3s" : "-moz-initial",
        }}
        onClick={() => setPhase(phase + 1)}
      ></button>
    </div>
  );
};

export default Page1;
