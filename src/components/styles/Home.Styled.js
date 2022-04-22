import styled from "styled-components";

export const Intro = styled.div`
  position: absolute;
  top: 95px;
  font-size: 5vw;
  font-weight: 800;
  width: max-content;
  z-index: 1;
`;

export const LineBox = styled.div`
  position: absolute;
  top: 160px;
  font-size: 5vw;
  font-weight: 800;
  width: max-content;

  z-index: 1;
`;

export const Line = styled.div`
  align-text: left;

  &:after {
    content: "";
    background-color: #da4167;
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
  text alig
`;
