import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 85vh;
  margin: auto;
`;

export const Title = styled.div`
  width: max-content;
  margin: auto;
  font-size: 4em;
  font-weight: 400;
  position: relative;
  z-index: 1;
  top: 30px;

  &:after {
    content: "";
    background-color: #da4167;
    height: 10px;
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 19%;
    z-index: -1;
  }
`;

export const FormLabel = styled.label`
  font-size: 2em;
  font-weight: 600;
`;

export const ContentBox = styled.input`
  width: 98%;
  height: 25vh;
`;

export const NameBox = styled.input`
  width: 98%;
`;

export const FormDiv = styled.div`
margin: 70px auto;
  width: max-content;
  height; 40vh;
  
`;

export const Submit = styled.div`
  width: max-content;

  font-size: 2.5em;
  font-weight: 400;
  position: relative;
  z-index: 1;
  top: 3px;
  left: 255px;

  &:after {
    content: "";
    background-color: #da4167;
    height: 10px;
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
