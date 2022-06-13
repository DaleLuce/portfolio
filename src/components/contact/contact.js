import React, { useState } from "react";
import axios from "axios";

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
  const [formState, setFormState] = useState({
    name: "",
    contact: "",
    content: "",
  });

  const url = "https://luce.codes";

  const disableButton = (formState) => {
    for (let key in formState) {
      if (!formState[key]) return true;
    }
    return false;
  };

  const handleChange = (evt) => {
    setFormState({ ...formState, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    if (!disableButton(formState)) {
      setSent(true);
      try {
        const { contact, content, name } = formState;
        await axios.post("http://localhost:4000/send_mail", {
          contact,
          content,
          name,
        });
      } catch (error) {
        console.log(error);
      }
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
            <form>
              <FormLabel htmlFor="name">Who are you?</FormLabel>
              <br></br>
              <NameBox
                type="text"
                id="name"
                name="name"
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
                name="contact"
                onChange={handleChange}
              ></NameBox>
              <br></br>

              <FormLabel htmlFor="content">How can I help? </FormLabel>
              <ContentBox
                type="text"
                id="content"
                name="content"
                onChange={handleChange}
              ></ContentBox>

              <Submit
                type="submit"
                value="submit"
                onClick={handleSubmit}
                disabled={disableButton(formState)}
              >
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
