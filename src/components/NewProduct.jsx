import React from 'react'
import { FiPlus } from "react-icons/fi";

const NewProduct = () => {
  return (
    <div className=''>
      <div className='flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg gap-2 ' >

        <FiPlus />

        <button>New Product</button>
      </div>
    </div>
  )
}

export default NewProduct