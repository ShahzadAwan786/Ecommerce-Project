import React from 'react'
import { IoIosSearch } from "react-icons/io";

export const SearchBar = ({onChange}) => {
    return (
        <div className='md:w-60 w-42 max-w-sm border-1 bg-white dark:bg-[#1c1c1c] dark:text-[#8f8e8e] dark:border-[#8f8e8e] border-[#cacaca] flex relative rounded-lg '>

            <div className='flex items-center px-2 text-xl text-[#8f8e8e]'>
                <IoIosSearch className='' />
            </div>
            <div>
                <input type="text" placeholder='Search product...' className='py-2 w-full h-9 text-[15px] 
                     outline-none bg-transparent ' onChange={(e) => onChange(e.target.value)}/>

            </div>


        </div>
    )
}
