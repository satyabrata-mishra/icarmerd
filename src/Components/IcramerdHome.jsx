import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bg from "../Utils/bg2.webp";

export default function IcramerdHome() {
    return (
        <Conatiner style={{ backgroundImage: `url(${bg})` }}>
            <div className="yr20">
                <p>ICRAMERD - 20</p>
                <p>24th - 25th July 2020</p>
                <Link to="icramerd20">View More</Link>
            </div>
            <div className="yr21">
                <p>ICRAMERD - 21</p>
                <p>24th - 25th September 2020</p>
                <Link to="icramerd21">View More</Link>
            </div>
            <div className="yr22">
                <p>ICRAMERD - 22</p>
                <p>11th - 13th August 2022</p>
                <Link to="icramerd22">View More</Link>
            </div>
        </Conatiner>
    )
}
const Conatiner = styled.div`
min-height: 20rem;
display: grid;
grid-template-columns: 33% 34% 33%;
background-position: center;
.yr22{
    background-color: rgb(123, 123, 253,0.5);
    padding-top: 6rem;
    padding-left: 3rem;
    p:nth-child(1){
        color: white;
        font-size: 3rem;
        font-weight: 600;
        letter-spacing: 0.03rem;
    }
    p:nth-child(2){
        color: white;
        font-size: 0.9rem;
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
.yr21{
    background-color: rgb(245, 90, 90,0.5);
    padding-top: 6rem;
    padding-left: 3rem;
    p:nth-child(1){
        color: white;
        font-size: 3rem;
        font-weight: 600;
        letter-spacing: 0.03rem;
    }
    p:nth-child(2){
        color: white;
        font-size: 0.9rem;
        font-weight: 600;
        letter-spacing: 0.05rem;
        border-bottom: 2px solid white;
        width: 13rem;
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
.yr20{
    background-color: rgb(0, 128, 0,0.4);
    padding-top: 6rem;
    padding-left: 3rem;
    p:nth-child(1){
        color: white;
        font-size: 3rem;
        font-weight: 600;
        letter-spacing: 0.03rem;
    }
    p:nth-child(2){
        color: white;
        font-size: 0.9rem;
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
@media only screen and (max-width: 550px){
    display: flex;
    flex-direction: column;
    .yr20 , .yr21, .yr22{
        padding: 1rem 0 1rem 1rem;
        p:nth-child(1){
            font-size: 2rem;
            text-align: center;
        }
        p:nth-child(2){
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
            text-align: center;
            margin-left: 5.5rem;
        }
        a{
            padding: 0.4rem 1rem;
            margin-left: 8rem;
        }
    }
}
`;