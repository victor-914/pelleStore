import React from "react";
import Image from "next/image";
import social1 from "../../assets/slider-01.jpg";
import social2 from "../../assets/banner-02.jpg";
import { AiFillInstagram } from "react-icons/ai";
import styled from "styled-components";
import { InstagramEmbed } from "react-social-media-embed";
function SocialMedia() {
  const images = [
    {
      _id: "23",
      img: "https://www.instagram.com/reel/Crso8GEvUEU/?igshid=MzRlODBiNWFlZA==",
    },
    {
      _id: "298s3",
      img: "https://www.instagram.com/reel/Cv2BqsaLP1l/?igshid=MzRlODBiNWFlZA==",
    },
    {
      _id: "298sw3",
      img: "https://www.instagram.com/reel/CrDld2fNO56/?igshid=MzRlODBiNWFlZA==",
    },
    {
      _id: "29ddd83",
      img: "https://www.instagram.com/reel/CqfvBf4L4Ps/?igshid=MzRlODBiNWFlZA==",
    },
  ];
  return (
    <StyledSocialMedia>
      <header>Shop our Socials</header>
      <header>TAG & FOLLOW #PELLESTORETRIBE ON INSTAGRAM</header>

      <main className="socialContainer">
        {images.map((item) => (
          <div className="socials">
            <InstagramEmbed placeholderDisabled url={item.img} width={"100%"} />
          </div>
        ))}
      </main>
    </StyledSocialMedia>
  );
}

export default SocialMedia;

const StyledSocialMedia = styled.section`
  width: 90%;
  /* padding: 40px; */
  margin: auto;
  height:auto;

  header {
    width: 100%;
    text-align: center;
    font-size: 30px;
    padding: 10px;
    font-weight: 600;
    padding-bottom: 40px;
    /* font-family:"Syne" "Sans-serif"; */
  }

  .socialContainer {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-between;
  }

  .socials {
    width: 20%;
    /* border: 1px solid #901D78; */
    /* height: 30vh; */
    position: relative;
    cursor: pointer;
    margin-top: 10px;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  .socials:hover .iconCont {
    visibility: visible;
  }

  .socialImg {
    object-fit: cover;
  }

  .iconCont {
    background-color: transparent;
    width: 100%;
    z-index: 10;
    height: 100%;
    position: absolute;
    visibility: hidden;
  }

  .icon {
    width: 100%;
    height: 100%;
    color: white;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    header {
      font-size: 20px;
    }

    .socialContainer {
      flex-direction: column;
      height: auto;
    }

    .socials {
      width: 100%;
      height: 30vh;
      position: relative;
      cursor: pointer;
      margin-bottom: 10px;
      height: 50%;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }
`;
