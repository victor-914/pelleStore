import React from 'react'
import ItemDetails from '../../scenes/itemDetails/ItemDetails'
import api from "../../utils/api"
import CartMenu from '../../scenes/global/CartMenu'


function PerMensWear({productsResult}) {
  return (
    <div>
      <CartMenu/>
        {/* <ItemDetails data={products}/>    */}
    </div>
  )
  
}

export  default PerMensWear


export async function getStaticProps({params}) {


  const response = await  api(`/products/${params.mensId.toString()}/?populate=*`);
  const productsResult = response?.data?.data

  // Return product data as props
  return {
    props: {
      productsResult
    }
  };
}

export async function getStaticPaths() {

  const response = await  api("/products");
   const products = response?.data?.data
  const paths = products?.map(item => ({
    params: { mensId: item?.id?.toString() }
  }));

 

  return { paths, fallback: false };
}



