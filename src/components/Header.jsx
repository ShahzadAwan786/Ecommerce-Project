import React from 'react'
import { SearchBar } from './SearchBar'
import DarkTheme from './DarkTheme'
import NewProduct from './NewProduct'
 

const Header = ({onSearch,onAddProduct}) => {
    
    return (
        <header className='w-full h-17  px-4 flex items-center justify-between bg-background/95 backdrop-blur-lg 
        supports-backdrop-filter:bg-backgroung/60 top-0 sticky border-1 border-[#cacaca] dark:border-[#1c1c1c] z-50 dark:bg-[#1c1c1c]'>
            <div className='w-fit flex md:text-[21px] text-[18px] font-semibold dark:text-white'>Product Manager</div>
            <div className='flex items-center md:gap-2 '>
                <SearchBar onChange={onSearch}/>
                <DarkTheme />
                <NewProduct onAddProduct={onAddProduct}/> 
            </div>
        </header>
    )
}

export default Header