import React from "react";

import { Nav, Link, Links } from "./navbar.styled";

export function Navbar() {
  return (
    <Nav>
      <Links>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Projects</Link>
        <Link>Contact</Link>
      </Links>
    </Nav>
  );
}
