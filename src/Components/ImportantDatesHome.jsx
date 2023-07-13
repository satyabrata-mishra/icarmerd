import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function ImportantDatesHome({ yr }) {
    return (
        <Container>
            <p>Important Dates</p>
            <div className="container1">
                <div className="box">
                    <p>Paper Submission Deadline</p>
                    {/* <p>Submission Closed</p> */}
                    <p>5th June 2023</p>
                </div>
                <div className="box">
                    <p>Paper Acceptance Notification</p>
                    {/* <p>Submission Closed</p> */}
                    <p>15th June 2023</p>
                </div>
                <div className="box">
                    <p>Camera-Ready Paper Deadline</p>
                    {/* <p>Submission Closed</p> */}
                    <p>5th July 2023</p>
                </div>
                <div className="box">
                    <p>Registration Deadline</p>
                    {/* <p>Submission Closed</p> */}
                    <p>5th July 2023</p>
                </div>
            </div>
            {/* <p className='already'>Already Registered? Check your details in the <Link to="/list-of-registred-papers">"List of Registration Forms & Camera-Ready Paper Recieved"</Link> now.</p> */}
            <div className="container2">
                <p>Conference Dates</p>
                <p>20th-22nd of July 2023</p>
                <Link to="/registration">REGISTER NOW</Link>
            </div>
            {yr === 23 &&
                <>
                    <p>You Are Invited!</p>
                    <p className='invite'>Department of Mechanical Engineering, ITER, Siksha 'O' Anusandhan (Deemed to be University), and IIIE Odisha Chapter cordially invites you to the <span>Inaugural Ceremony</span> of the <span>4th International Conference on Recent Advances in Mechanical Engineering Research and Development - 2023</span>.</p>
                </>
            }
        </Container>
    )
}
const Container = styled.div`
min-height: 26rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
p{
    border-bottom: 3px solid gray;
    color: #242323;
    font-size: 1.7rem;
    font-weight:600;
    margin-bottom: 1rem;
}
.container1{
    display: flex;
    .box{
        border: 5px solid #242323;
        height: 11rem;
        width: 13.25rem;
        padding: 2rem 1rem;
        p{
            font-size: 0.9rem;
            border: none;
            text-align: center;
        }
        p:nth-child(1){
            font-weight: 600;
            font-size: 1.3rem;
            color: #323232;
        }
        p:nth-child(2){
            color: red;
            font-size: 0.8rem;
        }
        p:nth-child(3){
            color: #323232;
            font-size: 0.7rem;
            text-decoration: line-through;
        }
    }
    .box:nth-child(2){
        border-right: none;
        border-left: none;
    }
    .box:nth-child(3){
        border-right: none;
    }
}
.already{
    background-color: #fd4f4f;
    color: white;
    border: none;
    font-size: 0.8rem;
    width: 53.2rem;
    text-align: center;
    padding: 0.2rem 0;
    a{
        font-size: 0.8rem;
        color: white;
    }
}
.container2{
    height: 7rem;
    background-color: skyblue;
    width: 53rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    justify-content: center;
    align-items: center;
    margin-top: -1rem;
    border: 5px solid #242323;
    p:nth-child(1){
        font-size: 1.4rem;
        border: none;
        color: white;
    }
    p:nth-child(2){
        font-size: 0.8rem;
        border: none;
        color: white;
    }
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5rem;
        width: 10rem;
        background-color: rgb(255, 255, 255,0.4);
        margin-bottom: 0.5rem;
        text-decoration: none;
        color: white;
        border: 1px solid white;
        font-size: 0.8rem;
        font-weight:600;
        transition: all 0.2s ease-in-out;
        &:hover{
            background-color: black;
        }
    }
}
.invite{
    font-size: 0.8rem;
    margin: 1rem 15rem;
    border: none;
    text-align: justify;
    font-weight:400;
    span{
        font-style: italic;
        font-weight: 600;
    }
}
@media only screen and (max-width: 550px){
    p{
        font-size: 1.3rem;
    }
    .container1{
        /* margin-left: 2rem; */
        .box{
            height: 5rem;
            width: 5.9rem;
            padding: 0rem;
            border: 3px solid #242323;
            p:nth-child(1){
                font-size: 0.7rem;
            }
            p:nth-child(2){
                font-size: 0.5rem;
            }
            p:nth-child(3){
                font-size: 0.5rem;
            }
        }
    }
    .container2{
        width: 23.8rem;
        p:nth-child(1){
            font-size: 1.5rem;
        }
    }
    .already{
        font-size: 0.6rem;
        width: 24.1rem;
        a{
            font-size: 0.6rem;
        }
    }
    .invite{
        margin: 0 1rem;
        font-size: 0.7rem;
    }
}
`;