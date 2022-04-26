import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${(props) => props.theme.secondary};

  display: flex;
  justify-content: center;
  flex-direction: row;
  position: relative;
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  width: 40vw;
`;
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

export const Line = styled.div`
  margin: auto;
  width: max-content;
  &:after {
    content: "";
    background-color: ${(props) => props.theme.secondary};

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
`;
