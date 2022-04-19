import React, { useEffect } from "react";
import style from "./Page1.module.css";

const Page1 = ({ phase, setPhase }) => {
  useEffect(() => {
    let time;
    const timer = setTimeout(() => {
      if (phase === 0) {
        setPhase(1);
        time = 1000
      }
      if (phase === 3) {
        setPhase(4)
        time = 2000
      }
    }, time);
    return () => clearTimeout(timer);
  }, [phase, setPhase]);

  return (
    <div className={style.page1}>
      <div
        className={phase === 0 ? style.nobubble : style.bubble}
        onClick={() => setPhase(1)}
      >
        <div
          className={phase === 1 ? style.meter : style.meter2}
          style={{ opacity: phase === 1 ? 1 : 0 }}
        ></div>
        <div
          className={phase === 1 ? style.introducing : style.introducing2}
          style={{ opacity: phase === 1 ? 1 : 0 }}
        ></div>
        <div className={phase === 2 ? style.prioritize : style.prioritize2} style={{opacity: phase === 2 ? 1 : 0}}></div>
      </div>
      <div
        className={style.brought}
        style={{
          opacity: phase === 1 ? 1 : 0,
          transition: phase < 2 ? "opacity 1s ease 1s" : "opacity 1s ease",
        }}
      ></div>
      <button
        className={phase < 2 ? style.btnStart : style.btnNext}
        style={{
          opacity: phase === 0 ? 0 : 1,
          transition: phase < 2 ? "all 2s ease 2s" : "-moz-initial",
        }}
        onClick={() => setPhase(phase + 1)}
      ></button>
    </div>
  );
};

export default Page1;
