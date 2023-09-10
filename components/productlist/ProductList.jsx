import React, { useEffect, useState } from "react";
import CatergoriesHeader from "../../components/catergories/CatergoriesHeader";
import styled from "styled-components";
import ProductCarousel from "../../components/productsCard/ProductCard";
import Pagination from "../../components/pagination/Pagination";
// import api from "../../utils/api";
function ProductListing(data, pageProps, imgProps, paginate, setPaginate) {
//   const [state, setState] = useState(1);
//   useEffect(() => {
//     console.log(data,"data")
//     setState(data);
//     return () => {};
//   }, [data]);

  return (
    <>
      {/* <CatergoriesHeader image={imgProps} text="Our latest Products" /> */}
      <StyledMensWears>
        <main className="contentHolder">
          {data.data?.map((item) => (
            <>
              <ProductCarousel data={item} page={pageProps} />
            </>
          ))}
        </main>
        <Pagination
          data={data?.meta}
          stateIndex={paginate}
          setstateIndex={setPaginate}
        />
      </StyledMensWears>
    </>
  );
}

export default ProductListing;

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
