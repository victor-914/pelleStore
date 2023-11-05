import React, { useState, useEffect } from "react";
import CatergoriesHeader from "../../components/catergories/CatergoriesHeader";
import mensWear from "../../assets/products-page-heading.jpg";
import styled from "styled-components";
import ProductCarousel from "../../components/productsCard/ProductCard";
import api from "../../utils/api";
import Pagination from "../../components/pagination/Pagination";
import useSWR from "swr";
import { fetcher } from "../../utils/api";
import { useRouter } from "next/router";
import { filterByCategory } from "../../utils/helperFunctions";
import Loading from "../../components/loading/Loading";

function ProductListing({ productResult }) {
  const [pageIndex, setPageIndex] = useState(1);
  const [product, setProduct] = useState([]);
  const [state, setState] = useState("loading");

  const router = useRouter();
  const { data } = useSWR(
    `https://pellestore-new-strapi.onrender.com/products?populate=*&pagination[page]=${pageIndex}&pagination[pageSize]=1`,
    fetcher,
    {
      fallbackData: productResult,
    }
  );

  useEffect(() => {
    setState("loading");
    setProduct(filterByCategory(data?.data, router.query.catergory));
    setState("success");
    return () => {
      setProduct([]);
    };
  }, [data, productResult, router.isReady]);

  //   const catergories = ["men", "women", "girls", "boys", "Accessories"];
  return (
    <>
      {/* {state === "loading" ? <Loading /> : null} */}
      {/* {state === "success" ? ( */}
      <>
        <CatergoriesHeader image={mensWear} text="Our latest Products" />
        <StyledProductListing>
          {product.length !== 0 ? (
            <main className="contentHolder">
              {product?.map((item) => (
                <>
                  <ProductCarousel data={item} page={"men"} />
                </>
              ))}
            </main>
          ) : (
            <div className="noProduct">No product yet</div>
          )}
          <Pagination
            data={data?.meta}
            stateIndex={pageIndex}
            setstateIndex={setPageIndex}
          />
        </StyledProductListing>{" "}
      </>
    </>
  );
}

export default ProductListing;

export const StyledProductListing = styled.section`
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

  .noProduct {
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 30px;
  }

  @media (min-width: 360px) and (max-width: "481px") {
  }
`;

export async function getStaticProps() {
  const response = await api.get(
    "https://pellestore-new-strapi.onrender.com/api/products?populate=*&pagination[page]=1&pagination[pageSize]=1"
  );

  let productResult = response.data;

  // Return product data as props
  return {
    props: {
      productResult,
    },
  };
}
