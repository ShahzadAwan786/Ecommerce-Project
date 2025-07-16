import React from 'react'
import Cards from './Cards'

const CardsList = ({ products, onDelete, onUpdate}) => {
    const productsCategorylist = products.map(item=> item.category)
    const uniqueCategories = Array.from(new Set([...productsCategorylist]))
 
    return (
        <div className='flex gap-6 px-5 py-5'>
            <aside className='w-64 space-y-6 hidden md:block'>
                <div className='w-64 min-h-screen px-6 py-6 text-lg  border-1 border-[#cacaca] rounded-2xl'>
                 <h1 className='font-semibold'>Categories</h1>
                    <div className='text-md flex flex-col items-start space-y-1 my-5'>
                        {uniqueCategories.map((name)=> (
                            <button className='p-2 hover:bg-gray-100 w-full text-left rounded-lg text-[15px] font-medium'
                             onClick={()=>alert(name)}>{name.toUpperCase()}</button>
                        ))}
                    </div>
                </div>
            </aside>
          
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {products.map((product) => (
                    <Cards
                        product={product}
                        key={product.id} 
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                    />
                ))}
            </div> 
        </div>
    )
}

export default CardsList