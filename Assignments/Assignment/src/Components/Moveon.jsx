import React, { useState } from 'react'

export default function Moveon() {
    const[div,setdiv] = useState({x:0,y:0})

    const MouseOv = (e) => {
        console.log(e);
        
        setdiv({
        
            
            x:e.clientX,
            y:e.clientY
        })
    }

    window.addEventListener("mousemove",MouseOv)
  return (
    <>
        <div style={{
            height  : 150,
            width : "150px",
            background : "lime",
            borderRadius : "50%",
            transform : `translate(${div.x}px,${div.y}px)`,
            position : 'absolute',
            top : 0,
            left : 0,
            border : "10px solid red",
            outline : "10px solid aqua"
            // transform : translate`(${div.x}px,${div.y})`
        }}>

        </div>
    
    
    </>
  )
}
