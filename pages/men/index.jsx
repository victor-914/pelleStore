import React from "react";
import CatergoriesHeader from "../../components/catergories/CatergoriesHeader";
import mensWear from "../../assets/products-page-heading.jpg";
import styled from "styled-components";
import ProductCarousel from "../../components/productsCard/ProductCard";
import api from "../../utils/api"

function MensWears(props) {
  return (
    <>
      <CatergoriesHeader image={mensWear} text="Our latest Products" />
      <StyledMensWears>
        <main className="contentHolder">
          {
            props?.products?.map((item) => (
              <>
             <ProductCarousel data={item} 
               page={"men"}
             />
              </>
            ))
          }
        </main>
      </StyledMensWears>
    </>
  );
}

export default MensWears;

const StyledMensWears = styled.section`
  width: 100%;
  height: auto;
padding-bottom: 100px;
  position: relative;
  .contentHolder {
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

  @media (min-width: 360px) and (max-width:"481px") {
    
  }
`;



export async function getStaticProps() {
  // Fetch product data from an API
  const response = await  api("/products?populate=*");
   const products = response?.data?.data


  // Return product data as props
  return {
    props: {
      products
    }
  };
}

