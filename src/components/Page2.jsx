import { useDrag } from '@use-gesture/react'
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { imagesArray } from './images'

const Page2 = () => {
    const [bagPos, setBagPos] = useState({x:0, y:0})
    const bindBagPos = useDrag((params)=>{
        setBagPos({
            x: params.offset[0],
            y: params.offset[1]
        })
    })
  return (
    <div style={{position: "relative", width: "100%", height: "100%", touchAction:"none"}}>
        <div style={{position: "absolute", bottom: 0}}>
        <div {...bindBagPos()} style={{
            position: "relative",
            bottom: "0",
            left: bagPos.x,
            touchAction:"none",
            userSelect: "none",
            // textAlign: "center",
        }}>
            <img src='https://i.imgur.com/Yikjbp0.png' style={{width: "40%", userSelect: "none"}}></img>
        </div></div>
    </div>
  )
}

export default Page2  