import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 100vh;
  margin: auto;
`;

export const Title = styled.div`
  width: max-content;
  margin: auto;
  font-size: 3em;
  font-weight: 600;
  position: relative;
  z-index: 1;

  &:after {
    content: "";
    background-color: #da4167;
    height: 12px;
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 15%;
    z-index: -1;
  }
`;

export const FormLabel = styled.label`
  font-size: 2em;
  font-weight: 600;
`;

export const ContentBox = styled.input`
  width: 100%;
  height: 40vh;
`;

export const NameBox = styled.input`
  width: 100%;
`;

export const FormDiv = styled.div`
margin: auto;
  width: 40vw;
  height; 40vh;
`;
