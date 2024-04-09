import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Hlocpay = () => {

    const navigate=useNavigate()
    const [data,setData]=useState('')
    
    let {id,locationId}=useParams()

    let id2=localStorage.getItem('id')

    let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
    
      let handleSubmit=async (event)=>{
        event.preventDefault()
        let response=await axios.post(`http://localhost:4000/hiringteam/addpayment/${id2}`,{Amount:data.total,Paymentstatus:'Paid',hiringId:id2,locationownerId:locationId})
        setData(data)
        console.log(data);
        navigate('/hiring/hlcbookst')
      }
        
      useEffect(()=>{
        let fetchdata=async ()=>{
            let response=await axios.get(`http://localhost:4000/hiringteam/viewlocreqd/${id}`)
            console.log(response.data);
            setData(response.data)
        }
        fetchdata()
    },[])

  return (
    <div className='hvloc '>
         <p className='text-center font-bold pt-32 text-[25px] text-white'>LOCATION PAYMENT</p>
       <form onSubmit={handleSubmit}>
         <div className='flex flex-wrap  '>
        <div className='text-white flex flex-wrap flex-col'>
            <div className='pt-8 '>
                <div className='flex flex-wrap gap-56 w-[470px] ms-20 '>
                    <p className='text-white '>Amount</p>
                    <p className='text-white'>{data.total}</p>
                </div>
            </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-5'>
                <label className='text-white '>Holder Name</label>
                    <input onChange={handleChange} type="text" className='bg-transparent border-white border-solid border-2 rounded h-9'/>
                </div>
            </div>
            <div>
                <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                <label className='text-white '>Card Number</label>
                <input onChange={handleChange} type="text" className='bg-transparent border-white border-solid border-2 rounded h-9'/>                </div>
             </div>
            
        
    </div>
    <div className='text-white flex flex-wrap flex-col'>
        
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-5'>
                    <p>MM/YY</p>
                    <input onChange={handleChange} type="text" name='mm/yy' className='bg-transparent border-white border-solid border-2 rounded'/>
                    </div>
        </div>
        <div>
        <div className='flex flex-wrap justify-between w-[470px] ms-20 py-3'>
                    <p>CVC</p>
                    <input onChange={handleChange} type="text" name='cvc' className='bg-transparent border-white border-solid border-2 rounded'/>
                    </div>
        </div>
        <button type='submit' className='ms-20 py-3 text-green-500'>Submit</button>
        
    </div>
    </div>
    </form>
    </div>
  )
}