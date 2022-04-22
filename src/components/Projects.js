import React, { useState } from "react";
import { Container } from "./styles/Global.Styled";
import { lightTheme, darkTheme, GlobalStyles } from "../themes.js";
import { ThemeProvider } from "styled-components";

import {
  JobContainer,
  Card,
  Title,
  TitleB,
  Image,
  Blurb,
  TitleDiv,
  ImageDiv,
  WordDiv,
  MainDiv,
} from "./styles/Projects.Styled";
import heycouldyou from "../assets/projectScreenshots/heycouldyou.png";
import nyet from "../assets/projectScreenshots/nyet.png";
import shoulda from "../assets/projectScreenshots/shoulda.png";

export function Projects() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <JobContainer className="jobA">
        <Title>Heycouldyoutextmeifitsgoingtorain.com</Title>
        <MainDiv>
          <ImageDiv>
            <Image src={heycouldyou} alt="" />
          </ImageDiv>
          <WordDiv>
            <Blurb>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              et est sapien. Nulla vulputate odio nec turpis faucibus, sit amet
              vulputate nulla laoreet. Donec mollis ante non tortor placerat, a
              scelerisque erat bibendum.
            </Blurb>
          </WordDiv>
        </MainDiv>
      </JobContainer>
      <JobContainer className="typeA">
        <TitleB>shouldaCoulda</TitleB>
        <MainDiv>
          <ImageDiv>
            <Image src={shoulda} alt="" />{" "}
          </ImageDiv>
          <WordDiv>
            <Blurb>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              et est sapien. Nulla vulputate odio nec turpis faucibus, sit amet
              vulputate nulla laoreet. Donec mollis ante non tortor placerat, a
              scelerisque erat bibendum.
            </Blurb>
          </WordDiv>
        </MainDiv>
      </JobContainer>
      <JobContainer className="jobA">
        <Title>Nyet</Title>
        <MainDiv>
          <ImageDiv>
            <Image src={nyet} alt="" />{" "}
          </ImageDiv>
          <WordDiv>
            <Blurb>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              et est sapien. Nulla vulputate odio nec turpis faucibus, sit amet
              vulputate nulla laoreet. Donec mollis ante non tortor placerat, a
              scelerisque erat bibendum.
            </Blurb>
          </WordDiv>
        </MainDiv>
      </JobContainer>
    </ThemeProvider>
  );
}
