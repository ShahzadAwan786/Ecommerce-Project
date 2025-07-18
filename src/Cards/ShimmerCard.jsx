import React from 'react'

export const ShimmerCard = () => {
  return (
     <div className='flex gap-6 px-3 py-5 dark:bg-black'>
            <aside className='w-64 space-y-6 hidden md:block'>
                <div className='w-64 h-22 px-6 py-6 text-lg font-semibold border-1 dark:bg-[#1c1c1c] dark:text-white border-[#cacaca] rounded-2xl'>
                    Categories
                </div>
            </aside>
          
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                 { Array.from({length:60}).map((_,i)=>(
                <main className='flex-1'>
                  
                               <div key={i} className='card group md:h-90 md:w-56 w-90 h-135 bg-[#ffffff] dark:bg-[#282828] rounded-2xl border-1 hover:shadow-md transition-shadow border-[#dedede]'>
                                   <div className='flex relative dark:bg-[#717171] bg-gray-100 hover:bg-gray-300 md:h-58 md:w-full w-full h-70 rounded-t-2xl'>
                                      
                                   </div>
                                
                                      
                                   
                                   <div className='px-4 py-2'>
                                       <div className='font-medium px-[18px] py-2 mt-4 mb-4 text-[13px] dark:bg-[#717171] bg-gray-100 rounded-2xl'></div>
                                       <div className='font-medium px-[22px] py-2 mb-4 text-[13px] dark:bg-[#717171] bg-gray-100 rounded-2xl'></div>
                                       <div className='font-medium px-[25px] py-2 mb-4 text-[13px] dark:bg-[#717171] bg-gray-100 rounded-2xl'></div>
                                   </div>
                                  
                                  
                               </div>
                              
                           </main>
                            ))}
            </div>
        </div>
  )
}
