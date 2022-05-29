import React from "react";
import { Link } from "react-router-dom";

import { HashLink, NavHashLink } from "react-router-hash-link";

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
          activeClassName="selected"
          style={linkStyle}
        >
          <Lank>Home</Lank>
        </HashLink>
        <HashLink
          smooth
          to={"/#aboutSection"}
          activeClassName="selected"
          style={linkStyle}
        >
          <Lank>About</Lank>
        </HashLink>
        <HashLink
          smooth
          to={"/#projectSection"}
          activeStyle={{ color: "black" }}
          style={linkStyle}
        >
          <Lank>Projects</Lank>
        </HashLink>

        <HashLink
          smooth
          to={"/#contactForm"}
          activeClassName="selected"
          style={linkStyle}
        >
          <Lank>Contact</Lank>
        </HashLink>
      </Links>
    </Nav>
  );
}
