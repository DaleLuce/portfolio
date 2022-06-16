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
      <div
        style={{
          overflow: "hidden",
          heght: "100%",
        }}
      >
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <div
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              overvlow: "auto",
            }}
          >
            <Navbar />
            <Home id="home" toggleTheme={toggleTheme} />
            <About id="about" />
            <Projects id="projects" />
            <Contact style={{ overscrollBehavior: "contain" }} />
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}
export default App;
