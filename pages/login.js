import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
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
  height: 30px;
`;

function login() {
  const router = useRouter();
  const [user,setUser] = useState("")
  return (
    <>
      <h1>Wellcom To Quiz App</h1>
      <Input type="text" placeholder="Please Input Your Name" onChange={(e)=> setUser(e.target.value)} value={user}  />
      {/* {user}
      <button onClick={() => setUser("")} >Clear</button> */}
      <br />
      <Button type="submit" onClick={() => router.push(`/components/QuizPage?Login=${user}`)}>
        Login
      </Button>
    </>
  );
}

export default login;
