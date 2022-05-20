import styled from "styled-components";

export const MainContainer = styled.div`
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
  font-size: 1.8vw;
  text-align: justify;
  font-weight: 400;
  margin: 5vh auto;
  width: 70vw;
  @media (max-width: 800px) {
    font-size: 4vw;
    margin-top: 20px;
  }
`;

export const Icons = styled.div`
  justify-content: space-evenly;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  width: 75vw;
`;

export const IconBox = styled.div`
  align-self: flex-end;
  margin: 10px;
`;

export const IconTextBox = styled.div`
  margin: auto;
  font-size: 1vw;
  width: max-content;
`;
