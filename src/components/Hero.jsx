import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { NavBar } from "./NavBar";
import { WebDesign } from "./WebDesign";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 150vh;
  }
`;

const Container = styled.section`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.section`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    flex-direction: column;

    align-items: center;
  }
`;
const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 30px;
  }
`;
const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: white;
`;

const Desc = styled.p`
  font-size: 30px;

  color: yellow;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    padding: 20px;
    text-align: center;
    width: 50%;
  }
`;

const Button = styled.button`
  background-color: yellow;
  color: blck;
  font-weight: 800;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.section`
  flex: 1;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    height: 50vh;
  }
`;
const Img = styled.img`
  width: 600px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: rotate 10s linear infinite;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 768px) {
    height: 300px;
    width: 300px;
  }
`;
export const Hero = () => {
  return (
    <Section>
      <NavBar />
      <Container>
        <Left>
          <Title>Crafting Digital Excellence, One Line of Code at a Time</Title>
          <WhatIDo>
            <Line src="./img/line.png" />
            <Subtitle>What I do</Subtitle>
          </WhatIDo>
          <Desc>Specializing in Frontend Web Development</Desc>
          <Button>Explore My Work</Button>
        </Left>
        <Right>
          <WebDesign />
        </Right>
      </Container>
    </Section>
  );
};
