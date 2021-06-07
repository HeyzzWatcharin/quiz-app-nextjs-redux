import React, { Component } from "react";
import Question from "./question/Question";
import Answer from "./answer/Answer";
import styled from "styled-components";
import { connect } from "react-redux";

const NextStepCSS = styled.button`
  background-color: #009e00;
  margin-top:5%;
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

const BackStepCSS = styled(NextStepCSS)`
  background-color: blue;
  margin-left: 5%;
  &:hover {
    background-color: red;
  }
`

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

class Quiz extends Component {
  state = {
    quiestions: {
      1: "ข้อไหนเป็นสัตว์ปี",
      2: "สีไหนไม่อยู่ในแม่สี",
      3: "ข้อ 1 ถูกต้อง",
      4: "ข้อ 2 ถูกต้อง",
      5: "ข้อ 3 ถูกต้อง",
    },
    answers: {
      1: {
        1: "หมู",
        2: "หมา",
        3: "กา",
        4: "แมว",
      },
      2: {
        1: "แดง",
        2: "เหลือง",
        3: "น้ำเงิน",
        4: "ม่วง",
      },
      3: {
        1: "ตอบข้อ 1",
        2: "ตอบข้อ 2",
        3: "ตอบข้อ 3",
        4: "ตอบข้อ 4",
      },
      4: {
        1: "ตอบข้อ 1",
        2: "ตอบข้อ 2",
        3: "ตอบข้อ 3",
        4: "ตอบข้อ 4",
      },
      5: {
        1: "ตอบข้อ 1",
        2: "ตอบข้อ 2",
        3: "ตอบข้อ 3",
        4: "ตอบข้อ 4",
      },
    },
    correctAnswers: {
      1: "3",
      2: "4",
      3: "1",
      4: "2",
      5: "3",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
  };

  checkAnswer = (answer) => {
    const { correctAnswers, step, score } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer,
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer,
      });
    }
  };

  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  };

  backStep = (step) => {
    this.setState({
      step: step -1,
      correctAnswer: 0,
      clickedAnswer: 0,
    })
  }

  render() {
    let { quiestions, answers, correctAnswer, clickedAnswer, step, score } =
      this.state;
    return (
      <div className="Content">
        {step <= Object.keys(quiestions).length ? (
          <>
            <Question question={quiestions[step]} />
            <Answer
              answer={answers[step]}
              step={step}
              checkAnswer={this.checkAnswer}
              correctAnswer={correctAnswer}
              clickedAnswer={clickedAnswer}
            />
            <NextStepCSS
              disabled={
                clickedAnswer && Object.keys(quiestions).length >= step
                  ? false
                  : true
              }
              onClick={() => this.nextStep(step)}
            >
              Next
            </NextStepCSS>
            {/* <BackStepCSS disabled={
                clickedAnswer && Object.keys(quiestions).length >= step
                  ? false
                  : true
              }>
                Back
              </BackStepCSS> */}
          </>
        ) : (
          <FinalPage>
            <h1>Congratulation</h1>
            <p>
              Your score is: {score} / {Object.keys(quiestions).length}
            </p>
            <p>Thank you!</p>
          </FinalPage>
        )}
      </div>
    );
  } 
}

const mapDispatchToProps = ({
  nextstep: () => ({ type: "NEXTSTEP"})
})

export default connect(null,mapDispatchToProps) (Quiz);