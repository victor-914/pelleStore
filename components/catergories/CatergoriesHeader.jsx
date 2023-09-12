import React from "react";
import styled from "styled-components";
import ing from "../../assets/products-page-heading.jpg";
import Image from "next/image";
const img = ing;
function CatergoriesHeader({image, text}) {
  return (
    <StyledCatergories>
      <main className="imgCont">
        <Image src={image} layout="fill" />
        <div className="headerText">{text}</div>
      </main>
    </StyledCatergories>
  );
}

export default CatergoriesHeader;

const StyledCatergories = styled.section`
  width: 100%;
  height: 60vh;
  position: relative;


  .imgCont {
    width: 100%;
    height: 100%;
  }

  

  .headerText {
    width: 100%;
    height: 50%;
    z-index: 3;
    position: absolute;
    bottom: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    color: #fff;
    letter-spacing: 1px;
    text-shadow: 5px 2px #000;
  }

  .latestProduct{
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-align: center;
    margin: auto;
    font-weight: 400;
    color: #000;
    letter-spacing: 0.5px;
  }
`;
