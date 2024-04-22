import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "next/router";
const ItemDetails = ({ data }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const [product, setProduct] = useState([]);

  const router = useRouter()

  const message = `Hello Violapelle store, I would like to purchase  this product:(https://violapellefashion.com${router.asPath})`;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setProduct(data?.data);
  }, [data]);

  console.log(data, "@itemDetail");

  return (
    <StyledItemsPage>
      <Box width="80%" m=" auto">
        <Box display="flex" flexWrap="wrap" columnGap="40px">
          {/* IMAGES */}
          <Box flex="1 1 40%" position="relative" mb="40px">
            <Carousel
              infiniteLoop={true}
              showThumbs={false}
              showIndicators={false}
              swipeable={false}
              showStatus={false}
              autoPlay={true}

              // renderArrowPrev={(onClickHandler, hasPrev, label) => (
              //   <IconButton
              //     onClick={onClickHandler}
              //     sx={{
              //       position: "absolute",
              //       top: "50%",
              //       left: "0",
              //       color: "white",
              //       padding: "5px",
              //       zIndex: "10",
              //     }}
              //   >
              //     <NavigateBeforeIcon sx={{ fontSize: 40 }} />
              //   </IconButton>
              // )}
              // renderArrowNext={(onClickHandler, hasNext, label) => (
              //   <IconButton
              //     onClick={onClickHandler}
              //     sx={{
              //       position: "absolute",
              //       top: "50%",
              //       right: "0",
              //       color: "white",
              //       padding: "5px",
              //       zIndex: "10",
              //     }}
              //   >
              //     <NavigateNextIcon sx={{ fontSize: 40 }} />
              //   </IconButton>
              // )}
            >
              {product?.attributes?.images?.data?.map((texture, index) => (
                <div className="imageContainer" key={`carousel-image-${index}`}>
                  <Image
                    src={texture?.attributes?.url}
                    alt={`carousel-${index}`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              ))}
            </Carousel>
          </Box>

          {/* ACTIONS */}
          <Box flex="1 1 50%" mb="40px">
            <Box m="65px 0 25px 0">
              <Typography variant="h3">
                Title: {product?.attributes?.title}
              </Typography>
              <Typography>
                {" "}
                Price:&#8358; {product?.attributes?.price}
              </Typography>
              {/* <del> &#8358; {product?.attributes?.product_discount_price}</del> */}

              {/* <Typography sx={{ mt: "20px" }}>
              </Typography> */}
              <Typography sx={{ mt: "5px" }}>
                Catergory: {product?.attributes?.catergory}
              </Typography>
              {/* <Typography sx={{ mt: "5px" }}>
                material: {product?.attributes?.material}
              </Typography> */}
              <Typography sx={{ mt: "5px" }}>
                Size: {product?.attributes?.size}
              </Typography>
              {/* <Typography sx={{ mt: "5px" }}>
                color: {product?.attributes?.product_color}
              </Typography> */}
            </Box>

            <Box display="flex" alignItems="center" minHeight="50px">
              <Box
                display="flex"
                alignItems="center"
                border={`1.5px solid ${shades.neutral[300]}`}
                mr="20px"
                p="2px 5px"
              >
                <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ p: "0 5px" }}>{count}</Typography>
                <IconButton onClick={() => setCount(count + 1)}>
                  <AddIcon />
                </IconButton>
              </Box>
              <Button
                sx={{
                  color: "#000",
                  borderRadius: 0,
                  border: "2px solid #000",
                  minWidth: "150px",
                  padding: "10px 40px",
                }}
                // onClick={() =>
                //   dispatch(addToCart({ item: { ...product, count } }))
                // }
              >
                <a
                  href={`https://api.whatsapp.com/send?phone=+2347033826580&text=${message}`}
                  target="_blank"
                >
                  Buy product
                </a>
              </Button>
            </Box>
            <Box>
              <Box m="20px 0 5px 0" display="flex">
                {/* <FavoriteBorderOutlinedIcon /> */}
                {/* <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography> */}
              </Box>
              {/* <Typography>CATEGORIES: {item?.attributes?.category}</Typography> */}
            </Box>
          </Box>
        </Box>

        {/* INFORMATION */}
        <Box m="20px 0">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="DESCRIPTION" value="description" />
          </Tabs>
        </Box>
        <Box display="flex" flexWrap="wrap" gap="15px">
          {value === "description" && (
            <div> {product?.attributes?.description}</div>
          )}
        </Box>

        {/* RELATED ITEMS */}
        {/* <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          Related Products
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
        >
          {items.slice(0, 4).map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item} />
          ))}
        </Box>
      </Box> */}
      </Box>
    </StyledItemsPage>
  );
};

export default ItemDetails;

const StyledItemsPage = styled.section`
  padding-top: 140px;

  .imageContainer {
    background-color: #c9bfbf60;
    position: relative;
    width: 100%;
    height: 50vh;
  }
`;
