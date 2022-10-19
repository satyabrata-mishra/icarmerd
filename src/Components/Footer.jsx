import React from 'react';
import styled from 'styled-components';
import soa from '../Utils/soa logo.webp';

export default function Footer() {
    return (
        <Container>
            <div className="contains">
                <div className="container1">
                    <p>Organised By,</p>
                    <img src={soa} alt="" />
                    <p>S'O'A University</p>
                </div>
                <div className="container3">
                    <p>Department of Mechanical Engineering</p>
                    <p>Institute of Technical Education and Research</p>
                    <br />
                    <p> <span>S</span>iksha '<span>O</span>' <span>A</span>nusandhan</p>
                    <p>(Deemed to be University)</p>
                    <p>Bhubaneswar, Odisha, India</p>
                </div>
                <div className="container4">
                    <p>Tel: 9114639291</p>
                    <p>Email - icramerd23@soa.ac.in</p>
                </div>
            </div>
            <p className='copy'>&#169; 2022 by ICRAMERD.</p>
        </Container>
    )
}
const Container = styled.div`
background-color: #01012b;
height: 22rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.contains{
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid white;
    padding-bottom: 4rem;
    .container1{
        height: 8rem;
        border-right: 1px solid white;
        p{
            text-align: center;
            color: rgb(232, 74, 67);
            font-family: 'Poppins', sans-serif;
            font-size: 0.8rem;
            letter-spacing: 0.01rem;
            font-weight: 600;
        }
    }
    .container3{
        font-family: 'Poppins', sans-serif;
        padding: 0 1rem;
        border-right:1px solid white;
        p:nth-child(1){
            color: rgb(232, 74, 67);
        }
        p:nth-child(2){
            font-size: 0.7rem;
        }
        p{
            letter-spacing: 0.01rem;
            font-size: 0.9rem;
            color: wheat;
            margin: 0.2rem 0;
            span{
                color: rgb(232, 74, 67);
            }
        }
        p:nth-child(5){
            font-size: 0.7rem;
        }
        p:nth-child(6){
            font-size: 0.7rem;
        }
    }
    .container4{
        padding-left: 1rem;
        color: wheat;
        font-family: 'Poppins', sans-serif;
        p{
            text-align: left;
            margin: 0.5rem 0;
            font-size: 0.9rem;
            position: relative;
            bottom: 2rem;
        }
    }
}
.copy{
    margin-top: 1rem;
    color: white;
    font-size: 0.9rem;
    position: relative;
}
@media only screen and (max-width: 550px){
    height: 28rem;
    .contains{
        flex-direction: column;
        padding: 0;
        .container1{
            border: none;
            margin-top: -1rem;
            img{
                height: 7rem;
            }
        }
        .container3{
            border: none;
            margin-top: 2rem;
        }
        .container4{
            margin-right: 5.5rem;
            margin-top: 2rem;
            p{
                font-size: 0.85rem;
            }
        }
    }
}
`;