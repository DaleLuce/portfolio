import styled from "styled-components";

export const MainContainer = styled.div`
  color: #f4d35e;
  display: flex;
  justify-content: center;
  //flex-direction: row;
  //position: relative;
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
`;

export const Intro = styled.div`
  position: absolute;
  top: 40vh;
  font-size: 6vw;
  font-weight: 800;
  width: max-content;
  z-index: 1;
  @media (max-width: 700px) {
    font-size: 10vw;
    left: 5vw;
  }
`;

export const LineBox = styled.div`
  position: absolute;
  top: 50vh;
  font-size: 6vw;
  font-weight: 800;
  width: max-content;
  z-index: 1;
  @media (max-width: 700px) {
    font-size: 10vw;
    left: 5vw;
  }
`;

export const Line = styled.div`
  margin: auto;
  width: max-content;

  &:after {
    content: "";
    background-color: ${(props) => props.theme.two};
    height: 1.2vw;
    display: block;
    position: absolute;
    width: 100%;
    bottom: 17%;
    z-index: -1;
    @media (max-width: 700px) {
      height: 1.9vw;
    }
  }
`;

export const IntroBox = styled.div`
  width: 50vw;
  height: 2vw;
`;
