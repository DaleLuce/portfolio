import styled from "styled-components";

export const MainContainer = styled.div`
  scroll-margin-top: 9vw;
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  height: max-content;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    height: max-content;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  width: 85vw;
  margin: auto;
  flex-direction: column;
`;

export const AboutText = styled.div`
  font-size: 2vw;
  text-align: justify;
  font-weight: 400;
  margin: 5vh auto;
  width: 70vw;
  @media (max-width: 800px) {
    font-size: 3vw;
    margin-top: 20px;
  }
`;

export const Icons = styled.div`
  justify-content: space-around;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  width: 75vw;
`;

export const IconBox = styled.div`
  margin: 8px;
  flex-basis: 7%;
`;

export const IconTextBox = styled.div`
  margin: auto;
  font-size: 1.3vw;
  width: max-content;

  @media (max-width: 800px) {
    font-size: 2vw;
    margin: auto;
  }
`;
