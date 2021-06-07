import React from "react";
import Nav from "./Nav";
import Quiz from "./Quiz";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  width: 50%;
  padding: 10px;
`;

export default function QuizePage() {
  return (
    <div>
      <Nav />
      <Container>
        <Quiz />
      </Container>
    </div>
  );
}
