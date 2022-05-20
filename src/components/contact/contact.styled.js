import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 85vh;
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
      height: 1.5vw;
    }
  }
`;

export const FormLabel = styled.label`
  font-size: 4vw;
  @media (max-width: 800px) {
    font-size: 8vw;
    margin-bottom: 30px;
    margin-top: 30px;
  }
`;

export const ContentBox = styled.input`
  width: 98%;
  height: 25vh;
  font-size: 3vw;
`;

export const NameBox = styled.input`
  width: 98%;
  font-size: 3vw;
`;

export const FormDiv = styled.div`
  margin: 70px auto;
  width: 38vw;
  // height; 40vh;
  @media (max-width: 800px) {
    width: 75vw;
  }
`;

export const Submit = styled.div`
  width: max-content;
  font-size: 3vw;
  margin: auto;
  margin-top: 10px;

  @media (max-width: 800px) {
    font-size: 8vw;
  }

  &:after {
    content: "";
    background-color: #da4167;
    height: 1.2vw;
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