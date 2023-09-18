import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
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
const Icon = styled.img`
  width: 22px;
  cursor: pointer;
`;
const Button = styled.button`
  cursor: pointer;
  width: 100px;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 8px;
  background-color: rgb(3, 107, 243);
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
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png"></Icon>
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};
