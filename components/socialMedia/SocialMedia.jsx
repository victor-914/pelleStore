import React from "react";
import Image from "next/image"
import social1 from "../../assets/slider-01.jpg"
import social2 from "../../assets/banner-02.jpg"
import {AiFillInstagram} from "react-icons/ai"
import styled from "styled-components"
function SocialMedia() {
  const images = [
    {
      _id: "23",
      img: social1,
      icon: <AiFillInstagram/>,
    },
    {
      _id: "298s3",
      img: social2,
      icon: <AiFillInstagram/>,
    },
    {
        _id: "298sw3",
        img: social2,
        icon: <AiFillInstagram/>,
      },  {
        _id: "29ddd83",
        img: social2,
        icon: <AiFillInstagram/>,
      },
    
  ];
  return (
    <StyledSocialMedia>
      <header>Shop our Socials</header>
      <header>TAG & FOLLOW #PELLESTORETRIBE ON INSTAGRAM</header>

      

      <main className="socialContainer">
        {
            images.map((item) => (
                <main className="socials">
                   <Image  className="socialImg"
                   src={item.img} layout="fill"/>

                   <span className="iconCont">
                   <AiFillInstagram className="icon"/>
                   </span>

                </main>


            ))
        }
      </main>
    </StyledSocialMedia>
  );
}

export default SocialMedia;

const StyledSocialMedia = styled.section`
width: 95%;
padding: 40px;
margin: auto;
/* height:; */

header{
    width: 100%;
    text-align: center;
    font-size:30px;
    padding: 10px;
    font-weight: 600;
    padding-bottom: 40px;
    /* font-family:"Syne" "Sans-serif"; */
}

.socialContainer{
    width:100%;
    height: 80%;
    display: flex;
    justify-content: space-between;
}

.socials{
 width: 20%;
 height: 30vh;
 position: relative;
 cursor: pointer;

}

.socials:hover .iconCont{
    visibility: visible;
}

.socialImg{
    object-fit: cover;
}

.iconCont{
    background-color: transparent;
    width: 100%;
    z-index: 10;
    height: 100%;
    position: absolute;
    visibility: hidden;

}

.icon{
   width: 100%;
   height: 100%;
   color: white;
}


@media (min-width: 320px) and (max-width: 480px) {

    header{
      font-size: 20px;
     
    }

    
.socialContainer{
  flex-direction: column;
}

.socials{
 width: 100%;
 height: 30vh;
 position: relative;
 cursor: pointer;
margin-bottom: 10px;
}


  }

  @media (min-width: 481px) and (max-width: 768px) {

  }

  @media (min-width: 769px) and (max-width: 1024px) {

  }


`;
