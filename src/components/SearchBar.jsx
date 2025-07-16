import React from 'react'
import { IoIosSearch } from "react-icons/io";

export const SearchBar = ({onChange}) => {
    return (
        <div className='w-60 max-w-sm border-1 bg-white border-[#cacaca] flex relative rounded-lg '>

            <div className='flex items-center px-2 text-xl text-[#8f8e8e]'>
                <IoIosSearch className='' />
            </div>
            <div>
                <input type="text" placeholder='Search product...' className='py-2 w-full h-10 text-[15px] 
                     outline-none bg-transparent ' onChange={(e) => onChange(e.target.value)}/>

            </div>


        </div>
    )
}
