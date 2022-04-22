import styled from "styled-components";

export const Intro = styled.div`
  position: absolute;
  top: 40vh;
  font-size: 5vw;
  font-weight: 800;
  width: max-content;
  z-index: 1;
`;

export const LineBox = styled.div`
  position: absolute;
  top: 50vh;
  font-size: 5vw;
  font-weight: 800;
  width: max-content;

  z-index: 1;
`;
export const LineBoxx = styled.div`
  position: absolute;
  top: 60vh;
  font-size: 5vw;
  font-weight: 800;
  width: 290vw;
  // width: 2850px;

  z-index: 1;
`;

export const Line = styled.div`
  margin: auto;
  width: max-content;
  &:after {
    content: "";
    background-color: #083d77;
    height: 11px;
    display: block;
    position: absolute;
    width: 100%;
    bottom: 19%;
    z-index: -1;
  }
`;

export const IntroBox = styled.div`
  width: 50vw;
  // height: 50vh;
  // background-color: #f4d35e;
  // z-index: 3;
`;
