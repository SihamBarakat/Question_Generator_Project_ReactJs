import React from "react";
import {  useState, useEffect, useContext } from "react";
import { BoldLink, BoxContainer, FormContainer,  Input, MutedLink, SubmitButton,} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from 'axios';
import { Link } from "react-router-dom"

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });

      localStorage.setItem('authToken', response.data.token);
      window.location.href = '/dashboard';
    }
     catch (error) {
      console.error(error);
      alert('Invalid email or password');
    }
  };
  return (
    <BoxContainer classname="col-sum-6">
      <FormContainer>
        <Input  type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <Input  type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="/">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" ><Link to='/Admin'class="link" >Login</Link></SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
      <MutedLink href="/">
       Go Back To Home Page?{" "}
        <BoldLink href="/" >
          Back
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
