import React from "react";
import {
  MainContainer,
  Intro,
  Line,
  LineBox,
  IntroBox,
  SubHead,
} from "./home.styled";

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
          <SubHead>
            I am seeking a challenging frontend or fullstack software
            engineering role at a mission driven technology company.
          </SubHead>
        </IntroBox>
      </MainContainer>
    </>
  );
}
