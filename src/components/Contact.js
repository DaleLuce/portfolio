import react, { useState } from "react";
import { Container } from "./styles/Global.Styled";
import {
  ContactContainer,
  FormLabel,
  ContentBox,
  NameBox,
  Submit,
} from "./styles/Contact.Styled";
import { FormDiv, Title } from "./styles/Contact.Styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes.js";

import StyledComponents from "styled-components";
// import { GlobalStyles } from "../themes";

export function Contact() {
  const [theme, setTheme] = useState("light");

  return (
    // <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    //   <GlobalStyles />
    <ContactContainer className="contact">
      <Title>Get in touch!</Title>
      <FormDiv>
        <form>
          <FormLabel htmlFor="name">Who are you?</FormLabel>
          <br></br>
          <NameBox type="text" id="name"></NameBox>
          <br></br>

          <FormLabel htmlFor="content">How can I help?</FormLabel>
          <ContentBox type="text" id="content"></ContentBox>
          <Submit>Submit</Submit>
        </form>
      </FormDiv>

      {/* <FormDiv>
          <form
            action="mailto:Dale@luce.codes"
            method="get"
            encType="text/plain"
          >
            <div>
              <label htmlFor="name">
                Name:
                <input type="text" name="name" id="name" />
              </label>
            </div>
            <div>
              <label htmlFor="email">
                Email:
                <input type="text" name="email" id="email" />
              </label>
            </div>
            <div>
              <label>Comments:</label>
              <br />
              <textarea
                name="comments"
                rows="12"
                cols="35"
                placeholder="Get in touch!"
              ></textarea>
            </div>
            <div>
              <input type="submit" name="submit" value="Send" />
              <input type="reset" name="reset" value="Clear Form" />
            </div>
          </form>
        </FormDiv> */}
    </ContactContainer>
    // </ThemeProvider>
  );
}
