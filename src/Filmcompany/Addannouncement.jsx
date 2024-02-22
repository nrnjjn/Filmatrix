import React from 'react'

export const Addannouncement = () => {
  return (
    <div className='addanc flex flex-wrap flex-col'>
         <div className='text-center pt-36 font-bold text-3xl pb-10'>
          New Announcement
         </div>
         <div className='m-auto w-fit '>
          <div className='flex  flex-row pb-3 flex-wrap'>
            
            <input type="text" placeholder='Name' className='w-[237px]' />
          </div>
          <div className='flex flex-row pb-3 flex-wrap'>

            <input type="file" placeholder='Image' />
          </div>
          <div className='flex flex-row flex-wrap'>
   
            <textarea name="description" id="" cols="30" rows="10" placeholder='Description' className=''></textarea>
          </div>
          <button className='text-white bg-black rounded p-2 ml-20 mt-3'>Submit</button>
         </div>
    </div>
  )
}
