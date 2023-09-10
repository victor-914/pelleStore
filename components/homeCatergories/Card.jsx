import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const Card = ({ title, imgSrc, page }) => {
  const router = useRouter();
  return (
    <StyledCard onClick={() => router.push({
      pathname:"/products",
      query: { catergory: `${page}` },
    })}>
      <div className="title">{title}</div>
      <main className="imageHolder">
        <Image src={imgSrc} layout="fill" />
      </main>
      <div className="buttonContainer">
        <button className="viewButton">VIEW ALL</button>
      </div>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.section`
  width: 30%;
  height: 450px;
  cursor: pointer;
  padding: 20px;

  :hover {
    background-color: #f7f0f0;

  }

  :hover .viewButton{
    background-color:#901D78;
    color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.132), 0 1px 3px rgba(0, 0, 0, 0.087);

  }
  .title {
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
  }

  .buttonContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
  }

  .viewButton {
    /* line-height: 2; */
    width: 60%;
    margin: auto;
    text-align: center;
    font-weight: 600;
    padding-top: 5px;
    color: #3f3333c1;
    border: 2px solid #f7f0f0;
    padding: 8px;
  }

  .imageHolder {
    width: 80%;
    height: 70%;
    margin: auto;
    margin-top: 10px;
    position: relative;
    object-fit: center;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;

    .imageHolder {
      width: 90%;
      height: 80%;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }
`;
