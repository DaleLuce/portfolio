import styled from "styled-components";

export const Nav = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  height: 14vh;
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
  font-size: 28pt;
  font-weight: 700;
  height: max-content;
  margin: 20px;
  margin-bottom: 20px;
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

export const LightBulb = styled.div`
  height: 23vh;
  transform: rotate(90deg);

  &:hover {
    transition: 0.1s ease-in-out;
    transform: rotate(90deg) scale(1.125);
  }
`;
