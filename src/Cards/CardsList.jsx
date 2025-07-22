import React from "react";
import Cards from "./Cards";

const CardsList = ({ products, onDelete, onUpdate, onFilter,  onPagination }) => {
  const productsCategorylist = products.map((item) => item.category);
  const uniqueCategories = Array.from(new Set([...productsCategorylist]));

  const handlenext = () => {
   onFilter((prev) => ({ ...prev, skip: prev.skip + prev.limit }))
  };
 
  const handlepre = () => {
    onFilter((prev) => ({...prev, skip: prev.skip - prev.limit}))
  };
 
  const isFirstPage = onPagination.skip === 0;
  const isLastPage = onPagination.skip + onPagination.limit >= onPagination.total;

  return (
    <div className="flex gap-6 px-3 py-5 dark:bg-black">
      <aside className="w-64 space-y-6 hidden md:block">
        <div className="w-64 min-h-screen px-6 py-6 text-lg  border-1 border-[#cacaca] dark:bg-[#1c1c1c] rounded-2xl">
          <h1 className="font-semibold dark:text-white">Categories</h1>
          <div className="text-md flex flex-col items-start space-y-1 my-5">
            {uniqueCategories.map((name) => (
              <button
                className="p-2 hover:bg-gray-100 dark:hover:text-black w-full text-left rounded-lg text-[15px] dark:bg-[#313030] dark:text-white font-medium"
                onClick={() => alert(name)}
              >
                {name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <Cards
              product={product}
              key={product.id}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </div>
        <div className="flex justify-center items-center gap-5 mt-5">
          <button
            onClick={handlepre}
            disabled={isFirstPage}
            className={`bg-blue-600 text-white px-6 py-2 rounded-2xl  ${
              isFirstPage?'bg-gray-300 cursor-not-allowed':'cursor-pointer hover:bg-blue-500'
            }`}
            
          >
            Preview
          </button>
          <button
            onClick={handlenext}
            disabled={isLastPage}
            className={`bg-blue-600 text-white px-6 py-2 rounded-2xl ${isLastPage?'bg-gray-300 cursor-not-allowed':'hover:bg-blue-500 cursor-pointer'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardsList;
