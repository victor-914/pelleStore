import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

function Addcatergory() {
  return (
    <div>
      <div class="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 class="text-2xl font-semibold mb-4">Add Category</h2>
        <form>
          <div class="mb-4">
            <label
              for="categoryName"
              class="block text-gray-700 font-semibold mb-1"
            >
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              class="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addcatergory;
Addcatergory.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
