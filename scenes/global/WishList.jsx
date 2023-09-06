import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {
  decreaseCount,
  increaseCount,
  removeFromWishList,
  setIsWishListOpen,
} from "../../state/wishlist";
import { useRouter } from "next/router";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WishList = () => {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList.wishList);
  const IsWishListOpen = useSelector(
    (state) => state.wishList.isWishListOpen
  );
  const totalPrice = wishList?.reduce((total, item) => {
    return total + item?.count * item?.attributes?.product_discount_price;
  }, 0);

  const router = useRouter();
  return (
    <Box
      display={IsWishListOpen ? "flex" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="relative"
      zIndex={1000}
      width="100vh"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      <Box
        position="fixed"
        left="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/* HEADER */}
          <FlexBox mb="15px">
            <Typography variant="h3">Wishlist ({wishList.length})</Typography>
            <IconButton onClick={() => dispatch(setIsWishListOpen({}))}>
              <CloseIcon />
            </IconButton>
          </FlexBox>

          {/* CART LIST */}
          <Box>
            {wishList?.map((item) => (
              <Box key={`${item?.attributes?.product_name}-${item.id}`}>
                <FlexBox p="15px 0">
                  <Box flex="1 1 40%">
                    <img
                      alt={item?.product_name}
                      width="123px"
                      height="164px"
                      src={`${item?.attributes?.product_images?.data[0]?.attributes?.url}`}
                    />
                  </Box>
                  <Box flex="1 1 60%">
                    <FlexBox mb="5px">
                      <Typography fontWeight="bold">
                        {/* {item.attributes.name} */}
                      </Typography>
                      <IconButton
                        onClick={() =>
                          dispatch(removeFromWishList({ id: item.id }))
                        }
                      >
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>
                    <Typography>
                      {item?.attributes?.shortDescription}
                    </Typography>
                    <FlexBox m="15px 0">
                      <Box
                        display="flex"
                        alignItems="center"
                        border={`1.5px solid ${shades.neutral[500]}`}
                      >
                        <IconButton
                          onClick={() =>
                            dispatch(decreaseCount({ id: item?.id }))
                          }
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.count}</Typography>
                        <IconButton
                        onClick={() =>
                          dispatch(increaseCount({ id: item?.id }))
                        }
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                      <Typography fontWeight="bold">
                        ₦{item?.attributes?.product_discount_price}
                      </Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Divider />
              </Box>
            ))}
          </Box>

          {/* ACTIONS */}
          <Box m="20px 0">
            {/* <FlexBox m="20px 0">
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">₦ {totalPrice}</Typography>
            </FlexBox> */}
            <Button
              sx={{
                backgroundColor: shades.primary[900],
                color: "#000",
                borderRadius: 0,
                minWidth: "100%",
                padding: "20px 40px",
                m: "20px 0",
              }}
              onClick={() => {
                router.push("/_checkout");
                dispatch(setIsCartOpen({}));
              }}
            >
              <Typography fontWeight="bold"> CHECKOUT</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WishList;
