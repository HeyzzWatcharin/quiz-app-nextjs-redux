import React from "react";
import Nav from "../components/Nav";
import Quiz from "../components/Quiz";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  width: 50%;
  padding: 10px;
`;

export default function QuizePage() {
  return (
    <>
      <Nav />
      <Container>
        <Quiz />
      </Container>
    </>
  );
}
