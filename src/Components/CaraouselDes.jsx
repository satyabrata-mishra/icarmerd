import React from 'react';
import styled from 'styled-components';
import img23 from '../Utils/iter23.jpg';
import img22 from '../Utils/iter22.jpg'


export default function CaraouselDes({ yr }) {
    return (
        <Container>
            {yr===23?<>
                <div className="scrolling">
                    <p>Please Note : Selected papers from the conference will be published by SPRINGER as a proceedings book volume. Springer will conduct quality checks on the accepted papers and only papers that pass these checks will be published.</p>
                </div>
                <div className="scrolling">
                    <p>Please Note : Springer Nature does not charge any money for publication of Non-Open Access content. Abstracts/extended abstracts and short papers (less than 4 pages) are not considered for publication.</p>
                </div>
            </>:""}
            <img src={yr === 23 ? img23 : img22} alt="" />
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
        font-weight: 600;
        font-size: 0.85rem;
        padding: 0rem 1rem;
    }
    .scrolling{
        background-color: transparent;
        width: 50rem;
        height: 2rem;
        white-space: nowrap;
        overflow: hidden;
        p{
            animation: scroller 20s linear infinite;
            background-color: transparent;
        }
    }
    img{
        height: 21rem;
        width: 45rem;
    }
    @keyframes scroller {
        0%{
            transform: translateX(90%);
        }
        100%{
            transform: translateX(-90%);
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
            width: 24.3rem;
        }
    }
`;