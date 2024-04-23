import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export const Hvancdetail = () => {
  const [data,setdata]=useState([''])
  // let id=localStorage.getItem('id')
let {id}=useParams()
console.log(id);
  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get(`http://localhost:4000/hiringteam/viewancd/${id}`)
      console.log(response.data);
      if(response.data){
          setdata(response.data)
        }
    }
    fetchdata()
  },[])
  return (
    <div className='pt-36 hviewanc'>
      
        <div className='bg-slate-950/50 w-[850px] h-[450px] m-auto flex gap-2 '>
          
            <img src={`http://localhost:4000/uploads/${data.Image}` } alt="" className='w-80 h-80  ps-3 pt-3 '/>
            <div className='flex flex-wrap flex-col'>
            <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Film Name:</p>
            <p>{data.Filmname}</p>
            </div>
            <div className='flex flex-wrap text-white gap-10 pt-3 text-center'>
            <p className='font-bold'>Description:</p>
            <p className='text-left w-[60%]'>
              {data.description}
            </p>
            </div>
            <div className='flex flex-wrap justify-center '>
                <Link to={`/hiring/hreqdescription/${data._id}`}><button className='text-yellow-400'>Apply</button></Link>
            </div>
            </div>
        </div>  


        
    
    </div>
  )
}