import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import styled from "styled-components";

const PhotoMain = styled.img`
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-self: center;
`;

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
  height: 30px;
`;

function login() {
  const router = useRouter();
  const [user, setUser] = useState("");
  return (
    <>
      <PhotoMain
        src="/1.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <h1>Welcome To Quiz App</h1>
      <Input
        type="text"
        placeholder="Please Input Your Name"
        onChange={(e) => setUser(e.target.value)}
        value={user}
      />
      <br />
      <Button
        type="submit"
        onClick={() => router.push(`/quizpage?Login=${user}`)}
      >
        Login
      </Button>
    </>
  );
}

export default login;
