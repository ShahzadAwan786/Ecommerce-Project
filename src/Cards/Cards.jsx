import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

const ConfirmDialog = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-brightness-20 ">
      <div className="bg-white dark:bg-[#1c1c1c] p-6 rounded-lg shadow-lg w-125 border border-gray-200">
        <h1 className="text-lg font-bold mb-2 dark:text-white">
          Are you sure?
        </h1>
        <p className="mb-4 text-gray-500 dark:text-gray-300 text-sm font-semibold">
          {message}
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md dark:hover:text-black hover:bg-gray-100 dark:bg-[#373737] dark:text-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const UpdateCard = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: product.title,
    price: product.price || "",
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
    const processedValue = parseFloat(Math.max(0, value).toFixed(2));

    setFormData((pre) => ({
      ...pre,
      [name]: processedValue,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-brightness-20">
      <div className="bg-white dark:bg-[#1c1c1c] p-6 rounded-lg shadow-lg h-fit w-fit border border-gray-200 ">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold mb-4 dark:text-white">
            Edit Product
          </h1>
          <IoMdClose
            className="cursor-pointer dark:text-gray-300 "
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
                         dark:text-gray-400        focus:outline-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-solid"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
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
                className="shadow appearance-none border rounded w-75 py-2 px-3 dark:text-gray-400 text-gray-700 leading-tight
                              focus:outline-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-solid"
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
                  dark:text-gray-400           leading-tight focus:outline-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-solid"
              rows={3}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
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
                  dark:text-gray-400               leading-tight focus:outline-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-solid"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
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
                  dark:text-gray-400    focus:outline-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-solid"
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
              dark:text-gray-400              focus:outline-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-solid"
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

const Cards = ({ product, onDelete, onUpdate }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const navigate = useNavigate();
  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleSave = (updatedData) => {
    onUpdate(product.id, updatedData);
    setShowEdit(false);
  };

  const handleUpdateCancle = () => {
    setShowEdit(false);
  };
  const handleDelete = () => {
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    onDelete(product.id);
    setShowConfirm(false);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
  };
  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <>
      <div className="flex relative ">
        {showConfirm && (
          <ConfirmDialog
            message={`This action cannot be undone. This will permanently delete the product.`}
            onConfirm={confirmDelete}
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

        <main className="flex-1">
          <div className="card group md:h-107 md:w-56 w-90 h-120 bg-[#ffffff] dark:bg-[#282828] rounded-2xl border-1 hover:shadow-md transition-shadow border-[#dedede]">
            <div onClick={handleCardClick}>
              <div className="flex relative dark:bg-[#717171] dark:group-hover:bg-[#a5a3a3] bg-gray-100 group-hover:bg-gray-300 md:h-58 md:w-full w-full h-70 rounded-t-2xl">
                <img
                  src={product.images?.[0] || "/bed.png"}
                  alt={product.title}
                  className="absolute w-full h-full object-contain translation-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="font-semibold px-4 pt-3 flex relative dark:text-white group-hover:text-blue-500 min-h-15">
                {product.title}
              </h2>
            </div>
            <div className="px-4 py-2">
              <span className="font-medium px-2 py-1 text-[13px] dark:bg-gray-600 dark:text-white bg-gray-100 rounded-2xl">
                {product.category}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-blue-600 px-4">
                ${product.price}
              </span>
              <span className="px-4 text-[14px] max-h-5 text-gray-500 dark:text-gray-300">
                Stock: {product.stock}
              </span>
            </div>
            <div className="flex justify-center items-center gap-3 md:py-3 py-2">
              <button
                onClick={handleEdit}
                className="border-1 border-[#dedede] dark:border-[#4f4f4f] dark:text-white md:text-sm text-lg font-semibold flex justify-between items-center gap-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <BiSolidEdit /> Edit
              </button>
              <button
                onClick={handleDelete}
                className="border-1 dark:border-[#4f4f4f] border-[#dedede] md:text-sm text-lg font-semibold flex justify-between items-center gap-2 px-5 py-2 rounded-lg cursor-pointer hover:bg-red-500 hover:text-white text-red-500"
              >
                <RiDeleteBin6Line /> Delete
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Cards;
