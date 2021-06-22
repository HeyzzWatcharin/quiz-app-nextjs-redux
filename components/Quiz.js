import React, { useState } from "react";
import Question from "./question/Question";
import Answer from "./answer/Answer";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";

const PhotoMain = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-self: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NextStepCSS = styled.button`
  background-color: blue;
  margin-top: 5%;
  margin-left: 1%;
  text-align: center;
  align-items: center;
  margin-bottom: 10%;
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

const BackStepCSS = styled.button`
  background-color: red;
  margin-top: 5%;
  margin-bottom: 10%;
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
  background: red;
  border-radius: 3px;
  border: none;
  color: white;
  margin-bottom: 10%;
  width: 100px;
  height: 30px;
`;

const FinalPage = styled.div`
  text-align: center;
`;

const H1Con = styled.h1`
  text-align: center;
  margin: 15px 0;
  font-size: 25px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: green;
  text-transform: none;
  text-shadow: none;
`;

const H1Failed = styled.h1`
  text-align: center;
  margin: 15px 0;
  font-size: 25px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: red;
  text-transform: none;
  text-shadow: none;
`;

const Quiz = () => {
  const router = useRouter();
  const { step, questions, score, hashAnswer, selectedChoice } = useSelector(
    (state) => state.quiz
  );
  const [correct, setCorrect] = useState([null, null, null, null]); //fix now
  const dispatch = useDispatch();
  const checkAnswer = (userAnswer, i) => {
    console.log("This userAnswer when correct ---->", userAnswer);
    if (questions[step].answerId === userAnswer) {
      dispatch({ type: "ADD_SCORE" });
      console.log("Now Score when Correct ----->", score);
      setCorrect(
        correct.map((c, j) => {
          if (j === i) {
           
            return true;
          }
          
          return c;
        })
      );
      //  setCorrect(()=> (j===i) ? true : userAnswer)
    } else {
      dispatch({ type: "DELETE_SCORE" });
      console.log("Now Score when Incorrect ----->", score);
      //setCorrect(() => (j===i) ? false : userAnswer)
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

  const handleClick = (choice) => {
    console.log("This is Choice ---->", choice);
    dispatch({ type: "SELECTED_CHOICE", payload: choice });
  };
  return (
    <>
      {step < questions.length ? (
        <>
          <Question question={questions[step].name} />
          {questions[step].choice.map((c, i) => (
            <div
              style={{ cursor: hashAnswer ? "not-allowed" : "pointer" }}
              onClick={() => {
                // console.log("This score ---->",score);

                handleClick(c);
                console.log(c);
                console.log(
                  "This User Choice when click ---->",
                  selectedChoice
                );
                !hashAnswer ? checkAnswer(c.id, i) : null;
              }}
              key={c.id}
            >
              <Answer correct={correct[i]} choice={c.text} />
            </div>
          ))}
          <ButtonContainer>
            {step === 0 ? null : (
              <BackStepCSS
                onClick={() => {
                  dispatch({ type: "DELETE_SCORE" });
                  console.log("This score ---->",score);
                  dispatch({ type: "BACK_STEP" });
                  dispatch({ type: "SET_HASH_ANSWER", payload: false });
                  setCorrect([null, null, null, null]);
                }}
              >
                Back
              </BackStepCSS>
            )}

            <NextStepCSS
              onClick={() => {
                dispatch({ type: "NEXT_STEP" });
                dispatch({ type: "SET_HASH_ANSWER", payload: false });
                setCorrect([null, null, null, null]);
              }}
            >
              Next
            </NextStepCSS>
            <br />
          </ButtonContainer>
        </>
      ) : (
        <FinalPage>
          {score > questions.length / 2 ? (
            <H1Con>Congratulation</H1Con>
          ) : (
            <H1Failed>Your Failed คุณไม่ได้ไปต่อ!!!</H1Failed>
          )}
          <p>
            Your score is: {score} / {questions.length}
          </p>
          <p>Thank you!</p>
          <Button onClick={resetQuiz}>Play Again</Button>
          <PhotoMain
            src="/2.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </FinalPage>
      )}
    </>
  );
};

export default Quiz;
