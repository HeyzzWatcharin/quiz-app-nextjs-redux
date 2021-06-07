import React, { Component, useState } from "react";
import Question from "./question/Question";
import Answer from "./answer/Answer";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";

const NextStepCSS = styled.button`
  background-color: #009e00;
  margin-top: 5%;
  margin-left: 30%;
  color: #fff;
  padding: 10px 30px;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: green;
  }
  &[disabled] {
    display: none;
  }
`;

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  width: 100px;
  height: 30px;
`;

const BackStepCSS = styled(NextStepCSS)`
  background-color: blue;
  margin-left: 5%;
  &:hover {
    background-color: red;
  }
`;

const FinalPage = styled.div`
  text-align: center;
  h1 {
    text-align: center;
    margin: 15px 0;
    font-size: 25px;
    font-family: Arial, sans-serif;
    font-weight: bold;
    color: #008416;
    text-transform: none;
    text-shadow: none;
  }
`;

const Quiz = () => {
  const router = useRouter();
  const { step, questions, score, hashAnswer } = useSelector(
    (state) => state.quiz
  );
  const [correct, setCorrect] = useState([null, null, null, null]);
  const dispatch = useDispatch();
  const checkAnswer = (userAnswer, i) => {
    if (questions[step].answerId === userAnswer) {
      dispatch({ type: "ADD_SCORE" });
      setCorrect(
        correct.map((c, j) => {
          if (j === i) {
            return true;
          }
          return c;
        })
      );
    } else {
      setCorrect(
        correct.map((c, j) => {
          if (j === i) {
            return false;
          }
          return c;
        })
      );
    }

    dispatch({ type: "SET_HASH_ANSWER", payload: true });
  };
  const resetQuiz = () => {
    dispatch({ type: "RESET_ALL" });
    router.push("/");
  };
  return (
    <div className="Content">
      {step < questions.length ? (
        <>
          <Question question={questions[step].name} />
          {questions[step].choice.map((c, i) => (
            <div
              style={{ cursor: hashAnswer ? "not-allowed" : "pointer" }}
              onClick={() => (!hashAnswer ? checkAnswer(c.id, i) : null)}
              key={c.id}
            >
              <Answer correct={correct[i]} choice={c.text} />
            </div>
          ))}
          <NextStepCSS
            disabled={!hashAnswer}
            onClick={() => {
              dispatch({ type: "NEXT_STEP" });
              dispatch({ type: "SET_HASH_ANSWER", payload: false });
              setCorrect([null, null, null, null]);
            }}
          >
            Next
          </NextStepCSS>
        </>
      ) : (
        <FinalPage>
          <h1>Congratulation</h1>
          <p>
            Your score is: {score} / {questions.length}
          </p>
          <p>Thank you!</p>
          <Button onClick={resetQuiz}>
            RESTART
          </Button>
        </FinalPage>
      )}
    </div>
  );
};

export default Quiz;
