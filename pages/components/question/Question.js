import React from "react";
import styled from "styled-components";
const H1 = styled.h1`
  margin: 15px 0;
  font-size: 25px;
  font-family: Arial, sans-serif;
  font-weight: normal;
  color: #da0f0b;
  text-transform: none;
  text-shadow: none;
  text-align: left;
`;
const Question = (props) => {
  return <H1>{props.question}</H1>;
};

export default Question;
