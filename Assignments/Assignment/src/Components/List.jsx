import React from 'react'

export default function List() {
    const my = ["Use Array.map", "Not A For Loop","Give Each Item A Unique key","Avoid Using Array Index As The Key"]
    return (
    
    <>
    <div style={{width : "30%" , margin : "5% auto"}}>

        <h3>List View In React Js</h3>
        <ul>
            {
                my.map((value,index)=> {
                    return <li key={index}>
                        {value}

                    </li>
                })
            }
        </ul>
    
    
            </div>
    </>
  )
}
