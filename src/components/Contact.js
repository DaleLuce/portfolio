import react from "react";
import { Container } from "./styles/Global.Styled";
import {
  ContactContainer,
  FormLabel,
  ContentBox,
  NameBox,
} from "./styles/Contact.Styled";
import { FormDiv, Title } from "./styles/Contact.Styled";
// import { GlobalStyles } from "../themes";

export function Contact() {
  return (
    <>
      {/* <GlobalStyles /> */}
      <ContactContainer className="contactA">
        <Title>Get in touch!</Title>
        <FormDiv>
          <form>
            <FormLabel htmlFor="name">Who are you?</FormLabel>
            <br></br>
            <NameBox type="text" id="name"></NameBox>
            <br></br>

            <FormLabel htmlFor="content">How can I help?</FormLabel>
            <ContentBox type="text" id="content"></ContentBox>
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
    </>
  );
}
