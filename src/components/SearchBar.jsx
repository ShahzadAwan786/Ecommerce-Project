import React from 'react'
import { IoIosSearch } from "react-icons/io";

export const SearchBar = () => {
    return (
        <div className='w-60 max-w-sm border-2 border-[#f1eeee] flex relative rounded-lg'>

            <div className='flex items-center px-2 text-xl text-[#8f8e8e]'>
                <IoIosSearch className='' />
            </div>
            <div>
                <input type="text" placeholder='Search product...' className='py-2 w-full h-10 text-[15px] 
                     outline-none bg-transparent ' />

            </div>


        </div>
    )
}
