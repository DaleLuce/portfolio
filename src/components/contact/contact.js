import React from "react";
import {
  ContactContainer,
  FormLabel,
  ContentBox,
  NameBox,
  Submit,
} from "./contact.styled";
import { FormDiv, Title } from "./contact.styled";

import StyledComponents from "styled-components";

export function Contact() {
  return (
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
    </ContactContainer>
  );
}
