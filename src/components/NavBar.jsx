import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Logo = styled.h1``;
const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
`;
const ListItem = styled.li`
  cursor: pointer;
`;

import React from "react";

export const NavBar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo>Logo</Logo>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
      </Container>
    </Section>
  );
};
