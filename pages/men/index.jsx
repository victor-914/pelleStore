import React, { useState } from "react";
import CatergoriesHeader from "../../components/catergories/CatergoriesHeader";
import mensWear from "../../assets/products-page-heading.jpg";
import styled from "styled-components";
import ProductCarousel from "../../components/productsCard/ProductCard";
import api from "../../utils/api";
import Pagination from "../../components/pagination/Pagination";
import useSWR from 'swr'
import { fetcher } from "../../utils/api";

function MensWears({products}) {
  const [pageIndex, setPageIndex] = useState(1);
  const { data} = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/products?populate=*&pagination[page]=${pageIndex}&pagination[pageSize]=1`,
    fetcher,
    {
      fallbackData: products
    }
  );

  return (
    <>
      <CatergoriesHeader image={mensWear} text="Our latest Products" />
      <StyledMensWears>
        <main className="contentHolder">
          {data?.data?.map((item) => (
            <>
              {console.log(item,"item")}
              <ProductCarousel data={item} page={"men"} />
            </>
          ))}
        </main>
        <Pagination
          data={data?.meta}
          stateIndex={pageIndex}
          setstateIndex={setPageIndex}
        />
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

  @media (min-width: 360px) and (max-width: "481px") {
  }
`;

export async function getStaticProps() {
  const response = await api.get("/products?populate=*&pagination[page]=1&pagination[pageSize]=1");
  const products = response?.data;

  // Return product data as props
  return {
    props: {
      products,
    },
  };
}

// export async function getStaticProps() {
//   const filmsResponse = await fetcher(
//     `${process.env.NEXT_PUBLIC_STRAPI_URL}/films?pagination[page]=1&pagination[pageSize]=5`
//   );
//   return {
//     props: {
//       films: filmsResponse,
//     },
//   };
// }
