import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes.js";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Navbar } from "./components/navbar/navbar";
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTimeout(() => {
      theme === "light" ? setTheme("dark") : setTheme("light");
    }, "900");
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Navbar />
        <Home toggleTheme={toggleTheme} />
        <About />
        <Projects />
        <Contact />
      </ThemeProvider>
    </>
  );
}
export default App;
