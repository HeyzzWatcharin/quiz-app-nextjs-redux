import React from "react";
import styled from "styled-components";

const AnswerCss = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 10px;
    width: 50%;
    border-left: 4px solid #ff3b3b;
    background-color: #bbb;
    margin: 0 0 5px;
  }
  &li:hover {
    cursor: pointer;
    background-color: #a2a2a2;
  }
  .correct,
  .correct:hover {
    background-color: #1db900;
    border-left: 4px solid #0f6300;
    color: #fff;
  }
  .incorrect,
  .incorrect:hover {
    background-color: #ec0000;
    border-left: 4px solid #ff3b3b;
    color: #fff;
  }
  &[disabled] {
    pointer-events: none;
    opacity: 0.7;
  }
`;

const Container = styled.div`
  margin-left: 30%;
`;

const Answer = ({ choice, correct }) => {
  return (
    <Container>
      <AnswerCss>
        <li
          className={
            correct ? "correct" : correct === false ? "incorrect" : null
          }
        >
          {choice}
        </li>
      </AnswerCss>
    </Container>
  );
};

export default Answer;
