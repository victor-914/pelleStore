import React from "react";
import ItemDetails from "../../scenes/itemDetails/ItemDetails";
import api from "../../utils/api";
import CartMenu from "../../scenes/global/CartMenu";

function PerWomenWear({ products }) {
  return (
    <div>
      <CartMenu />
      <ItemDetails data={products} />
    </div>
  );
}

export default PerWomenWear;

export async function getStaticProps({ params }) {
  const response = await api(
    `/products/${params.womenId.toString()}/?populate=*`
  );
  const products = response?.data?.data;

  // Return product data as props
  return {
    props: {
      products,
    },
  };
}

export async function getStaticPaths() {
  const response = await api("/products");
  const products = response?.data?.data;
  const paths = products?.map((item) => ({
    params: { womenId: item.id.toString() },
  }));

  return { paths, fallback: false };
}
