import styled from "styled-components";

export const Nav = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  height: 8vw;
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100vw;
  background-color: #083d77;
  color: #f4d35e;
`;

export const Link = styled.div`
  position: relative;
  width: max-content;
  font-size: 3.5vw;
  font-weight: 700;
  margin-bottom: 1.38vh;
  //z-index: 1;

  &:after {
    content: "";
    background-color: #da4167;
    height: 1vw;
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 15%;
    z-index: -1;
  }

  &:hover {
    transition: 0.1s ease-in-out;
    transform: scale(1.05);
  }
`;

export const Links = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-evenly;
`;
