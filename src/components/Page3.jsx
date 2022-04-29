import React, { useEffect, useState } from "react";
import style from "./Page3.module.css";
import Video11 from "../assets/videos/Video11.mp4";
import Video2 from "../assets/videos/Video2.mp4";
import Video31 from "../assets/videos/Video31.mp4";
import par2 from "../assets/videos/Parliament.mp4";

const Page3 = ({ phase, setPhase }) => {
  const [msg1, setMsg1] = useState(style.msg1);
  const [msg2, setMsg2] = useState(style.msg2);
  useEffect(() => {
    if (phase < 8) {
      setMsg1(style.msg1);
      setMsg2(style.msg2);
      const timer = setTimeout(() => {
        setPhase(phase + 1);
      }, 3000);
      return () => clearTimeout(timer);
    }
    if (phase === 10) {
      setMsg1(style.msg11);
      setMsg2(style.msg21);
    }
    if (phase === 11) {
      setMsg1(style.msg12);
      setMsg2(style.msg22);
    }
    if (phase === 12) {
      setMsg1(style.msg13);
      setMsg2(style.msg23);
    }
  }, [phase, setPhase]);
  return (
    <div className={style.page3}>
      <div
        className={msg1}
        style={{ opacity: (phase > 6 && phase < 9) || phase > 9 ? 1 : 0 }}
      ></div>
      <div className={style.bubble}>
        {/* <div className={style.pack1} style={{ opacity: phase >= 7 ? 1 : 0 }}> */}
          <video
            src={par2}
            controls={false}
            autoPlay
            playsInline
            muted
            type="video/mp4"
            style={{
              width: "100vw",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: phase >= 7 && phase <=8 ? 1 : 0,
            }}
          />
          <div className={style.pack5} style={{ opacity: phase >= 9 ? 1 : 0 }}></div>
        {/* </div> */}
        {/* <div className={style.pack2} style={{opacity: phase === 9 ? 1 : 0}}></div> */}
        {/* <div className={style.pack3} style={{opacity: phase === 10 ? 1 : 0}}></div>
        <div className={style.pack4} style={{opacity: phase === 11 ? 1 : 0}}></div>
        <div className={style.pack5} style={{opacity: phase === 12 ? 1 : 0}}></div> */}
        <div className={style.video1} style={{ opacity: phase === 10 ? 1 : 0 }}>
          <video
            src={Video11}
            controls={false}
            autoPlay
            playsInline
            loop
            muted
            type="video/mp4"
            style={{
              height: "100%",
              position: "absolute",
              left: "50%",
              transform: "translate(-40%, 0)",
            }}
          />
          \
        </div>
        <div className={style.video2} style={{ opacity: phase === 11 ? 1 : 0 }}>
          <video
            src={Video2}
            controls={false}
            autoPlay
            playsInline
            loop
            muted
            type="video/mp4"
            style={{
              height: "100%",
            }}
          />
          \
        </div>
        <div className={style.video3} style={{ opacity: phase >= 12 ? 1 : 0 }}>
          <video
            src={Video31}
            controls={false}
            autoPlay
            playsInline
            loop
            muted
            type="video/mp4"
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
      <div className={msg2}>
        <div
          style={{ opacity: (phase > 7 && phase < 9) || phase > 9 ? 1 : 0 }}
        ></div>
      </div>{" "}
      <button
        className={style.btnL}
        onClick={() => setPhase(phase + 1)}
        style={{ opacity: phase > 7 ? 1 : 0 }}
      ></button>
    </div>
  );
};

export default Page3;
