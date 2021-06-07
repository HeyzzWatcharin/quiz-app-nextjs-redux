import React, { Component } from "react";
import styled from "styled-components";
import Quiz from "./components/Quiz";
import Login from './login'

const Container = styled.div`
  text-align: center;
  margin-top: 5%;
`

class index extends Component {
  render(){
    return (
      <Container>
        <Login />
      </Container>
    );
  }
}

export default index;


