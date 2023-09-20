import styled from "styled-components";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const Title = styled.h1`
  font-weight: 600;
  font-size: 2em;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    width: 300px;
  }
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
  color: black;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  background-color: yellow;
`;

const Right = styled.section`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Message = styled.h1`
  font-weight: 600;
  font-size: 2em;
  background-color: green;
`;

export const Contact = () => {
  const form = useRef();

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
          toast.success(
            "Your message has been sent. I'll get back to you soon :)",
            {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const notify = () => toast(" ");

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
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover={true}
              theme="dark"
            />
          </Form>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};
