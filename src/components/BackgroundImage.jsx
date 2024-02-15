import React from 'react';
import login from '../assets/login.jpg'
import styled from 'styled-components';
export default function BackgroungImage() {
  return (
    <Container>
      <img src={login} alt="Background" />
    </Container>
  )
}
const Container=styled.div`
height:100vh;
width:100vw;
 img{
   height:100vh;
   width:100vw;
 }
`;