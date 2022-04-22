import { Container } from "./styles/Global.Styled";
import {
  MainContainer,
  AboutContainer,
  AboutText,
  Icons,
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          fermentum ut massa vel porttitor. Sed ac tempor libero. Cras felis
          leo, euismod vitae laoreet ornare, tempus at magna. Nunc nec
          vestibulum nisi. Pellentesque neque ex, cursus consequat ultrices
          feugiat, lacinia eu augue. Ut tempor arcu at vestibulum sollicitudin.
          Ut a massa sit amet ex volutpat fermentum eu in leo. In velit enim,
          semper sed erat eu, hendrerit ullamcorper diam. Mauris semper volutpat
          risus aliquam volutpat. Nam interdum vitae justo sit amet vehicula.
          Sed ac tempor libero. Cras felis leo, euismod vitae laoreet ornare,
          tempus at magna. Nunc nec vestibulum nisi. Pellentesque neque ex.
        </AboutText>
      </AboutContainer>
      <Icons>
        {/* <IconBoxOne> */}
        <JavaScript width="70px" />
        <Html width="66px" />
        <Css width="66px" />
        {/* </IconBoxOne> */}
        {/* <IconBoxTwo> */}
        <ReactIcon width="70px" />
        <Redux width="70px" />
        <Sass width="70px" />
        {/* </IconBoxTwo> */}
        {/* <IconBoxThree> */}

        <Sequelize width="70px" />
        <Node width="70px" />
        <Postgres width="70px" />
        {/* </IconBoxThree> */}
      </Icons>
    </MainContainer>
  );
}
