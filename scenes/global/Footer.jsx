import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
import logo from "../../assets/viola-removebg-preview.png";
import Image from "next/image";
import styled from "styled-components"
function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" 
    // backgroundColor="red"
     
    backgroundColor={neutral.light}
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        {/* <Box width="clamp(20%, 30%, 40%)"> */}
          <Box
            width="100px"
            height="80px"
            position="relative"
            color={shades.secondary[500]}
            m="20px"
          >
            <Image src={logo} layout="fill" />
          </Box>
          {/* <StyledFootertext className="footerText" style={{ textAlign: "justify" }}>
            Join us on a journey of limitless possibilities. Experience the
            fusion of creativity and functionality as we redefine what's
            possible.
          </StyledFootertext> */}
        {/* </Box> */}

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            34, Nouakchott Street wuse zone 1 Abuja
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            {/* Email: mredwardroh@gmail.com */}
          </Typography>
          {/* <Typography mb="30px">07033826580,07052362318</Typography> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;


const StyledFootertext = styled.div`
background-color: red;
text-align: justify;

@media (min-width:320px) and (max-width:480px){



}

`