export function filterByCategory(data, catergory) {
  let filteredData = [];
  data.forEach((ele) => {
    if (ele.attributes.product_catergory === catergory) {
      filteredData.push(ele);
    }
  });
  return filteredData;
}
