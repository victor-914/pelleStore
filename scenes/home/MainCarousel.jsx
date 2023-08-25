import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";
// import One from "../../assets/image.jpeg";
// import imagetwo from "../../assets/image2.jpeg";
// import imagethree from "../../assets/image3.jpeg";
// import imagefour from "../../assets/image4.jpeg";

import One from "../../assets/bannerPic1.jpeg";
import imagetwo from "../../assets/bannerpic2.jpeg";
import imagefour from "../../assets/taylor-dG4Eb_oC5iM-unsplash.jpeg";
import imagefive from "../../assets/brian-lawson-jRztw-pVdyk-unsplash.jpeg";
import imagesix from "../../assets/diego-vedita-PW1EOs9R-Xw-unsplash.jpeg";
import imageseven from "../../assets/uji-kanggo-gumilang-sMn0sxR8v2E-unsplash.jpeg";



const MainCarousel = () => {
  const heroTextureImports = [One, imagetwo, imagefour, imagefour,imagefive, imagesix, imageseven];
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      autoPlay={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
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
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {heroTextureImports.map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture.src}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              // objectPosition: `${ isNonMobile ?    "5px 0%" : "-700px 0%"}`,
              backgroundAttachment: "fixed",
            }}
          />
          {console.log(texture.src, "texture")}

          {/* <Box
            color="white"
            padding="20px"
            borderRadius="1px"
            textAlign="left"
            backgroundColor="rgb(0, 0, 0, 0.4)"
            position="absolute"
            top="46%"
            left={isNonMobile ? "10%" : "0"}
            right={isNonMobile ? undefined : "0"}
            margin={isNonMobile ? undefined : "0 auto"}
            maxWidth={isNonMobile ? undefined : "240px"}
          > */}
          
          {/* </Box> */}
        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
