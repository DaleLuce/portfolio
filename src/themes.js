import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f6d8ae",
  fontColor: "#083d77",
  xbody: "#2e4057",
  xfontColor: "#f4d35e",
};

export const darkTheme = {
  body: "#2e4057",
  fontColor: "#F6D8AE",
  xbody: "#f6d8ae",
  xfontColor: "#083d77",
};

export const GlobalStyles = createGlobalStyle`

.typeA{
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  
}
.typeB{
  background-color: ${(props) => props.theme.xbody};
  color: ${(props) => props.theme.xfontColor};
  
}
`;
