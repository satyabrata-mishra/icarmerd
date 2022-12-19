import React from 'react';
import styled from 'styled-components';
import bg from '../Utils/bg.webp';
import soa from '../Utils/soa logo.webp';

export default function EventDescription({ yr }) {
    return (
        <Container style={{ backgroundImage: `url(${bg})` }}>
            <div className="container1">
                <img src={soa} alt="" />
            </div>
            <div className="container2">
                <p>{yr === 23 ? "4th" : yr === 22 ? "3rd" : yr === 21 ? "2nd" : yr === 20 ? "1st" : ""} International Conference on</p>
                <p>Recent Advances in Mechanical Engineering Research and Development</p>
                <p>ICRAMERD - {yr === 23 ? "23" : yr === 22 ? "22" : yr === 21 ? "21" : yr === 20 ? "20" : ""}</p>
            </div>
        </Container>
    )
}
const Container = styled.div`
margin-top: 4.6rem;
height: 12rem;
display: flex;
justify-content: center;
align-items: center;
background-position: center;
.container2{
    p{
        margin: 0.2rem 0;
    }
    p:nth-child(1){
        font-style: italic;
        color: #7DFFFF;
        font-weight: 600;
    }
    p:nth-child(2){
        color: white;
        font-weight: 600;
        border-bottom: 1px solid white;
        padding-bottom: 1rem;
    }
    p:nth-child(3){
        color: white;
        font-weight: 600;
        font-size: 4rem;
        letter-spacing: 0.1rem;
    }
    p:nth-child(4){
        color: white;
        font-weight: 600;
        background-color: #fe5252;
        text-align: center;
        width: 10rem;
        margin-left: 8rem;
        margin-top: 1.3rem;
        font-size: 0.8rem;
    }
}
@media only screen and (max-width: 550px){
margin: 0;
height: 10rem;
padding-top: 4rem;
.container1{
    img{
        height: 5rem;
        margin-left: 1rem;
    }
}
.container2{
    p:nth-child(1){
        font-size: 0.8rem;
    }
    p:nth-child(2){
        font-size: 0.7rem;
    }
    p:nth-child(3){
        font-size: 2rem;
    }
    p:nth-child(4){
        margin-left:0;
    }
}
}
`;