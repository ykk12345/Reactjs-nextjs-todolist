"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc }])
    settitle("")
    setdesc("")
    console.log(mainTask)
  }
 
  const deleteHandler=(i)=>{
   let copytask = [...mainTask]
   copytask.splice(i,1)
   setmainTask(copytask)
  }
  let rendertask = <h2>No Task Availabale</h2>
 if(mainTask.length>0){

  rendertask =  mainTask.map((t,i)=>{
    return (
      <li key={i} className='flex items-center justify-between mb-8 '>
    <div className='flex justify-between mb-5 w-2/3'> 
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-lg font-semibold'>{t.desc}</h6>
    </div>
    <button onClick={()=>{
      deleteHandler(i)
    }}
    className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
    </li>
    );
   });

 }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl text-center' > Yash kaushik todolist </h1>
    
    <form onSubmit={submitHandler}>

      <input type='text' className='border-zinc-800 border-2 m-5 px-4 py-2' placeholder='enter title here' 
      value={title} onChange ={(e)=>{  // 2 way binding
    settitle(e.target.value)
      }}  />
      
      <input type='text' className='border-zinc-800 border-2 m-5 px-4 py-2' placeholder='enter description  here' 
      value={desc} onChange={(e)=>{   // 2 way binding
       setdesc(e.target.value)
      }}/>
        
      <button className=' bg-black  text-white  px-4 py-3 text-2xl font-bold rounded \'>Add Task </button>

      <hr/>
      <div className='p-8 bg-slate-200'>
        <ul>
          {rendertask}
        </ul>
        </div> 
     
    </form>



    </>
  )
}

export default page


