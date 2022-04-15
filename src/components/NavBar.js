import React, { useState } from "react";

import { Nav, Link } from "./styles/NavBar.Styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes.js";

export function NavBar() {
  return (
    <Nav className="typeB">
      <Link>Home</Link>
      <Link>About</Link>
      <Link>Projects</Link>
      <Link>Contact</Link>
    </Nav>
  );
}
