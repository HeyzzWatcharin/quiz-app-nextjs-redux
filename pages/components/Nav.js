
import { useRouter } from "next/dist/client/router";
import React,{useState} from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ff8000;
  cursor: pointer;
  li {
    float: left;
  }

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

export default function Nav(props) {
  const router = useRouter();
  return (
    <div>
      <Ul>
        <li>
          <a class="active" onClick={ () => router.push("/")}>โปรแกรมทำข้อสอบออนไลน์</a>
        </li>
        <li className="setPosition">
          <a>Watcharin</a>
        </li>
      </Ul>
      <style jsx>{`
        .setPosition{
          float: right;
        }
      `}</style>
    </div>
  );
}
