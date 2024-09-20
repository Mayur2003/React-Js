import React, { useEffect, useState } from 'react'

export default function Todo() {
    const[input,setInput] = useState("")
    const[data,setData] = useState([])
    const[editindex,setEditindex] = useState(null)

    useEffect(()=>{
        const Exist_data = JSON.parse(localStorage.getItem("stu")) || []
        setData(Exist_data)
    },[])

   const HandleEvent = (e) => {
    e.preventDefault()
    
    const Exist_data = JSON.parse(localStorage.getItem("stu")) || []
    setData([Exist_data])

    if(editindex !== null)
    {
        // Update Code 

        
        const Update = [...data]
        Update[editindex] = {input}
        setData(Update)
        localStorage.setItem("stu",JSON.stringify(Update))
    }
    else{

        
        const new_data = {input}
        setData([...data,new_data])
        localStorage.setItem("stu",JSON.stringify([...data,new_data]))
    }
    setInput("")
   }

   const HandleEdit = (index) => {
        setEditindex(index)
        setInput(data[index].input)
        
   }

   const HandleDelete = (index) => {
    const Del = data.filter((value,i)=> index !== i)
    setData(Del)
    localStorage.setItem("stu",JSON.stringify(Del))
   }
  return (
    <>
    <div style={{width : "30%",margin : "0 auto",border : "solid black 2px",marginTop : "5%",marginBottom : "10%"}}>

        <form onSubmit={(e)=>HandleEvent(e)} style={{marginTop : "5%" , marginBottom : "10%",textAlign : "center" }}>
                <h1>Grocery Shopping</h1>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} required   /> 
                <button>{editindex!==null ? "update" : "Save"}</button>
        </form>

        <table  style={{margin : "0 auto" , marginBottom : "5%", border : "solid black 2px",borderRadius : "5%", padding : "10px"}}>
            <thead>
                <tr>
                    <th>Id :- </th>
                    <th>Grocery Items</th>
                    <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((value,index)=>{
                        return <tr key={index}>
                            <th>{index + 1}</th>
                            <th>{value.input}</th>
                            <th><button onClick={()=>HandleEdit(index)}>Edit</button></th>
                            <th><button onClick={()=>HandleDelete(index)}> Delete</button></th>

                        </tr>
                    })
                }
            </tbody>

        </table>
    </div>


    
    
    
    </>          
  )
}
