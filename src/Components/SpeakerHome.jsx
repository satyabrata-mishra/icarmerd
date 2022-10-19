import React from 'react'
import styled from 'styled-components'
import bg from "../Utils/bg3.webp";


export default function SpeakerHome() {
  return (
    <Container style={{ backgroundImage: `url(${bg})` }}>
      <p>DISTINGUISHED SPEAKERS</p>
      <div className="cardsection">
        <div className="card">
          <img src="" alt="To be declared" />
          <p>To be declared</p>
          <p>Knowledge Management and Decision Making</p>
          <p>Plymouth Business School, University of Plymouth, United Kingdom</p>
          <p>"The Do's and Don'ts for High Quality Research"</p>
          <p>11:15 am - 12:00 noon | 12th August 2022</p>
        </div>
        <div className="card">
          <img src="" alt="To be declared" />
          <p>To be declared</p>
          <p>Knowledge Management and Decision Making</p>
          <p>Plymouth Business School, University of Plymouth, United Kingdom</p>
          <p>"The Do's and Don'ts for High Quality Research"</p>
          <p>11:15 am - 12:00 noon | 12th August 2022</p>
        </div>
      </div>

    </Container>
  )
}
const Container = styled.div`
    min-height: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem 0;
    p{
      margin-bottom: 2rem;
      color: white;
      font-size: 2rem;
      font-weight: 600;
      border-bottom: 5px solid white;
    }
    .cardsection{
      display: flex;
      flex-wrap: wrap;
      width: 55rem;
    }
    .card{
      width: 15rem;
      background-color: #0f0f15;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1.5rem 0;
      border-radius: 10px;
      margin: 1rem 1rem;
      img{
        height: 9rem;
        border-radius: 15px;
      }
      p{
        border: none;
        margin: 0;
      }
      p:nth-child(2){
        font-size: 1rem;
        border-bottom: 3px solid white;
        font-weight: 600;
        letter-spacing: 0.01rem;
      }
      p:nth-child(3){
        font-size: 0.8rem;
        text-align: center;
        font-weight: 600;
        margin: 1rem 0;
      }
      p:nth-child(4){
        font-size: 0.7rem;
        text-align: center;
        font-weight: 600;
        margin: 1rem 0;
      }
      p:nth-child(5){
        font-size: 0.7rem;
        text-align: center;
        font-weight: 400;
        margin: 1rem 0;
        font-style: italic;
        margin: 1rem 1rem;
      }
      p:nth-child(6){
        font-size: 0.7rem;
        text-align: center;
        color: #fb4646;
        font-size: 700;
      }
    }
    @media only screen and (max-width: 550px){
      margin-top: 1.3rem;
      flex-direction: row;
      padding: 0;
      p{
        margin-left: 3.5rem;
        font-size: 1.5rem;
        white-space: nowrap;
        margin-top: 1.5rem;
      }
      .cardsection{
        margin-left: 4rem;
      }
      .card{
        flex-direction: column;
        p:nth-child(2){
          font-size: 1rem;
        }
        p:nth-child(3){
          font-size: 0.7rem;
          margin: 1rem 0.2rem;
          white-space: pre-wrap;
        }
        p:nth-child(4){
          font-size: 0.7rem;
          margin: 1rem 0.2rem;
          white-space: pre-wrap;
        }
        p:nth-child(5){
          font-size: 0.7rem;
          margin: 1rem 0.2rem;
          white-space: pre-wrap;
        }
      }
    }
`;