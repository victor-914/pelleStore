import React from 'react'
import ItemDetails from '../../scenes/itemDetails/ItemDetails'
import api from "../../utils/api"
import CartMenu from '../../scenes/global/CartMenu'


function PerMensWear() {
  return (
    <div>
      <CartMenu/>
        <ItemDetails/>   
    </div>
  )
  
}

export  default PerMensWear


export async function getStaticProps() {


  const products = []

  

  // Return product data as props
  return {
    props: {
      products
    }
  };
}

export async function getStaticPaths() {

  const response = await  api("/products");
   const products = response?.data
  const paths = products.map(item => ({
    params: { mensId: item.product_id.toString() }
  }));

  return { paths, fallback: false };
}



