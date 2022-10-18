import React from 'react';
import styled from 'styled-components';
import img from '../Utils/iter.jpg';


export default function CaraouselDes() {
    return (
        <Container>
            {/* <div className="scrolling">
                <p>*Following up on this year's success, we are glad to announce the dates of ICRAMERD 2023. Coference Date: 20th - 22nd July, 2023. *</p>
            </div> */}
            <img src={img} alt="" />
        </Container>
    )
}
const Container = styled.div`
    height: 24rem;
    background-color: #222121;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p{
        color: white;
        background-color: #fe5252;
        font-weight: 600;
        font-size: 0.85rem;
        padding: 0.2rem 1rem;
    }
    .scrolling{
        background-color: transparent;
        width: 54rem;
        height: 2rem;
        overflow: hidden;
        p{
            animation: scroller 25s linear infinite;
            background-color: transparent;
        }
    }
    img{
        height: 21rem;
        width: 45rem;
    }
    @keyframes scroller {
        0%{
            transform: translateX(100%);
        }
        100%{
            transform: translateX(-100%);
        }
    }
    @media only screen and (max-width: 550px){
        height: 18rem;
        p{
            font-size: 0.5rem;
            padding: 0;
            text-align: center;
        }
        img{
            height: 13rem;
            width: 25rem;
        }
    }
`;