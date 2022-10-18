import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Container>
      <nav>
        <Link to="/">ICRAMERD</Link>
        <Link to="/">Home</Link>
        <Link to="">Previous Confrences
          <ul>
            <li><Link to="icramerd21">2022</Link></li>
            <li><Link to="icramerd22">2023</Link></li>
          </ul>
        </Link>
        <Link to="call-for-papers">Submission</Link>
        <Link to="conference-theme">Conference Theme</Link>
        <Link to="registration">Registration</Link>
        <Link to="registration">Important Dates</Link>
        <Link to="committees">Committees</Link>
        <Link to="sponsorship">Sponsorship</Link>
        <Link to="contact-us">Contact Us</Link>
        <Link to="about-us">About Us</Link>
      </nav>
    </Container>
  )
}
const Container = styled.div`
background-color: #01012b;
position: fixed;
width: 100%;
top: 0;
z-index: 1;
nav{
    display: flex;
    align-items: center;
    height: 4.6rem;
    a:nth-child(1){
      background-color: #fa4848;
      padding:1.72rem 2rem;
      letter-spacing: 0.1rem;
      font-family: 'Rubik', sans-serif;
      font-weight: 600;
      margin:0 1.4rem 0 0;
      font-size: 1rem;
      &:hover{
        color: white;
      }
    }
    a:nth-child(3){
      &:hover{
        position: relative;
        top: 1.9rem;
        ul{
          display: block;
        }
      }
      ul{
        display: none;
        list-style: none;
        width: 6.6rem;
        background-color: #fa4848;
        li{
          padding:0.5rem 0.3rem;
          a{
            background-color: transparent;
            font-size: 0.7rem;
            color: #cec9c9;
            &:hover{
              color: white;
            }
          }
        }
      }
    }
    a{
      text-decoration: none;
      font-weight: 400;
      color: white;
      font-size: 0.7rem;
      margin: 0 0.5rem;
      /* font-family: 'Fredoka One', cursive; */
      font-family: 'Poppins', sans-serif;
      &:hover{
        color: skyblue;
      }
    }
}
@media only screen and (max-width: 550px){
nav{
  height: 3.1rem;
  a:nth-child(1){
    padding: 1rem 1rem;
    margin: 0 0.5rem 0 0;
  }
  a{
    white-space: nowrap;
  }
  a:nth-child(3){
    font-size: 0.7rem;
    &:hover{
      margin-right: 0.4rem;
    }
  }
}      
}
`;