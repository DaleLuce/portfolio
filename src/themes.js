import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  main: "#f6d8ae",
  secondary: "#083d77",
  accent: "#da4167",
  accentTwo: "#f4d35e",
  accentThree: "#2e4057",

  xmain: "#2e4057",
  xsecondary: "#f4d35e",
  xaccent: "#f6d8ae",
  xaccentTwo: "#083d77",
  xaccentThree: "#da4167",
};

export const darkTheme = {
  main: "#2e4057",
  secondary: "#f6d8ae",
  xmain: "#f6d8ae",
  xsecondary: "#083d77",
};

export const GlobalStyles = createGlobalStyle`

.typeA{
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.secondary};
  
}
.typeB{
  background-color: ${(props) => props.theme.xmain};
  color: ${(props) => props.theme.xsecondary};
  
}

.projectCardA{
 background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.accentTwo};
  
}

.projectCardB{
 background-color: ${(props) => props.theme.xmain};
  color: ${(props) => props.theme.xsecondary};
}
.projectCardC{
   background-color: ${(props) => props.theme.xmain};
  color: ${(props) => props.theme.xsecondary};
}

.jobA{
   background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.accentTwo};
}

.jobB{
   background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.accentTwo};
}

.contactA{
  background-color:  ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.accentTwo};
}



`;
