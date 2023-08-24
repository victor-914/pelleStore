import React from "react";

function Products() {
  return (
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 class="text-2xl font-semibold mb-4">Product List</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead>
            <tr>
              <th class="px-4 py-2">Product Name</th>
              <th class="px-4 py-2">Price</th>
              <th class="px-4 py-2">Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-2">Product 1</td>
              <td class="px-4 py-2">$49.99</td>
              <td class="px-4 py-2">10</td>
            </tr>
            <tr>
              <td class="px-4 py-2">Product 2</td>
              <td class="px-4 py-2">$29.99</td>
              <td class="px-4 py-2">5</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-between mt-4">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Previous
        </button>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Next
        </button>
      </div>
    </div>
  );
}

export default Products;
