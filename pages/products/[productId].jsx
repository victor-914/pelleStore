import React from "react";
import ItemDetails from "../../scenes/itemDetails/ItemDetails";
import api from "../../utils/api";

function PerProduct({ productResult }) {
  return (
    <div>
      <ItemDetails data={productResult} />
    </div>
  );
}

export default PerProduct;

export async function getStaticProps({ params }) {
  const response = await api(
    `https://pellestore-new-strapi.onrender.com/api/products/${params.productId.toString()}/?populate=*`
  );

  let productResult = response.data;
  // Return product data as props
  return {
    props: {
      productResult,
    },
  };
}

export async function getStaticPaths() {
  const response = await api(
    "https://pellestore-new-strapi.onrender.com/api/products"
  );

  const products = response?.data?.data;
  // console.log(products, "ddh");
  const paths = products?.map((item) => ({
    params: { productId: item.id.toString() },
  }));

  return { paths, fallback: false };
}
