import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 88vh;
  margin: auto;
  color: #f4d35e;
`;

export const Title = styled.div`
  width: max-content;
  margin: auto;
  font-size: 4.5vw;
  font-weight: 400;
  position: relative;
  z-index: 1;
  top: 30px;
  @media (max-width: 800px) {
    font-size: 12vw;
  }

  &:after {
    content: "";
    background-color: #da4167;
    height: 1vw;
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 19%;
    z-index: -1;
    @media (max-width: 800px) {
      height: 2.5vw;
      bottom: 20%;
    }
  }
`;

export const FormLabel = styled.label`
  font-size: 1.6em;

  @media (max-width: 800px) {
    margin-bottom: 30px;
    margin-top: 30px;
    font-size: 1.3em;
  }
`;

export const ContentBox = styled.textarea`
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  width: 98%;
  height: 10vh;
  font-size: 1.6em;
  padding-bottom: 5em;
  text-wrap: true;
  @media (max-width: 800px) {
    height: 3vh;
  }
`;

export const NameBox = styled.input`
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  width: 98%;
  font-size: 1.4em;
`;

export const FormDiv = styled.div`
  margin: 12vh auto;
  width: 41vw;
  @media (max-width: 800px) {
    width: 75vw;
    margin: 15vh auto;
  }
`;

export const Submit = styled.div`
  width: max-content;
  // font-size: 3em;
  font-size: 5vh;
  margin: auto;
  margin-top: 10px;

  @media (max-width: 800px) {
    // font-size: 2em;
    font-size: 5vh;
  }

  &:after {
    content: "";
    background-color: #da4167;
    height: 1vh;
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 19%;
    z-index: -1;
  }
  &:hover {
    transition: 0.1s ease-in-out;
    transform: scale(1.05);
  }
`;

export const Thanks = styled.div`
  width: max-content;
  margin: auto;
  font-size: 8vw;
  font-weight: 600;
  position: relative;
  z-index: 1;
  top: 38%;
justify-content: center;
  @media (max-width: 800px) {
    font-size: 12vw;
  }

  &:after {
    content: "";
    background-color: #da4167;
    height: 1vw;
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 19%;
    z-index: -1;
    @media (max-width: 800px) {
      height: 1.5vw;
    }
`;
