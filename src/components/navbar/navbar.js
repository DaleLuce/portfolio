import React from "react";

import { HashLink } from "react-router-hash-link";

import { Nav, Lank, Links } from "./navbar.styled";

export function Navbar() {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <Nav>
      <Links>
        <HashLink
          to={"/#homeSection"}
          activeclassname="selected"
          style={linkStyle}
        >
          <Lank>Home</Lank>
        </HashLink>
        <HashLink
          smooth
          to={"/#aboutSection"}
          activeclassname="selected"
          style={linkStyle}
        >
          <Lank>About</Lank>
        </HashLink>
        <HashLink smooth to={"/#projectSection"} style={linkStyle}>
          <Lank>Projects</Lank>
        </HashLink>

        <HashLink
          smooth
          to={"/#contactForm"}
          activeclassname="selected"
          style={linkStyle}
        >
          <Lank>Contact</Lank>
        </HashLink>
      </Links>
    </Nav>
  );
}
