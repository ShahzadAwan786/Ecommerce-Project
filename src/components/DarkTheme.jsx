import React from 'react'
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";

import { useTheme } from './context';

const DarkTheme = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <div>
            <div >
            <button className=' px-3 py-3 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg cursor-pointer' onClick={toggleTheme}>
                    
                     {theme === 'light' ? <IoMoonOutline /> :<GoSun className='dark:text-amber-300 '/>
} 
                </button>
            </div>
        </div>
    )
}

export default DarkTheme