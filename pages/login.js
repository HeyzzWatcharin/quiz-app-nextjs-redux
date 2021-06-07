import { useRouter } from "next/dist/client/router";
import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 10px;
  padding: 10px;
  margin: 1%;
`;

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  width: 100px;
  height:30px;
`;

function login() {
  const router = useRouter();
  return (
    <>
      <h1>Wellcom To Quiz App</h1>
      <Input type="text" placeholder="Please Input Your Name" />
      <br />
      <Button type="button" onClick={() => router.push("/components/QuizPage")}>
        Login
      </Button>
    </>
  );
}

export default login;
