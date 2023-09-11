import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setIsmMenuOpen } from "../../state/mobilemenu";
import { useRouter } from "next/router";

const secNavbar = [
  {
    _id: "hjdhd",
    content: "Home",
    link: "/",
  },
  {
    _id: "hjdhd",
    content: "New Arrivals",
    link: "#",
  },
  {
    _id: "hjdhddd",
    content: "Men",
    link: "men",
  },
  {
    _id: "hjddjdjdhddd",
    content: "Women",
    link: "women",
  },
  {
    _id: "hjdhwwddd",
    content: "Boys",
    link: "boys",
  },
  {
    _id: "hjdhdssdd",
    content: "Girls",
    link: "girls",
  },
  {
    _id: "hjdddhddd",
    content: "Accessories",
    link: "Accessories",
  },
];

const MobileMenuContainer = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .closeButton {
    background-color: #000;
    padding: 9px;
    font-weight: 800;
    color: #fff;
    border-radius: 4px;
  }
`;

const MenuItem = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 2;
  font-weight: 800;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 2px;

  :hover {
    text-decoration: underline;
  }
`;

function MobileMenu() {
  const dispatch = useDispatch();
  const isMobileMenu = useSelector((state) => state.mMenu.isMobileMenuOpen);

  const router = useRouter();
  return (
    <MobileMenuContainer style={{ display: isMobileMenu ? "flex" : "none" }}>
      {secNavbar.map((item) => (
        <MenuItem
          key={item._id}
          onClick={() => {
            router.push({
              pathname: "/products",
              query: { catergory: `${item.link}` },
            });
          }}
        >
          <span onClick={() => dispatch(setIsmMenuOpen({}))}>
            {item.content}
          </span>
        </MenuItem>
      ))}
      <button
        className="closeButton"
        onClick={() => dispatch(setIsmMenuOpen({}))}
      >
        Close
      </button>
    </MobileMenuContainer>
  );
}

export default MobileMenu;

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import MobileMenu from './MobileMenu';

// const MobileMenuButton = styled.button`
//   background-color: transparent;
//   border: none;
//   color: #333;
//   font-size: 20px;
//   cursor: pointer;
// `;

// function Header() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(prevState => !prevState);
//   };

//   return (
//     <div>
//       <MobileMenuButton onClick={toggleMobileMenu}>☰</MobileMenuButton>
//       <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
//       {/* Other header content */}
//     </div>
//   );
// }
