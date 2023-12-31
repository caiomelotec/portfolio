import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import styled from "styled-components";
import "./style/App.css";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  object-fit: cover;
  background: url("../public/img/bg-stars.jpg");

  background-size: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
