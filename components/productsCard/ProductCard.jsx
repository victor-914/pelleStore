import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";
import { FaShoppingCart} from "react-icons/fa";
import {AiFillHeart} from "react-icons/ai"
import {AiFillEye} from "react-icons/ai";
import styled from "styled-components";
import One from "../../assets/slider-01.jpg";
import imagetwo from "../../assets/slider-02.jpg";
import imagethree from "../../assets/slider-03.jpg";
import imagefour from "../../assets/banner-02.jpg";
import imagefive from "../../assets/banner-03.jpg";
import Image from "next/image";
const heroTextureImports = [One, imagetwo, imagethree, imagefour, imagefive];

const ProductCarousel = ({}) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <StyledProductCarousel>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
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
        {heroTextureImports.map((texture, index) => (
          <>
            <main className="imgCarouselCont" key={`carousel-image-${index}`}>
              <div className="overlay"></div>
              <Image
                src={texture.src}
                alt={`carousel-${index}`}
                layout="fill"
                className="img"
              />
            <section className="accesoriesCont">
            
            <div className="iconCont">
            <FaShoppingCart className="icon"/>
            </div>

            <div className="iconCont">
            < AiFillEye className="icon"/>
            </div>

            <div className="iconCont">
                <AiFillHeart className="icon"/>
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
 



.img{
  border-radius: 5px;

}

  .imgCarouselCont {
    width: 100%;
    height: 400px;
    position: relative;
  }

  .accesoriesCont{
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

  .iconCont{
   padding: 8px;
   border-radius: 5px;
   background-color: #00000091;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
   cursor: pointer;

   z-index: 1000;

  }

  .iconCont:hover{
    background-color: #901D78;
  }

  .icon{
     font-size: 20px;
     color: #fff;
}

  :hover .accesoriesCont{
    visibility: visible;
  }
`;
