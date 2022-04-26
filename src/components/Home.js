import React, { useState } from "react";
import {
  MainContainer,
  Intro,
  Line,
  LineBox,
  IntroBox,
  Image,
} from "./styles/Home.Styled";
// import { Container, ContainerHalf } from "./styles/Global.Styled";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes.js";

import { Birds } from "../components/Birds";

// import sun from "../assets/cloudsBirdsStars/sun.svg";
// import heycouldyou from "../assets/projectScreenshots/heycouldyou.png";

export function Home() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    console.log("holla", theme);
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <MainContainer className="typeA" onClick={() => themeToggler()}>
          <Birds />
          <IntroBox>
            <Intro>
              <Line>Hello World.</Line>
            </Intro>
            <LineBox>
              <Line>My Name is Dale.</Line>
            </LineBox>
          </IntroBox>
        </MainContainer>
      </ThemeProvider>
    </>
  );
}
