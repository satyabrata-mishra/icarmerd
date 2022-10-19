import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bg from "../Utils/bg2.webp";

export default function IcramerdHome() {
    return (
        <Conatiner style={{ backgroundImage: `url(${bg})` }}>
            <div className="yr22">
                <p>ICRAMERD - 23</p>
                <p>20th - 22nd July 2023</p>
                <Link to="icramerd22">View More</Link>
            </div>
            <div className="yr23">
                <p>ICRAMERD - 22</p>
                <p>24th - 25th Jul 2020</p>
                <Link to="icramerd23">View More</Link>
            </div>
        </Conatiner>
    )
}
const Conatiner = styled.div`
height: 20rem;
display: grid;
grid-template-columns: 50% 50%;
background-position: center;
.yr22{
    background-color: rgb(123, 123, 253,0.5);
    padding-top: 4rem;
    padding-left: 8rem;
    p:nth-child(1){
        color: white;
        font-size: 3.5rem;
        font-weight: 600;
        letter-spacing: 0.03rem;
    }
    p:nth-child(2){
        color: white;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.05rem;
        border-bottom: 2px solid white;
        width: 11rem;
        margin-bottom: 3rem;
    }
    a{
        padding: 0.5rem 1.6rem;
        text-decoration: none;
        background-color: rgb(255, 255, 255,0.4);
        color: white;
        border: 1px solid white;
        font-weight: 600;
        font-size: 0.8rem;
        transition: all 0.2s ease-in-out;
        &:hover{
            background-color: black;
            color: white;
        }
    }
}
.yr23{
    background-color: rgb(245, 90, 90,0.5);
    padding-top: 4rem;
    padding-left: 8rem;
    p:nth-child(1){
        color: white;
        font-size: 3.5rem;
        font-weight: 600;
        letter-spacing: 0.03rem;
    }
    p:nth-child(2){
        color: white;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.05rem;
        border-bottom: 2px solid white;
        width: 10.5rem;
        margin-bottom: 3rem;
    }
    a{
        padding: 0.5rem 1.6rem;
        text-decoration: none;
        background-color: rgb(255, 255, 255,0.4);
        color: white;
        border: 1px solid white;
        font-weight: 600;
        font-size: 0.8rem;
        transition: all 0.2s ease-in-out;
        &:hover{
            background-color: black;
            color: white;
        }
    }
}
@media only screen and (max-width: 550px){
    height: 18rem;
    .yr22{
        padding-top: 6rem;
        padding-left: 1rem;
        p:nth-child(1){
            font-size: 1.5rem;
            letter-spacing: 0;
        }
        p:nth-child(2){
            font-size: 0.8rem;
        }
        a{
            height: 1rem;
            width: 2rem;
            font-size: 0.7rem;
        }
    }
    .yr23{
        padding-top: 6rem;
        padding-left: 1rem;
        p:nth-child(1){
            font-size: 1.5rem;
        }
        p:nth-child(2){
            font-size: 0.8rem;
        }
        a{
            height: 1rem;
            width: 2rem;
            font-size: 0.7rem;
            
        }
    }
}
`;