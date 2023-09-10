import React from "react";
import styled from "styled-components";
function Loading() {
  return (
    <StyledLoading>
      <span className="loader"></span>
    </StyledLoading>
  );
}

export default Loading;

const StyledLoading = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    position: relative;
    width: 100px;
    height: 100px;
  }
  .loader:before {
    content: "";
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    top: 50%;
    left: 0;
    transform: translate(-5px, -50%);
    background: linear-gradient(to right, #d50caa 50%, #901d78 50%) no-repeat;
    background-size: 200% auto;
    background-position: 100% 0;
    animation: colorBallMoveX 1.5s linear infinite alternate;
  }
  .loader:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: #901d78;
  }
  @keyframes colorBallMoveX {
    0% {
      background-position: 0% 0;
      transform: translate(-15px, -50%);
    }
    15%,
    25% {
      background-position: 0% 0;
      transform: translate(0px, -50%);
    }
    75%,
    85% {
      background-position: 100% 0;
      transform: translate(50px, -50%);
    }
    100% {
      background-position: 100% 0;
      transform: translate(65px, -50%);
    }
  }
`;
