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
  font-size: clamp(2em, 5vw, 5em);
  font-weight: 800;
  width: max-content;
  z-index: 1;
`;

export const LineBox = styled.div`
  position: absolute;
  top: 50vh;
  font-size: clamp(2em, 5vw, 5em);

  font-weight: 800;
  width: max-content;
  z-index: 1;
`;

export const Line = styled.div`
  width: max-content;
  // margin-left: -8vw;
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
  height: 500px;
  @media (max-width: 700px) {
    margin-left: -18vw;
  }
`;
