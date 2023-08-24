import React from "react";
import CatergoriesHeader from "../../components/catergories/CatergoriesHeader";
import mensWear from "../../assets/products-page-heading.jpg";
import styled from "styled-components";
import ProductCarousel from "../../components/productsCard/ProductCard";

function MensWears() {
  return (
    <>
      <CatergoriesHeader image={mensWear} text="Our latest Products" />

      <StyledMensWears>
        <main className="contentHolder">
  

  <ProductCarousel/>
  <ProductCarousel/>
  <ProductCarousel/>
  <ProductCarousel/>
  <ProductCarousel/>
  <ProductCarousel/>


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
