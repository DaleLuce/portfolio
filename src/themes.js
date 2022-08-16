import { createGlobalStyle } from "styled-components";

let beige = "#f6d8ae";
let blue = "#083d77";
let pink = "#da4167";
let yellow = "#f4d35e";
let gray = "#2e4057";

export const lightTheme = {
  one: pink,
  two: blue,
  three: beige,
  four: blue,
  five: blue,
  six: yellow,
};

export const darkTheme = {
  one: blue,
  two: pink,
  three: gray,
  four: yellow,
  five: gray,
  six: beige,
};

export const GlobalStyles = createGlobalStyle`

.typeA{
  background-color: ${(props) => props.theme.one};
  color: #f4d35e;
}
.typeB{
  background-color: ${(props) => props.theme.three};
  color: ${(props) => props.theme.four};
}
.contact{
  background-color:${(props) => props.theme.five};
}
`;
