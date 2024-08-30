import React, { useContext , useState, useEffect  } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom"
import { AccountContext } from "./accountContext";
import axios from 'axios';
import styled from "styled-components";

//import { confirmAlert } from 'react-confirm-alert';


  /*const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', {
        name,
        email,
        password,
        phone,
        password_confirmation: passwordConfirmation,
      });
      localStorage.setItem('authToken', response.data.token);
      window.location.href = '/dashboard';
    }
    catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };
  submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes')
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  };
  value={name} value={email}  value={phone}
  onChange={(e) => setName(e.target.value)}
   onChange={(e) => setEmail(e.target.value)}
onChange={(e) => setPhone(e.target.value)}
 value={password}
          onChange={(e) => setPassword(e.target.value)}
           value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
  */
 export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" required/>
        <Input type="email" placeholder="Email"required />
        <Input type="password" placeholder="Password" required/>
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit"><Link to='/Admin'class="link" >Signup</Link></SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Login
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
