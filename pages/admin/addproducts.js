import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

function AddProducts() {
  return (
    <div>
      <div class="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 class="text-2xl font-semibold mb-4">Add Product</h2>
        <form>
          <div class="mb-4">
            <label
              for="productName"
              class="block text-gray-700 font-semibold mb-1"
            >
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              class="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div class="mb-4">
            <label
              for="productDescription"
              class="block text-gray-700 font-semibold mb-1"
            >
              Product Description
            </label>
            <textarea
              id="productDescription"
              name="productDescription"
              class="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>
          <div class="md:flex md:space-x-4">
            <div class="mb-4 md:w-1/2">
              <label
                for="productPrice"
                class="block text-gray-700 font-semibold mb-1"
              >
                Price
              </label>
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                class="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div class="mb-4 md:w-1/2">
              <label
                for="productImage"
                class="block text-gray-700 font-semibold mb-1"
              >
                Product Image URL
              </label>
              <input
                type="url"
                id="productImage"
                name="productImage"
                class="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;

AddProducts.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
