import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  ContactContainer,
  FormLabel,
  ContentBox,
  NameBox,
  Thanks,
  Submit,
} from "./contact.styled";
import { FormDiv, Title } from "./contact.styled";

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
        </>
      ) : (
        <Thanks>Thanks!</Thanks>
      )}
    </ContactContainer>
  );
}
