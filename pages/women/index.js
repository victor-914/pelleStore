import React from "react";
import CatergoriesHeader from "../../components/catergories/CatergoriesHeader";
import WomenWear from "../../assets/products-page-heading.jpg";
import styled from "styled-components";
import ProductCarousel from "../../components/productsCard/ProductCard";
import api from "../../utils/api"
import CartMenu from "../../scenes/global/CartMenu";

function WomenWears(props) {
//    console.log(props,"props")
  return (
    <>
      <CartMenu/>
      <CatergoriesHeader image={WomenWear} text="Our latest Products" />
      <StyledWomenWears>
        <main className="contentHolder">
          {
            props.products.map((item) => (
              <>
             <ProductCarousel data={item} 
               page={"women"}
             />
              </>
            ))
          }
        </main>
      </StyledWomenWears>
    </>
  );
}

export default WomenWears;

const StyledWomenWears = styled.section`
  width: 100%;
  height: auto;
padding-bottom: 100px;

  /* padding-top: 20px; */
  position: relative;
  .contentHolder {
    /* background-color: red; */
    width: 80%;
    padding-top: 30px;
    margin: auto;
    position: relative;
    height: auto;
    gap: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;



export async function getStaticProps() {
  // Fetch product data from an API
  const response = await  api("/products");
   const products = response?.data
  

  // Return product data as props
  return {
    props: {
      products
    }
  };
}

