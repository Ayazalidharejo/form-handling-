// import React, { useState } from 'react'

// const Todoapp = () => {
// let [inputvalues,setInputvalues]=useState("")
// let [todolist,setTodolists]=useState([])

// let Addlist= () => {
//     if (inputvalues==="") {
//         alert("write something")
//     }
//     setTodolists((prevns)=>[...prevns,inputvalues])
//     setInputvalues("")
//     return
   
// }

//   return (
//    <>
//    <div className='d-flex justify-content-center'>
// <input value={inputvalues} onChange={(e)=>{setInputvalues(e.target.value);
// }} type="text" />
// <button onClick={Addlist} >Add+</button>
//    </div>
//    <ul>
//    {
//     todolist.map((item)=>{
//      return(
//         <li>{item}</li>
//         )
//     })
//    } 
   
//    </ul>
//    </>
//   )
// }

// export default Todoapp