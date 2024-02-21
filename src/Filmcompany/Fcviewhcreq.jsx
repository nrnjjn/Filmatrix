import React from 'react'

export const Fcviewhcreq = () => {
  return (
    <div className='fcviewhcreq text-white'>
    <div className='text-white pt-36 text-center mb-3 text-[25px]'> HIRING TEAM REQUEST</div>
    
<form class="max-w-lg mx-auto h-5 ">
    <div class="flex">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-950/50 dark:hover:bg-gray-700 dark:focus:ring-gray-700/50 dark:text-white " type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-950/50">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
            </li>
            <li>
                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
            </li>
            </ul>
        </div>
        <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-white bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-950/50 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:border-blue-500" placeholder="Search Here..." required />
            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-950/50 rounded-e-lg border border-blue-700 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-950/50 dark:hover:bg-gray-700 dark:focus:ring-blue-800/50">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>

<div class=" pt-14 overflow-x-auto shadow-md sm:rounded-lg  ">
    <table class="w-full text-sm text-center rtl:text-right  text-gray-500 dark:text-gray-400 dark:bg-gray-950/50">
        <thead class="text-xs text-white uppercase  dark:bg-gray-950/50 dark:text-gray-400">
            <tr >
                <th scope="col" class="px-3 py-3">
                    SLNO
                </th>
                <th scope="col" class="px-1 py-3">
                    HIRING TEAM NAME
                </th>
                <th scope="col" class="px-1 py-3">
                    EMAIL
                </th>
                <th>PHONE NO</th>
                <th >Liscence</th>
                <th scope="col" class="px-1 py-3">
                    DATE
                </th>
                <th>
                </th>
                <th>

                </th>
            </tr>
        </thead>
        <tbody>
            <tr class=" dark:border-gray-700 text-white hover:bg-slate-800/50 ">
                <td scope="row" class="px-1 py-4">
                    1
                </td >
                <td >
                    Rajkamal
                </td>
                <td >
                    rkml@gmail.com
                </td>
                <td>9946532902</td>
                <td >
                    <button className='text-green-500 bg-black rounded w-14 h-6 text-center'> More</button>
                </td>
                <td >
                23-01-2024
                </td>
                <td >
                    <button className='text-green-500 bg-black rounded w-14 h-6 text-center'>Accept</button>
                </td>
                <td>
                    <button className='text-red-600 bg-black rounded w-14 h-6 text-center'>Reject</button>
                </td>
            </tr>



            <tr class=" dark:border-gray-700 text-white hover:bg-slate-800/50 ">
                <td scope="row" class="px-1 py-4">
                    2
                </td>
                <td class="px-1 py-4">
                    Sun Pictures
                </td>
                <td class="px-1 py-4">
                    sunp@gmail.com
                </td>
                <td>9946532902</td>
                <td >
                    <button className='text-green-500 bg-black rounded w-14 h-6 text-center'> More</button>
                </td>
                <td >
                23-01-2024
                </td>
                <td >
                    <button className='text-green-500 bg-black rounded w-14 h-6 text-center'>Accept</button>
                </td>
                <td>
                    <button className='text-red-600 bg-black rounded w-14 h-6 text-center'>Reject</button>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>
</div>

  )
}