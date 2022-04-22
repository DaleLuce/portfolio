import { Container } from "./styles/Global.Styled";
import {
  MainContainer,
  AboutContainer,
  AboutText,
  Icons,
  IconBox,
  IconTextBox,
} from "./styles/About.Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactComponent as JavaScript } from "../assets/icons/js.svg";
import { ReactComponent as Html } from "../assets/icons/html.svg";
import { ReactComponent as Css } from "../assets/icons/css.svg";
import { ReactComponent as ReactIcon } from "../assets/icons/react.svg";
import { ReactComponent as Redux } from "../assets/icons/redux.svg";
import { ReactComponent as Sass } from "../assets/icons/sass.svg";
import { ReactComponent as Sequelize } from "../assets/icons/sequelize.svg";
import { ReactComponent as Node } from "../assets/icons/node.svg";
import { ReactComponent as Postgres } from "../assets/icons/postgres.svg";

export function About() {
  return (
    <MainContainer className="typeA">
      <AboutContainer>
        {/* <img src={icon} alt="" width="400" height="400"></img> */}
        <AboutText>
          I am a fullstack web developer based in NYC. I have a background in
          print and small business development, and I am a passionate life long
          learner with an insatiable curiosity. I strive to build attractive,
          elegant and efficient solutions to whatever problems I'm trying to
          solve. <br />
          <br />
          When I'm not building websites or applications, I enjoy riding bikes
          around the city, playing drums, writing music, and spending time with
          my dog.
          <br />
          <br />I have experience with the following technologies...
        </AboutText>
      </AboutContainer>
      <Icons>
        <IconBox>
          <JavaScript width="70px" />
          <IconTextBox>Javascript</IconTextBox>
        </IconBox>

        <IconBox>
          <Html width="66px" />
          <IconTextBox>HTML5</IconTextBox>
        </IconBox>

        <IconBox>
          <Css width="66px" />
          <IconTextBox>CSS3</IconTextBox>
        </IconBox>
        <IconBox>
          <ReactIcon width="70px" />
          <IconTextBox>React</IconTextBox>
        </IconBox>
        <IconBox>
          <Redux width="70px" />
          <IconTextBox>Redux</IconTextBox>
        </IconBox>
        <IconBox>
          <Sass width="70px" />
          <IconTextBox>Sass</IconTextBox>
        </IconBox>
        <IconBox>
          <Sequelize width="70px" />
          <IconTextBox>Sequelize</IconTextBox>
        </IconBox>
        <IconBox>
          <Node width="70px" />
          <IconTextBox>Node.JS</IconTextBox>
        </IconBox>
        <IconBox>
          <Postgres width="70px" />
          <IconTextBox>Postgres</IconTextBox>
        </IconBox>
      </Icons>
    </MainContainer>
  );
}
