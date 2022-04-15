import React, { useState } from "react";
import { Intro, Lamp } from "./styles/Home.Styled";
import { Container } from "./styles/Global.Styled";
import { ReactComponent as LampLightOn } from "../Icons/lamplighton.svg";
import { ReactComponent as LampBeigeOff } from "../Icons/lampBeigeOff.svg";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes.js";

export function Home() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container className="typeA">
        <Intro>
          Hi, My Name Is Dale.{" "}
          <Lamp>
            {theme === "light" ? (
              <LampLightOn onClick={() => themeToggler()} />
            ) : (
              <LampBeigeOff onClick={() => themeToggler()} />
            )}
          </Lamp>
        </Intro>
      </Container>
    </ThemeProvider>
  );
}
