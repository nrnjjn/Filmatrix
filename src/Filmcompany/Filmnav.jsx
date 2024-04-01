import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';

const Filmnav = () => {
    const [locdrop,setLocdrop]=useState(false)
    const [odrop,setOdrop]=useState(false)
    const [ancdrop,setancDrop]=useState(false)

    let locdropdown=()=>{
        setLocdrop(!locdrop)
        setOdrop(false)
        setancDrop(false)
    }

    let otherdropdown=()=>{
        setOdrop(!odrop)
        setLocdrop(false)
        setancDrop(false)
    }
    let announcementdropdown=()=>{
        setancDrop(!ancdrop)
        setOdrop(false)
        setLocdrop(false)
    }
    let close=()=>{
        setLocdrop(false)
        setOdrop(false)
        setancDrop(false)
    }

  return (
    <div>
        <div className='flex flex-wrap fixed w-[100%] justify-between bg-black text-white p-3 text-[25px]'>
        <div className='fonts flex-1 ps-3'>
            Filmatrix
        </div>
        <div className='hidden flex-wrap justify-evenly sm:flex flex-1 text-[20px]'>
            <Link to='/filmcompany'><div onClick={close}>
                Home
            </div></Link>
            <Link to='/filmcompany/filmprof'><div onClick={close}>
                Profile
            </div></Link>
           
                <div className='hover:bg-slate-700 hover:p-1 active:rounded-lg hover:rounded-lg active:bg-slate-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>
                    <span onClick={announcementdropdown}>Announcement</span>
{ancdrop &&
            <div className='list-none absolute mt-3 -ml-1  bg-black text-white text-[16px] pt-2 ps-1 pe-1 pb-1'>
            <Link to='/filmcompany/addanc' className=''><li>Add announcement</li></Link>
            <Link to='/filmcompany/vanc' className=''> <li>View Announcement</li></Link>
            </div>
}
                </div>
               
            <Link to='/filmcompany/fcviewhcreq'>
                <div onClick={close}>Hiring</div>
                </Link>
           
           
            <div className=' hover:bg-slate-700 hover:p-1 active:rounded-lg hover:rounded-lg active:bg-slate-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>
                <span onClick={locdropdown}>Location</span>
{locdrop &&
            <div className='list-none absolute mt-3 -ml-3  bg-black text-white text-[16px] pt-2 ps-1 pe-1 pb-1 '>
            <Link to='/filmcompany/fcvloc' className=''><li>View Location</li></Link>
            <Link to='/filmcompany/fclocreq' className=''> <li>Booking request</li></Link>
        </div>
}


                </div>
            

            <Link to='/filmcompany/vprogress'>
            <div onClick={close}>Progress</div>
            </Link>
            <div className=' hover:bg-slate-700 hover:p-1 active:rounded-lg hover:rounded-lg active:bg-slate-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>
               <span onClick={otherdropdown}> Other</span>
{odrop &&
        <div className='list-none absolute mt-3  bg-black text-white text-[16px] pt-2 ps-1 pe-1 pb-1 w-40 -ml-10'>
            <Link to='/filmcompany/jobseekers' className=''><li>Crew</li></Link>
            <Link to='/filmcompany/hiringfd' className=''> <li>Hiring Feedback</li></Link>
            <Link to='/' className=''> <li>Logout</li></Link>
        </div>
}
            </div>
        </div>
    </div>
    <div onClick={close}>

    <Outlet/>
    </div>
    </div>
  )
}
export default Filmnav