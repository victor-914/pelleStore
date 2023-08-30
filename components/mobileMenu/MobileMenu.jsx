import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from "react-redux"
import { setIsmMenuOpen } from '../../state/mobilemenu';


const secNavbar = [
    {
      _id: "hjdhd",
      content: "New Arrivals",
      link: "arrivals",
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
      link: "accessories",
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
`;

const MenuItem = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
  text-decoration: none;
`;

function MobileMenu() {
    const dispatch = useDispatch()
    const isMobileMenu = useSelector((state) => state.mMenu.isMobileMenuOpen)
    console.log(isMobileMenu)
  return (
    <MobileMenuContainer style={{ display: isMobileMenu ? 'flex' : 'none' }}>
        {
            secNavbar.map((item) => (
                <MenuItem>
                   {item.content}
                </MenuItem>
            ))
        }
      <button onClick={ () => dispatch(setIsmMenuOpen({}))}>Close</button>
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

