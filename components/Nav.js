import { useRouter } from "next/dist/client/router";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useDispatch } from "react-redux";

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ff8000;
  cursor: pointer;

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #ff9000;
  }
`;
const Li = styled.li`
  float: ${(props) => props.theme.Position};
  margin-right: ${(props) => props.theme.Marign};
`;

Li.defaultProps = {
  theme: {
    Position: "left",
  },
};

const theme = {
  Position: "right",
  Marign: "2%"
};

export default function Nav(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const logOut = () => {
    dispatch({ type: "RESET_ALL" });
    alert("คุณได้ทำการล็อคเอ้าท์เรียบร้อยแล้ว");
    router.push("/");
  };
  return (
    <>
      <Ul>
        <Li>
          <a onClick={() => router.push("/")}>โปรแกรมทำข้อสอบออนไลน์</a>
        </Li>
        <ThemeProvider theme={theme}>
          <Li>
            <a onClick={logOut}>{router.query.Login}</a>
          </Li>
        </ThemeProvider>
      </Ul>
    </>
  );
}
