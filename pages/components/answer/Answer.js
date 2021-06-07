import React from "react";
import styled from "styled-components";

const AnswerCss = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 10px;
    width:50%;
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
`

const Answer = (props) => {
  let answers = Object.keys(props.answer).map((qAnswer, i) => (
    <li
      className={
        props.correctAnswer === qAnswer
          ? "correct"
          : props.clickedAnswer === qAnswer
          ? "incorrect"
          : ""
      }
      onClick={() => props.checkAnswer(qAnswer)}
      key={qAnswer}
    >
      {props.answer[qAnswer]}
    </li>
  ));

  return (
    <Container>
      <AnswerCss disabled={props.clickedAnswer ? true : false}>
        {answers}
      </AnswerCss>
      <div>
        {props.correctAnswer
          ? "Correct Answer!"
          : props.clickedAnswer
          ? "Incorrect Answer!"
          : ""}
      </div>
    </Container>
  );
};

export default Answer;
