import React, { useState } from "react";
import { ReactComponent as LightOn } from "../assets/lightbulbs/lighton.svg";
import { ReactComponent as LightOff } from "../assets/lightbulbs/lightoff.svg";

import { Nav, Link, LightBulb, Links } from "./styles/NavBar.Styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes.js";

export function NavBar() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Nav>
        <Links>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Projects</Link>
          <Link>Contact</Link>
        </Links>
        <LightBulb>
          {theme === "light" ? (
            <LightOn onClick={() => themeToggler()} />
          ) : (
            <LightOff onClick={() => themeToggler()} />
          )}
        </LightBulb>
      </Nav>
    </ThemeProvider>
  );
}
