import React from 'react'
import { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";


const AddProduct = ({ product, onCancel, onSave }) => {

  const [formData, setFormData] = useState({
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    stock: product.stock,
    image: product.images?.[0]
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData( pre => ({
      ...pre,[name]:value
    })
    );
  }
const handlePrice = (e) => {
    const { name, value } = e.target;
    const processedValue = parseFloat(Math.max(0, value).toFixed(2));

    setFormData((pre) => ({
      ...pre,
      [name]: processedValue,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData)
  }
  return (
    <div className="fixed inset-0 h-fit w-fit flex justify-self-center md:top-[30%] top-[100%] z-50">
      <div className="bg-white dark:bg-[#1c1c1c] p-6 rounded-lg shadow-lg w-full border border-gray-200 ">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold mb-4 dark:text-gray-300">Add Product</h1>
          <IoMdClose className="cursor-pointer dark:text-gray-300" onClick={onCancel} />
        </div>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className="flex flex-wrap gap-4">
            <div className="mb-4">
              <label className="block dark:text-gray-300 text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-75 py-2 px-3 text-gray-700 dark:text-gray-400 leading-tight
                 focus:outline-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-solid"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300" htmlFor="category">
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-75 py-2 px-3 dark:text-gray-400 text-gray-700 leading-tight
                focus:outline-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-solid"
                required
              />
            </div>

          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-400
               leading-tight focus:outline-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-solid"
              rows={3}
              required
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="stock">
                Stock
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                min={0}
                value={formData.stock}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-75 py-2 px-3 text-gray-700 dark:text-gray-400
                leading-tight focus:outline-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-solid"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="price">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"

                value={formData.price}
                onChange={ handlePrice}
                className="shadow appearance-none border rounded w-75 py-2 px-3 text-gray-700 dark:text-gray-400 leading-tight
                focus:outline-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-solid"
                required
              />
            </div>
          </div>
          <div className="mb-7">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="image">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-400 leading-tight 
               focus:outline-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-solid"
              required
            />
          </div>
          <div className="flex justify-end">

            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 
               transition-colors cursor-pointer"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}


const NewProduct = ({ onAddProduct }) => {
  const [addProduct, setAddProduct] = useState(false)
  const handleAddProduct = () => {
    setAddProduct(true)
  }
  const handleSave = (addProduct) => {
    onAddProduct(addProduct)
    setAddProduct(false)
  }
  const handleCancle = () => {
    setAddProduct(false)
  }

  return (
    <>
      <div className='flex relative'>
        {addProduct && <AddProduct
          product={{}}
          onSave={handleSave}
          onCancel={handleCancle} />}
      </div>

     
        <div onClick={handleAddProduct} className='flex items-center bg-blue-600 text-white md:px-4 
        md:py-2 px-3 py-1 rounded-lg md:gap-2 cursor-pointer' >
          <FiPlus />
          <button className='flex text-[10px] md:text-[16px] cursor-pointer '>New Product</button>
        </div>
    
    </>
  )
}

export default NewProduct