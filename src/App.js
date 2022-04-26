import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Birds } from "./components/Birds";
// const StyledApp = styled.div``;
// import { ThemeProvider } from "styled-components";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </ThemeProvider>
    </>
  );
}
export default App;
