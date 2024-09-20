import React, { useState } from "react";

function Counter() {
    const[Incre,setIncre] = useState(0)

    const Incement = () => {
        setIncre(Incre+1)
    }

    
    const Decement = () => {
        setIncre(Incre-1)
    }
  return (
    <>
      <div style={{ backgroundColor : "black",color:"aqua" ,margin : "0 auto", height : "200px", width : "300px", border : "solid red 2px", textAlign : "center" ,borderRadius : "15px"}}>
        <h1>Counter App</h1>
        <h1>{Incre}</h1>
        <button style={{backgroundColor : "aqua", color :"black" ,border : "solid black 2px",borderRadius : "15px", padding : "5px 7px"}} onClick={()=>Incement()}>Increment</button>
        <button style={{ backgroundColor : "aqua",color : "black"     ,marginLeft : "15px",border : "solid black 2px", borderRadius : "15px", padding : "5px 7px"}} onClick={()=>Decement()}>Decrement</button>

      </div>
    </>
  );
}

export default Counter;
