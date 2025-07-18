import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DarkTheme from "../components/DarkTheme";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const ConfirmDialog = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-100 backdrop-brightness-20">
      <div className="bg-white p-6 rounded-lg shadow-lg w-125 border dark:bg-[#1c1c1c]  border-gray-200">
        <h1 className="text-lg font-bold mb-2 dark:text-gray-300">
          Are you sure?
        </h1>
        <p className="mb-4 text-gray-500 text-sm font-semibold dark:text-gray-400">
          {message}
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md dark:hover:text-black hover:bg-gray-100 transition-colors dark:text-gray-300"
          >
            Cancel
          </button>
          <Link
            to="/"
            // onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

const UpdateCard = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    stock: product.stock,
    image: product.images?.[0] || "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  const handlePrice = (e) => {
    const { name, value } = e.target;
    const processvalue = parseFloat(Math.max(0, value).toFixed(2));
    setFormData((pre) => ({
      ...pre,
      [name]: processvalue,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-100 dark:backdrop-brightness-40 backdrop-brightness-20">
      <div className="bg-white p-6 rounded-lg shadow-lg h-fit w-fit border dark:bg-[#1c1c1c]  border-gray-200 ">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold mb-4 dark:text-gray-300">
            Edit Product
          </h1>
          <IoMdClose
            className="cursor-pointer dark:text-gray-300"
            onClick={onCancel}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-75 py-2 px-3 text-gray-700 leading-tight
                  dark:text-gray-400               focus:outline-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-solid"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                htmlFor="category"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-75 py-2 px-3 text-gray-700 leading-tight
                    dark:text-gray-400          focus:outline-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-solid"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                 dark:text-gray-400            leading-tight focus:outline-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-solid"
              rows={3}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                htmlFor="stock"
              >
                Stock
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                min={0}
                value={formData.stock}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-75 py-2 px-3 text-gray-700
                dark:text-gray-400                 leading-tight focus:outline-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-solid"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
                htmlFor="price"
              >
                Price
              </label>
              <input
                type="Number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handlePrice}
                className="shadow appearance-none border rounded w-75 py-2 px-3 text-gray-700 leading-tight
                    dark:text-gray-400            focus:outline-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-solid"
                required
              />
            </div>
          </div>
          <div className="mb-7">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-300"
              htmlFor="image"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
           dark:text-gray-400                 focus:outline-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-solid"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 
                            transition-colors cursor-pointer"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Product_Page = () => {
  const [product, setProduct] = useState(null);

  const { productId } = useParams();
  const [showConfirm, setShowConfirm] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleSave = (updatedData) => {
    handleUpdate(product.id, updatedData);
    setShowEdit(false);
  };

  const handleUpdateCancle = () => {
    setShowEdit(false);
  };
  const handleDelete = () => {
    setShowConfirm(true);
  };

  //   const confirmDelete = () => {
  // //
  //   };

  const cancelDelete = () => {
    setShowConfirm(false);
  };

  useEffect(() => {
    if (productId) {
      fetchProduct(productId);
    }
  }, [productId]);

  const fetchProduct = async (id) => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(`Failed to fetch product`, error);
    }
  };

  const handleUpdate = async (productId, updatedData) => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${productId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ updatedData }),
      });
      const data = await res.json();

      setProduct((prev) => ({
        ...prev,
        ...updatedData,
      }));
    } catch (error) {
      console.log("Error updating product:", error);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <>
      {showConfirm && (
        <ConfirmDialog
          message={`This action cannot be undone. This will permanently delete the product.`}
          //   onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
      {showEdit && (
        <UpdateCard
          product={product}
          onSave={handleSave}
          onCancel={handleUpdateCancle}
        />
      )}
      <header
        className="w-full h-14  px-4 flex items-center justify-between bg-background/95 backdrop-blur-lg 
                supports-backdrop-filter:bg-backgroung/60 top-0 dark:bg-[#1c1c1c] sticky border-1
                 border-[#cacaca] dark:border-[#1c1c1c] z-50"
      >
        <div className="w-fit flex justify-center items-center md:text-[21px] text-[18px] dark:text-white font-semibold gap-4">
          <FaArrowLeftLong
            onClick={() => window.history.back()}
            className="text-sm font-light cursor-pointer"
          />
          {product.title}
        </div>
        <div className="flex items-center md:gap-2 ">
          <DarkTheme />
        </div>
      </header>
      <div className=" mx-auto p-8 bg-white dark:bg-[#1c1c1c]">
        <div className="flex flex-col md:flex-row gap-8 ">
          <div className="md:w-1/2 bg-gray-200 dark:bg-gray-400 rounded-2xl">
            <img
              src={product.thumbnail || product.image}
              alt={product.title}
              className="w-full h-full translation-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 px-3">
            <h1 className="text-3xl font-bold mb-4 dark:text-white">
              {product.title}
            </h1>
            <div className="mb-4 space-x-3">
              <span className="bg-gray-100 dark:bg-gray-600 dark:text-white px-3 py-1 rounded-full text-sm font-semibold">
                🏷️{product.category}
              </span>
              {product.tag&&(<span className="bg-gray-100 dark:bg-gray-600 dark:text-white px-3 py-1 rounded-full text-sm font-semibold">
                {product.tags}
              </span>)}
              
              <span className="bg-gray-100 dark:bg-gray-600 dark:text-white px-3 py-1 rounded-full text-sm ">
                ⭐{product.rating}
              </span>
            </div>
            <div className="text-4xl font-bold text-blue-600 mb-4">
              ${product.price}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              📦 {product.stock} in stock
            </div>
            <div className=" font-bold mb-4 dark:text-white"> Description</div>
            <p className="text-gray-500 mb-4 dark:text-gray-400">
              {product.description}
            </p>
            <div className="w-full h-60 border-1 border-gray-300 dark:border-[#4f4f4f] rounded-2xl p-5">
              <h1 className="font-bold text-semibold dark:text-white">
                Additional Information
              </h1>
              <div className="mb-3 space-x-2">
                <h2 className="text-sm mb-2 mt-4 font-semibold dark:text-white">
                  Tags
                </h2>
                <span className="border-1 border-gray-300 dark:border-[#4f4f4f] px-2 py-1 rounded-full text-[13px] dark:bg-gray-600 dark:text-white ">
                  {product.category}
                </span>
               {product.tag&&(<span className="bg-gray-100 dark:bg-gray-600 dark:text-white px-3 py-1 rounded-full text-sm font-semibold">
                {product.tags}
              </span>)}
              </div>
              <h1 className="text-sm mb-1 font-semibold dark:text-white">
                Dimensions
              </h1>
              <div className="text-[13px] flex row-1 items-center mb-2 dark:text-white">
                {product.dimensions.width}
                <IoMdClose />
                {product.dimensions.height}
                <IoMdClose />
                {product.dimensions.depth}
              </div>
              <h1 className="text-sm font-semibold mb-2 dark:text-white">
                Weight
              </h1>
              <div className="text-sm font-semibold dark:text-white">
                {product.weight}
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 md:py-4 py-4">
              <button
                onClick={handleEdit}
                className=" border-1 border-[#dedede] dark:border-[#4f4f4f] md:text-[14px] text-lg font-semibold flex justify-between items-center gap-2 md:px-27 px-10 py-2 md:py-2 rounded-lg cursor-pointer bg-blue-500 text-white hover:bg-blue-400"
              >
                <BiSolidEdit /> Edit
              </button>
              <button
                onClick={handleDelete}
                className="border-1 border-[#dedede] dark:border-[#4f4f4f] md:text-[14px] text-lg font-semibold flex justify-between items-center gap-2 md:px-27 md:py-2 px-10 py-2 rounded-lg cursor-pointer hover:bg-red-500 hover:text-white text-red-500"
              >
                <RiDeleteBin6Line /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product_Page;
