import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


export default function Navbar() {
  const location = useLocation();
  const naviagte = useNavigate();
  const handleSelect = () => {
    const val = parseInt(document.getElementById("pc").value);
    if (val === 20)
      naviagte("/icramerd20");
    else if (val === 21)
      naviagte("/icramerd21");
    else if (val === 22)
      naviagte("/icramerd22");
  }
  return (
    <Container>
      <nav>
        <Link to="/">ICRAMERD</Link>
        <Link className={location.pathname === "/" ? "locate" : ""} to="/">Home</Link>
        <select name="pc" id="pc" onClick={handleSelect} className={location.pathname === "/icramerd20" || location.pathname === "/icramerd21" || location.pathname === "/icramerd22" ? "locate" : ""}>
          <option className={location.pathname === "/icramerd20" ? "locate" : ""} value="20">2020</option>
          <option className={location.pathname === "/icramerd21" ? "locate" : ""} value="21">2021</option>
          <option className={location.pathname === "/icramerd22" ? "locate" : ""} value="22">2022</option>
        </select>
        <Link className={location.pathname === "/submission" ? "locate" : ""} to="submission">Submission</Link>
        <Link className={location.pathname === "/conference-theme" ? "locate" : ""} to="conference-theme">Conference Theme</Link>
        <Link className={location.pathname === "/registration" ? "locate" : ""} to="registration">Registration</Link>
        <Link className={location.pathname === "/important-dates" ? "locate" : ""} to="important-dates">Important Dates</Link>
        <Link className={location.pathname === "/committees" ? "locate" : ""} to="committees">Committees</Link>
        <Link className={location.pathname === "/contact-us" ? "locate" : ""} to="contact-us">Contact Us</Link>
        <Link className={location.pathname === "/sponsorship" ? "locate" : ""} to="sponsorship">Sponsorship</Link>
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
    .locate{
      border-bottom: 3px solid blue;
    }
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
    select{
      background-color: transparent;
      color: white;
      outline: none;
      border: none;
      text-align: center;
      font-size: 0.8rem;
      cursor: pointer;
      option{
        background-color: #01012b;
        border: none;
      }
    }
    a{
      text-decoration: none;
      font-weight: 400;
      color: white;
      font-size: 0.7rem;
      margin: 0 0.5rem;
      font-family: 'Poppins', sans-serif;
      &:hover{
        /* color: skyblue; */
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