import React from 'react'
// import { Link } from 'react-router-dom';
import styled from 'styled-components'

export default function CallForPaperHome() {
  return (
    <Container>
        <p className='head'>CALL FOR PAPERS</p>
        <p>Participants from academia, R&D organizations and industries are invited to submit original and unpublished full research papers.</p>
        <br />
        <p> <span>Selected papers of ICRAMERD-2023 will be published in different SCOPUS Indexed journals and proceedings</span>  based on the authors’ expression of interest and quality of paper which is recommended by Technical Review Committee/Editorial Board.</p>
        {/* <Link to="/call-for-paper">Know More</Link> */}
    </Container>
  )
}
const Container = styled.div`
height: 18rem;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
padding:0 16rem ;
.head{
    font-size: 2rem;
    color: black;
    border-bottom: 2px solid grey;
    margin-bottom: 1rem;
}
p{
    text-align: justify;
    font-size: 0.8rem;
    span{
        font-size: 0.8rem;
        border: none;
        font-weight: 600;
    }
}
a{
    height: 2rem;
        width: 8rem;
        text-decoration: none;
        color: black;
        border: 1px solid black;
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
@media only screen and (max-width: 550px){
    padding: 0;
    margin-left: 1rem;
    margin-right: 0.6rem;
    .head{
        font-size: 1.5rem;
    }
    p{
        font-size: 0.7rem;
    }
    a{
        font-size: 0.9rem;
        height: 2rem;
    }
}
`;