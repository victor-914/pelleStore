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

const ProductCarousel = ({ data, page }) => {
  const count = 1
  const router = useRouter();
  //  const cart   = useSelector((state) => state.cart.cart)
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
              {console.log(texture, "djdj")}
              <section className="accesoriesCont">
                <div
                  className="iconCont"
                  onClick={() => {
                    toast("Product Added to Cart", {
                      hideProgressBar: true,
                      autoClose: 1000,
                      type: "success",
                    }),
                      console.log(texture, "data"),
                      console.log(data, "dathdhhdhda");
                    dispatch(addToCart({  item: {...data, count}} ));
                  }}
                  title="Add to cart"
                >
                  <FaShoppingCart className="icon" />
                </div>

                <div
                  className="iconCont"
                  onClick={() => {
                    router.push(`/${page}/${data.id}`),
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
                    });
                  }}
                  title="Add to wishlist"
                >
                  <AiFillHeart className="icon" />
                </div>
              </section>
            </main>
          </>
        ))}
      </Carousel>
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
    height: 400px;
    position: relative;
  }

  .accesoriesCont {
    width: 100%;
    height: 100%;
    background-color: transparent;
    position: absolute;
    /* z-index: 100; */
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding-bottom: 20px;
    visibility: hidden;
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
`;
