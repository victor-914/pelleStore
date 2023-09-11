import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
function ProductPreview() {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = cart.reduce((total, item) => {
    console.log(item, "item");
    return total + item?.count * item?.attributes?.product_discount_price;
  }, 0);

  const subTotalPrice = cart.foreach((item) => {
    console.log(item, "item");
    return item?.count * item?.attributes?.product_discount_price;
  }, 0);
  return (
    <StyledPreview>
      <div class="small-container cart-page">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>

          {cart?.map((item) => (
            <tr key={item.id}>
              <td>
                <div class="cart-info">
                  <Image
                    width="80px"
                    height="80px"
                    src={`${item?.attributes?.product_images?.data[0]?.attributes?.url}`}
                    className="checkout_img"
                  />
                  <div className="item_content">
                    <p>{item?.attributes?.product_name}</p>
                    <small>{item?.attributes?.product_discount_price}</small>
                    {/* <br> */}
                    <span className="iconHolder">
                      <IoCloseOutline />
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <input type="number" value={item?.count} />
              </td>
              <td>&#x20A6; {subTotalPrice}</td>
            </tr>
          ))}
        </table>
        <div class="total-price">
          <table>
            <tr>
              <td>Total</td>
              <td> &#x20A6; {totalPrice}</td>
            </tr>
          </table>
        </div>

        <aside>
          <StyledButton
            // fullWidth
            color="primary"
            variant="contained"
            sx={{
              //   backgroundColor: "red",
              boxShadow: "none",
              color: "white",
              borderRadius: 0,
              //   padding: "15px 40px",
            }}
            // onClick={() => setActiveStep(activeStep - 1)}
          >
            Pay with Flutterwave
          </StyledButton>
        </aside>
      </div>
    </StyledPreview>
  );
}

export default ProductPreview;

const StyledPreview = styled.section`
  width: 80%;
  margin: auto;
  height: auto;
  padding-top: 50px;
  .cart-page {
    margin: 80px auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  .cart-info {
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
  }
  th {
    text-align: left;
    padding: 5px;
    background-color: green;
    color: #fff;
    background: #901d78;
    font-weight: normal;
  }
  td {
    padding: 10px 5px;
  }
  td input {
    width: 40px;
    height: 30px;
    padding: 5px;
  }
  .iconHolder {
    color: #901d78;
    font-size: 12px;
    font-weight: 800;
  }
  .checkout_img {
    /* margin: 9px; */
    /* margin-right: 10px; */
    position: relative;
    margin: 10px;
  }

  .item_content {
    padding: 10px;
    font-size: 15px;
  }

  .total-price {
    display: flex;
    justify-content: flex-end;
    /* background-color: red; */
  }
  .total-price table {
    border-top: 3px solid #901d78;
    width: 100%;
    max-width: 400px;
  }
  td:last-child {
    text-align: right;
  }
  th:last-child {
    text-align: right;
  }
  /* Media query for menu */
  @media only screen and (max-width: 800px) {
    nav ul {
      position: absolute;
      top: 70px;
      left: 0;
      background: #333;
      width: 100%;
      overflow: hidden;
      transition: max-height 0.5s;
    }
    nav ul li {
      display: block;
      margin-right: 50px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    nav ul li a {
      color: white;
    }
    .menu-icon {
      display: block;
      cursor: pointer;
    }
  }

  /* Media query for 600 screen size */
  @media only screen and (max-width: 600px) {
    .row {
      text-align: center;
    }
    .col-2,
    .col-3,
    .col-4 {
      flex-basis: 100%;
    }
    .single-product .row {
      text-align: left;
    }
    .single-product .col-2 {
      padding: 20px 0;
    }
    .single-product h1 {
      font-size: 26px;
      line-height: 32px;
    }
    .cart-info p {
      display: none;
    }
  }
`;

const StyledButton = styled.button`
  width: 100%;
  margin-top: 30px;
  height: 40px;
  background-color: #000;
  color: #fff;

  /* :hover{
      background-color: #fff;
    color: #000;
    } */
`;
