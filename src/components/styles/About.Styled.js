import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  // position: relative;
  width: 100vw;
  height: 70vh;
  flex-wrap: wrap;
`;

export const AboutContainer = styled.div`
  display: flex;
  width: 85vw;
  margin: auto;
  flex-diection: column;
`;

export const AboutText = styled.div`
  font-size: 1.25em;
  text-align: justify;
  font-weight: 400;
  margin: auto;
  width: 70vw;
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
  // // display: flex;
  // display: block;
  // flex-direction: column;
  // width: 9%;
  // height: max-content;
  // padding: 2px;
  // justify-content: center;
  align-self: flex-end;
`;

export const IconTextBox = styled.div`
  margin: auto;
  width: max-content;
`;

export const IconBoxTwo = styled.div``;

export const IconBoxThree = styled.div``;
