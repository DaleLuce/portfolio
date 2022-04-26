import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes.js";

import {
  JobContainer,
  JobContainerB,
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
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <JobContainer className="typeA">
          {console.log("test in projects", theme)}

          <Title>Heycouldyoutextmeifitsgoingtorain.com</Title>
          <MainDiv>
            <ImageDiv>
              <Image src={heycouldyou} alt="" />
            </ImageDiv>
            <WordDiv>
              <Blurb>
                This web app is designed to give the user weather updates when
                it matters the most. Utilizing the National Weather Service API,
                I keep my users in the know with text messages so they never
                have to regret not checking the weather again.
              </Blurb>
            </WordDiv>
          </MainDiv>
        </JobContainer>
        <JobContainer className="typeB">
          <TitleB>shouldaCoulda</TitleB>
          <MainDiv>
            <ImageDiv>
              <Image src={shoulda} alt="" />
            </ImageDiv>
            <WordDiv>
              <Blurb>
                This project is designed to help a user visualize the potential
                results of smarter spending and investing habits. I worked in a
                team of 4 developers to create this project, focusing mostly on
                UI/UX and user onboarding.
              </Blurb>
            </WordDiv>
          </MainDiv>
        </JobContainer>
        <JobContainer className="typeA">
          <Title>Nyet</Title>
          <MainDiv>
            <ImageDiv>
              <Image src={nyet} alt="" />
            </ImageDiv>
            <WordDiv>
              <Blurb>
                This E-commerce project is designed to provide the user with a
                modern shopping experience, while browsing the finst vodkas,
                never from Russia. I worked on this project in a team of 4
                developers and focused on the shopping cart and user checkout
                functionality, as well as the overall UI/UX.
              </Blurb>
            </WordDiv>
          </MainDiv>
        </JobContainer>
      </ThemeProvider>
    </>
  );
}
