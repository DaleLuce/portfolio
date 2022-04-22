import React, { useState } from "react";
import { Intro, Line, LineBox, IntroBox } from "./styles/Home.Styled";
import { Container, ContainerHalf } from "./styles/Global.Styled";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes.js";
import { Birds } from "../components/Birds";

export function Home() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ContainerHalf className="typeA">
        <IntroBox>
          <Intro>
            <Line>Hello World.</Line>
          </Intro>

          <LineBox>
            <Line>My Name is Dale.</Line>
          </LineBox>
        </IntroBox>
      </ContainerHalf>
    </ThemeProvider>
  );
}
