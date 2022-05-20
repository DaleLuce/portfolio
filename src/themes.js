import { createGlobalStyle } from "styled-components";

let beige = "#f6d8ae";
let blue = "#083d77";
let pink = "#da4167";
let yellow = "#f4d35e";
let gray = "#2e4057";
let mobile = "700px";

export const lightTheme = {
  one: pink,
  two: blue,
  three: beige,
  four: blue,
  five: blue,
  mobile: mobile,
};

export const darkTheme = {
  one: blue,
  two: pink,
  three: gray,
  four: yellow,
  five: gray,
  mobile: mobile,
};

export const GlobalStyles = createGlobalStyle`
// one pink = blue
// two blue = pink
// three beige = gray
// four blue = yellow
// five blue = gray

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

// home / job 1/ job 3
// bg pink blue          one var --
// color yellow yellow   static --
// underline blue pink    two var --

// job 2 / about
// bg beige gray         three var --
// color blue yellow     four var --
// text underline pink    static --
// screenshop underline blue/pink two var

// tactcon
// bg blue gray           five var --
// color yellow yellow     static
// underline pink pink     static
