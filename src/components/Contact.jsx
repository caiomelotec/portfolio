import styled from "styled-components";
import MapChart from "./MapChart";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Section = styled.section`
  height: 100vh;

  scroll-snap-align: center;
`;

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Title = styled.h1`
  font-weight: 600;
  font-size: 2em;
  background-color: rgb(3, 107, 243);
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: rgb(243, 237, 237);
  border: none-;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 20px;
  background-color: rgb(243, 237, 237);
  border: none-;
  border-radius: 5px;
`;

const Button = styled.button`
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  background-color: rgb(3, 107, 243);
`;

const Right = styled.section`
  flex: 1;
`;

export const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wvy4bbf",
        "template_lkivc4k",
        form.current,
        "UQ2-IQBffZS6p8HO0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={form} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input type="text" placeholder="Name" name="name" />
            <Input type="email" placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <MapChart />
        </Right>
      </Container>
    </Section>
  );
};
