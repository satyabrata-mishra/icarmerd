import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import confernce from '../Utils/conference theme.webp';
export default function ConferenceThemeHome() {
    return (
        <Container>
            <div className="container1">
                <span>CONFERENCE THEMES</span>
                <ul>
                    <li>Advanced Materials</li>
                    <li>Design Engineering</li>
                    <li>Advances in Manufacturing Engineering</li>
                    <li>Thermal Systems Engineering</li>
                    <li>Automation in Engineering</li>
                    <li>Industrial and Systems Engineering</li>
                    <li>Automotive Engineering</li>
                    <li>Energy</li>
                </ul>
                <Link to="conference-theme">MORE DETAILS</Link>
            </div>
            <div className="container2">
                <img src={confernce} alt="" />
            </div>
        </Container>
    )
}
const Container = styled.div`
height: 20rem;
display: flex;
justify-content: center;
background-color: #01012b;
.container1{
    height: 20rem;
    width: 20rem;
    background-color: #fa4848;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 3rem;
    span{
        color: white;
        font-weight: 600;
        letter-spacing: 0.03rem;
        font-size: 1.4rem;
        border-bottom: 3px solid white;
        width: 15rem;
    }
    ul{
        margin: 0.5rem 0 0 1rem;
        li{
            color: white;
            font-size: 0.8rem;
            font-weight: 600;
        }
    }
    a{
        height: 2rem;
        width: 8rem;
        text-decoration: none;
        color: white;
        border: 1px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        font-size: 0.9rem;
        font-weight: 600;
        background-color: rgb(255, 255, 255,0.3);
        transition: all 0.4s;
        &:hover{
            background-color: black;
            color: white;
        }
    }
}
.container2{
    img{
        height: 20rem;
    }
}
@media only screen and (max-width: 550px){
    height: 15rem;
    .container1{
        width: 16rem;
        height: 15rem;
        padding-left: 1.2rem;
        span{
            font-size: 1rem;
            width: 12rem;
        }
        ul{
            margin: 0.5rem 0 0 1rem;
            li{
                    font-size: 0.6rem;
            }    
        }
        a{
            height: 1.8rem;
            width: 7rem;
            font-size: 0.8rem;
        }
    }
    .container2{
        display: none;
    }
}
`;