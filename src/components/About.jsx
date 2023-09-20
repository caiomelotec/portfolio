import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.section`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.section`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 45px;
    padding: 20px;
  }
`;
const WhoAmI = styled.div`
  display: flex;

  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: yellow;
  font-size: 30px;
`;

const Desc = styled.p`
  font-size: 30px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: yellow;
  color: black;
  font-weight: 800;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const TechStack = styled.div``;

const Links = styled.div``;
export const About = () => {
  return (
    <Section>
      <Container>
        <Left></Left>
        <Right>
          <Title>Hi there</Title>
          <WhoAmI>
            <Line src="./img/line.png" />
            <Subtitle>I'm Caio Melo</Subtitle>
          </WhoAmI>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            voluptates ducimus, quidem architecto, sint corrupti fugit enim
            dolor dolorem fugiat recusandae vitae doloribus, sed est at
            eligendi. Ex, aspernatur repellendus.
          </Desc>
          <Button>Explore My Work</Button>
        </Right>
        <TechStack></TechStack>
        <Links></Links>
      </Container>
    </Section>
  );
};
