import React from 'react'
import img from '../Images/cameraman.jpg'
import { Link } from 'react-router-dom'
export const Hvpwd = () => {
  return (
    <div className='hpw pt-40'>
        <div className='bg-slate-950/50 w-[800px] h-[410px] m-auto flex flex-wrap gap-2 '>
            <img src={ img } alt="" className='w-80 h-80  ps-3 pt-3 '/>
            <div className='flex flex-wrap flex-col'>
            <div className='flex flex-wrap text-white gap-12 pt-3 text-center'>
            <p className='font-bold'>Job:</p>
            <p>Camera man</p>
            </div>
            <div className='flex flex-wrap text-white gap-10 pt-3 text-center'>
            <p className='font-bold'>Details:</p>
            <p className='text-left'>Athirapilly Falls is situated in Athirapilly Panchayat  
                <br />in Chalakudy Taluk of Thrissur District in Kerala,
                <br /> India on the Chalakudy River, which originates  
                <br />from the upper reaches of the Western Ghats at 
                 <br />the entrance to the Sholayar ranges. It is the  
             <br />largest waterfall in Kerala, which stands tall at <br /> 81.5 feet.</p>
            </div>
            <div className='flex flex-wrap text-white pt-3 text-center gap-4'>
              <p className='font-bold'>From Date:</p>
              <p>24-02-2020</p>
              
            </div>
            <div className='flex flex-wrap text-white pt-3 text-center gap-12'>
              <p className='font-bold'>To Date:</p>
              <p>24-02-2024</p>
              
            </div>
            
            </div>
        </div>  
    </div>
  )
}