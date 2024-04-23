import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Addjob = () => {
let id=localStorage.getItem('id')
const navigate=useNavigate()
const [data,setData]=useState('')
const [view,setView]=useState([])

const [data2,setData2]=useState([''])

let handleChange=(event)=>{
  setData({...data,[event.target.name]:event.target.value})
  console.log(data)
}

let handleSubmit=async (event)=>{
  event.preventDefault()
  setData(data)
  console.log(data);
  navigate('/hiring/hviewjob')
  let response=await axios.post('http://localhost:4000/hiringteam/addjob',{...data,userId:id})
       console.log(response);
  
}

useEffect(()=>{
  let fetchdata=async()=>{
    let response=await axios.get(`http://localhost:4000/filmcompany/viewlocfname/${id}`)
    setData2(response.data)
    let response_categories=await axios.get(`http://localhost:4000/admin/viewcategory/`)
    setView(response_categories.data)
  }
  fetchdata()
},[])
console.log(data2);
  return (
    <div className='addanc  '>
        <div className='text-center pt-24 font-bold text-3xl  text-white '>
          New Job
         </div>
         <form className='pt-4' onSubmit={handleSubmit}>
         <div className='m-auto  w-fit '>
          <div className='flex  flex-row pb-3 flex-wrap'>
            
            <input onChange={handleChange} name='Job' type="text" placeholder='Job' className='w-[237px] h-9 placeholder:text-center bg-transparent placeholder:text-white border-2 rounded text-white' />
          </div>
          
          <select onChange={handleChange} className='h-9 w-56 bg-white rounded-r-lg text-black pl-2 mt-3 mb-3'  name="ancId" >
              <option value="">Filmname</option>
         {data2.map((item)=>(
          <option  value={item.anc?._id}>
            {item.anc?.Filmname}
          </option>
         ))}
           </select>




           
          <div className='flex  flex-row pb-3 flex-wrap'>
            
            <input onChange={handleChange} name='Vacancy' type="number" placeholder='Vacancy' className='w-[237px] h-9 placeholder:text-center bg-transparent placeholder:text-white border-2 rounded text-white' />
          </div>


          <select onChange={handleChange} className='h-9 w-56 bg-white rounded-r-lg text-black pl-2 mt-3 mb-3'  name="category" >
              <option value="">Category</option>
         {view.map((item)=>(
          <option  value={item?._id}>
            {item?.name}
          </option>
         ))}
           </select>


          <div className='flex flex-row flex-wrap'>
   
            <textarea onChange={handleChange} name="Description" id="" cols="30" rows="10" placeholder='Description' className='placeholder:text-center placeholder:text-white border-2 rounded bg-transparent text-white'></textarea>
          </div>
          <button type='submit' className='text-white bg-black rounded p-2 ml-20 mt-3'>Submit</button>
         </div>
         </form>
    </div>
  )
}