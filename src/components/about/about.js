import React from "react";

import {
  MainContainer,
  AboutContainer,
  AboutText,
  Icons,
  IconBox,
  IconTextBox,
} from "./about.styled";

import { ReactComponent as JavaScript } from "../../assets/icons/js.svg";
import { ReactComponent as Html } from "../../assets/icons/html.svg";
import { ReactComponent as Css } from "../../assets/icons/css.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/react.svg";
import { ReactComponent as Redux } from "../../assets/icons/redux.svg";
import { ReactComponent as Sass } from "../../assets/icons/sass.svg";
import { ReactComponent as Sequelize } from "../../assets/icons/sequelize.svg";
import { ReactComponent as Node } from "../../assets/icons/node.svg";
import { ReactComponent as Postgres } from "../../assets/icons/postgres.svg";

import { useContext } from "react";
import { ThemeContext } from "styled-components";

export function About() {
  const iconWidth = "6vw";
  const themeContext = useContext(ThemeContext);
  const fill = themeContext.four;

  return (
    <MainContainer id="aboutSection" className="typeB">
      <AboutContainer>
        <AboutText>
          I am a fullstack web developer based in NYC. I have a background in
          print and small business development, and I am a passionate life long
          learner with an insatiable curiosity. I strive to build attractive,
          elegant and efficient solutions to whatever problems I'm trying to
          solve. <br />
          <br />
          When I'm not building software, I enjoy riding bikes around the city,
          playing drums, writing music, and spending time with my dog.
          <br />
          <br />I have experience with the following technologies:
        </AboutText>
      </AboutContainer>
      <Icons>
        <IconBox>
          <JavaScript
            fill={fill}
            width={iconWidth}
            style={{ display: "block", margin: "auto" }}
          />
          <IconTextBox>Javascript</IconTextBox>
        </IconBox>

        <IconBox>
          <Html
            fill={fill}
            width={iconWidth}
            style={{ display: "block", margin: "auto" }}
          />
          <IconTextBox>HTML5</IconTextBox>
        </IconBox>

        <IconBox>
          <Css
            fill={fill}
            width={iconWidth}
            style={{ display: "block", margin: "auto" }}
          />
          <IconTextBox>CSS3</IconTextBox>
        </IconBox>
        <IconBox>
          <ReactIcon
            fill={fill}
            width={iconWidth}
            style={{ display: "block", margin: "auto" }}
          />
          <IconTextBox>React</IconTextBox>
        </IconBox>
        <IconBox>
          <Redux
            fill={fill}
            width={iconWidth}
            style={{ display: "block", margin: "auto" }}
          />
          <IconTextBox>Redux</IconTextBox>
        </IconBox>
        <IconBox>
          <Sass
            fill={fill}
            width={iconWidth}
            style={{ display: "block", margin: "auto" }}
          />
          <IconTextBox>Sass</IconTextBox>
        </IconBox>
        <IconBox>
          <Sequelize
            fill={fill}
            width={iconWidth}
            style={{ display: "block", margin: "auto" }}
          />
          <IconTextBox>Sequelize</IconTextBox>
        </IconBox>
        <IconBox>
          <Node
            fill={fill}
            width={iconWidth}
            style={{ display: "block", margin: "auto" }}
          />
          <IconTextBox>Node.JS</IconTextBox>
        </IconBox>
        <IconBox>
          <Postgres
            fill={fill}
            width={iconWidth}
            style={{ display: "block", margin: "auto" }}
          />
          <IconTextBox>Postgres</IconTextBox>
        </IconBox>
      </Icons>
      <AboutText>
        I can help your company or organization build custom web sites,
        e-commerce sites &amp; applications. On top of writing code, I enjoy
        UI/UX design, illustration, and graphic design.
      </AboutText>
    </MainContainer>
  );
}
