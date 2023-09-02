import React from 'react'
import Checkout from '../../scenes/checkout/Checkout'
import styled from "styled-components"
function CheckoutPage() {
  return (
    <StyledCheckout><Checkout/></StyledCheckout>
  )
}

export default CheckoutPage


const StyledCheckout = styled.div`
padding-top:50px;
width: 100%;
height: auto;
padding-bottom: 50px;
`