import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../state";
import { addToWishList } from "../../state/wishlist";

const ProductCarousel = ({ data }) => {
  const count = 1;
  const router = useRouter();
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <StyledProductCarousel>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={true}
        showStatus={false}
        autoPlay={false}
        swipeable={false}
        dynamicHeight={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              color: "#000",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateBeforeIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              color: "#000",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateNextIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
      >
        {data?.attributes?.product_images?.data?.map((texture, index) => (
          <>
            <main className="imgCarouselCont" key={`carousel-image-${index}`}>
              <div className="overlay"></div>
              <Image
                src={texture?.attributes?.url}
                alt={`carousel-${index}`}
                layout="fill"
                className="img"
              />
            </main>
          </>
        ))}
      </Carousel>

      <div class="showcase-content">

        <h3>
          <p class="showcase-title">{data?.attributes?.product_name}</p>
        </h3>

        <div class="price-box">
          <p class="price">&#x20A6;{data?.attributes?.product_discount_price}</p>
          <del>&#x20A6;{data?.attributes?.product_price}</del>
        </div>
      </div>

      <section className="accesoriesCont">
        <div
          className="iconCont"
          onClick={() => {
            toast("Product Added to Cart", {
              hideProgressBar: true,
              autoClose: 1000,
              type: "success",
            }),
              dispatch(addToCart({ item: { ...data, count } }));
          }}
          title="Add to cart"
        >
          <FaShoppingCart className="icon" />
        </div>

        <div
          className="iconCont"
          onClick={() => {
            router.push(`/products/${data.id}`),
              toast("Navigating to Product Page", {
                hideProgressBar: true,
                autoClose: 1000,
                type: "success",
              });
          }}
          title="View product"
        >
          <AiFillEye className="icon" />
        </div>

        <div
          className="iconCont"
          onClick={() => {
            toast(" Added to Wishlist", {
              hideProgressBar: true,
              autoClose: 2000,
              type: "success",
            }),
              dispatch(addToWishList({ item: { ...data, count } }));
          }}
          title="Add to wishlist"
        >
          <AiFillHeart className="icon" />
        </div>
      </section>
    </StyledProductCarousel>
  );
};

export default ProductCarousel;

const StyledProductCarousel = styled.section`
  width: 300px;
  height: auto;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);

  .img {
    border-radius: 5px;
  }

  .imgCarouselCont {
    width: 100%;
    height: 300px;
    position: relative;
  }

  .accesoriesCont {
    width: 100%;
    /* position: absolute; */
    /* z-index: 100; */
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding-bottom: 10px;
    padding-top: 10px;
    /* visibility: hidden; */
  }

  .iconCont {
    padding: 8px;
    border-radius: 5px;
    background-color: #00000091;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    cursor: pointer;

    z-index: 1000;
  }

  .iconCont:hover {
    background-color: #901d78;
  }

  .icon {
    font-size: 20px;
    color: #fff;
  }

  :hover .accesoriesCont {
    visibility: visible;
  }

  .price-box {
    display: flex;
    padding: 5px;
    font-size: 10;
    flex-direction: column;
    /* justify-content: space-around; */
  }

  .price{
    font-weight: 600;
    font-size: 14px;
    /* padding: 5px; */

  }
  .showcase-title {
    /* background-color: green; */
    font-weight: 400;
    font-size: 16px;
    padding: 5px;
  }

`;
