import React, { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "styled-components";

import {
  ContactContainer,
  FormLabel,
  ContentBox,
  NameBox,
  Thanks,
  Submit,
  ContactIcons,
  IconLink,
} from "./contact.styled";
import { IconBox, IconTextBox } from "../about/about.styled";
import { FormDiv, Title } from "./contact.styled";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";

export function Contact() {
  const [sent, setSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1vkw3yt",
        "template_38",
        form.current,
        "Y8MxJmZlUIwstGaKp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const disableButton = (formState) => {
    for (let key in formState) {
      if (!formState[key]) {
        return true;
      }
    }
    return false;
  };

  //allows the disableButton function to work
  const handleChange = (evt) => {
    setFormState({ ...formState, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    if (disableButton(formState) === false) {
      setSent(true);
      sendEmail(evt);
    } else {
      alert("Please complete the form before submitting!");
    }
  };
  const iconWidth = "15vh";
  const themeContext = useContext(ThemeContext);
  const fill = "#da4167";

  return (
    <ContactContainer id="contactForm" className="contact">
      {!sent ? (
        <>
          <Title>Get in touch!</Title>
          <FormDiv>
            <form onSubmit={sendEmail} ref={form}>
              <FormLabel htmlFor="name">Who are you?</FormLabel>
              <br></br>
              <NameBox
                type="text"
                id="name"
                name="user_name"
                onChange={handleChange}
              ></NameBox>
              <br></br>

              <FormLabel htmlFor="contact">
                What's the best way to reach you?
              </FormLabel>
              <br></br>
              <NameBox
                type="text"
                id="contact"
                name="user_email"
                onChange={handleChange}
              ></NameBox>
              <br></br>

              <FormLabel htmlFor="content">How can I help? </FormLabel>
              <ContentBox
                type="text"
                id="content"
                name="message"
                onChange={handleChange}
              ></ContentBox>

              <Submit type="submit" value="Send" onClick={handleSubmit}>
                Submit
              </Submit>
            </form>
          </FormDiv>
          <ContactIcons>
            <IconBox>
              <IconLink href="https://www.linkedin.com/in/daleowenluce/">
                <Linkedin
                  fill={fill}
                  width={iconWidth}
                  style={{ height: "6vh" }}
                />
                <IconTextBox>LinkedIn</IconTextBox>
              </IconLink>
            </IconBox>
            <IconBox>
              <IconLink
                href="https://github.com/daleluce
"
              >
                <Github
                  fill={fill}
                  width={iconWidth}
                  style={{ height: "6vh" }}
                />

                <IconTextBox>Github</IconTextBox>
              </IconLink>
            </IconBox>
          </ContactIcons>
        </>
      ) : (
        <Thanks>Thanks!</Thanks>
      )}
    </ContactContainer>
  );
}
