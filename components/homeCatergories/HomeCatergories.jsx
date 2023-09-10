import Card from "./Card";
import imgOne from "../../assets/close-up-kitted-bag-still-life.jpg";
import imgTwo from "../../assets/medium-shot-cool-woman-posing.jpg";
import imgThree from "../../assets/front-view-handsome-man-grey-jacket-posing.jpg";
import imgFour from "../../assets/black-girl-wearing-white-t-shirt (1).jpg";
import imgFive from "../../assets/low-angle-little-boy-posing (1).jpg";
import imgSix from "../../assets/top-view-open-woman-bag.jpg";
import styled from "styled-components";
const HomeCatergories = () => {
  const cardData = [
    { title: "New Arrivals", img: imgOne, page: "arrivals" },
    { title: "Women", img: imgTwo, page:"women" },
    { title: "Men", img: imgThree, page: "men" },
    { title: "Girls", img: imgFour, page: "girls" },
    { title: "Boys", img: imgFive, page: "boys" },
    { title: "Accessories", img: imgSix, page: "Accessories" },
  ];

  return (
    <StyledCat>
      <main className="cardContainer">
        {cardData.map((card, index) => (
          <Card key={card.page} title={card.title} imgSrc={card.img} page={card.page} />
        ))}
      </main>
    </StyledCat>
  );
};

export default HomeCatergories;

const StyledCat = styled.section`
  width: 80%;
  height: auto;
  margin: auto;
  transform: translateY(-200px);
  position: relative;
  background-color: #fff;
  /* padding-top: 30px; */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.132), 0 1px 3px rgba(0, 0, 0, 0.087);
  .cardContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 20px;

  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 94%;

    .cardContainer {

    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }
`;
