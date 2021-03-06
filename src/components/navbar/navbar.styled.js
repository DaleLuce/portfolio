import styled from "styled-components";

export const Nav = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  height: 10vh;
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100vw;
  background-color: #083d77;
  color: #f4d35e;
`;

export const Lank = styled.div`
  margin: auto;
  position: relative;
  width: max-content;
  font-size: clamp(2px, 3vw, 40px);
  font-weight: 700;
  margin-bottom: 1.38vh;

  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.05);
    
    &:after {
        transition: 0.2s ease-in-out;
    transform: scale(1.05);
       content: "";
    background-color: #da4167;
    height: 1.3vw;
    display: block;
    position: absolute;
    width: 102%;
    left: 0;
    bottom: 12%;
    z-index: -1;

  }
`;

export const Links = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-evenly;
`;
