import React, { useEffect } from "react";
import style from "./Page3.module.css";
import Video11 from "../assets/videos/Video11.mp4";
import Video2 from "../assets/videos/Video2.mp4";
import Video31 from "../assets/videos/Video31.mp4";
import Parliament from "../assets/videos/Parliament.mp4";

const Page3 = ({ phase, setPhase }) => {
  
  useEffect(() => {
    if (phase < 8) {
      const timer = setTimeout(() => {
        setPhase(phase + 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [phase, setPhase]);
  return (
    <div className={style.page3}>
      <div
        className={style.msg1}
        style={{
          opacity: phase >= 7 && phase <= 8 ? 1 : 0,
          transition:
            phase >= 7 && phase <= 8
              ? "opacity 2s ease 1s"
              : "opacity 2s ease 0s",
        }}
      ></div>
      <div
        className={style.msg11}
        style={{
          opacity: phase === 10 ? 1 : 0,
          transition:
            phase === 10 ? "opacity 1s ease 1s" : "opacity 1s ease 0s",
        }}
      ></div>
      <div
        className={style.msg12}
        style={{
          opacity: phase === 11 ? 1 : 0,
          transition:
            phase === 11 ? "opacity 2s ease 1s" : "opacity 2s ease 0s",
        }}
      ></div>
      <div
        className={style.msg13}
        style={{
          opacity: phase >= 12 ? 1 : 0,
          transition: phase >= 12 ? "opacity 2s ease 1s" : "opacity 2s ease 0s",
        }}
      ></div>
      <div className={style.bubble}>
        <video
          src={phase > 7 ? Parliament : ""}
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
            opacity: phase === 8 ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        />
        <div
          className={style.pack5}
          style={{ opacity: phase === 9 ? 1 : 0 }}
        ></div>
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
      <div className={style.msg2}>
        <div style={{ opacity: phase === 8 ? 1 : 0,
        transition: phase === 8 ? "opacity 2s ease 3s" : "opacity 2s ease 0s" }}>
        </div>
      </div>
      <div className={style.msg21}>
        <div style={{ opacity: phase === 10 ? 1 : 0,
        transition: phase === 10 ? "opacity 2s ease 1s" : "opacity 2s ease 0s" 
        }}></div>
      </div>
      <div className={style.msg22}>
        <div style={{ opacity: phase === 11 ? 1 : 0,
        transition: phase === 11 ? "opacity 2s ease 1s" : "opacity 2s ease 0s"
         }}></div>
      </div>
      <div className={style.msg23}>
        <div style={{ opacity: phase >= 12 ? 1 : 0,
        transition: phase >= 12 ? "opacity 2s ease 1s" : "opacity 2s ease 0s"
        }}></div>
      </div>
      <button
        className={style.btnL}
        onClick={() => setPhase(phase + 1)}
        style={{ opacity: phase > 7 && phase < 12 ? 1 : 0 }}
      ></button>
    </div>
  );
};

export default Page3;
