import React from 'react'
import { SearchBar } from './SearchBar'
import DarkTheme from './DarkTheme'
import NewProduct from './NewProduct'

const Header = () => {
    return (
        <header className='w-full h-16 px-4 flex items-center justify-between bg-[#f9f9f9] backdrop-blur-md'>
            <div className='flex text-[21px] font-semibold '>Product Manager</div>
            <div className='flex items-center gap-4 px-6'>
                <SearchBar />
                <DarkTheme />
                <NewProduct /> 
            </div>
        </header>
    )
}

export default Header