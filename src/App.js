import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { NavBar } from "./components/NavBar";

// const StyledApp = styled.div``;

function App() {
  return (
    <>
      <NavBar />

      <Home />
      <About />
    </>
  );
}
export default App;
