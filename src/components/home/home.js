import React from "react";
import { MainContainer, Intro, Line, LineBox, IntroBox } from "./home.styled";

import { GlobalStyles } from "../../themes.js";

import { Birds } from "../birds/birds";

export function Home({ toggleTheme }) {
  return (
    <>
      <GlobalStyles />
      <MainContainer
        id="homeSection"
        className="typeA"
        onClick={() => toggleTheme()}
      >
        <Birds />
        <IntroBox>
          <Intro>
            <Line>Hello World.</Line>
          </Intro>
          <LineBox>
            <Line>My Name is Dale.</Line>
          </LineBox>
        </IntroBox>
      </MainContainer>
    </>
  );
}
