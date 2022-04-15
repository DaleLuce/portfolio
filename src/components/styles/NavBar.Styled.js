import styled from "styled-components";

export const Nav = styled.div`
  posititon: sticky;
  top: 0px;
height: auto;
  display: flex;
  justify-content: center;
  align-self: flex-start;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.xbody};
  console.log(${(props) => props.theme.xbody})
`;

export const Link = styled.div`
  width: 14vw;
  text-align: center;
`;
