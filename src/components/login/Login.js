
import "./login.css";
import styled from "styled-components";
import { AccountBox } from "./accountBox";
import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "../common/header/Head"
//import { AccountBox } from "./components/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left:120%;
  padding-top:50%;
`;

function Login() {
  const [click, setClick] = useState(false)

  return (
    <>
      
    <AppContainer>
     <AccountBox/>
    </AppContainer>
    </>
  );
}

export default Login;
