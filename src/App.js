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

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Birds />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
export default App;
