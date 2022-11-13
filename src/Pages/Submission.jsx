import React, { useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer';

export default function Submission() {
  useEffect(() => {
    document.title = "ICRAMERD 2023 | SUBMISSION";
  }, []);
  return (
    <>
      <Container>
        <p>Submission Type</p>
        <ul>
          Authors are invited to contribute full paper. Authors are requested to follow the template
          <li>10-point Times New Roman, Single-spaced. </li>
          <li>Abstract Length 200-250 words</li>
          <li>3-5 Keywords </li>
          <li>One-column</li>
          <li>Full paper can be submitted in MS word format only.</li>
          <li>Regular full paper length limit is 8-10 pages including figures, tables and references. </li>
        </ul>
        <br />
        <ul>
          There must be clear visibility of the following points in the manuscript.
          <li>Purpose/Objectives</li>
          <li>Methodology/Approach</li>
          <li>Findings/Results</li>
        </ul>
        <br />
        <ul>
          Full Paper Reviewing Process
          <li>The submitted manuscripts will be subjected to double blind peer-review.</li>
          <li>The submitting author will be responsible for the submission approval of all co-authors included in the manuscript.</li>
        </ul>
        <p>Please Note : The paper must not be previously published, accepted and under review for publication elsewhere.</p>
        <p>Please Note : Authors are encouraged to check the similarity index of the manuscript before submitting to the conference. Papers suspect of plagiarism will be rejected.</p>
        <p>Submission Method</p>
        <a href="https://forms.gle/bWRdJFHcNFuHomPu8" target="_blank" rel="noreferrer">Click here to submit your paper via google form.</a>
        <p>If any problem, submit your paper directly to the conference official Email Address: <span>icramerd23@soa.ac.in</span></p>
      </Container>
      <Footer />
    </>
  )
}
const Container = styled.div`
margin-top: 4.5rem;
padding: 2rem 0 2rem 6rem;
p{
  text-transform: uppercase;
}
a{
  text-decoration: none;
  color: black;
  animation: ani 3s ease-in-out 0s infinite ;
  padding: 0.2rem 1rem;
  transition: all 0.3s ease-in-out;
}
a:hover{
  background-color: black;
  color: white;
  animation: none;
  border: 3px solid black;
}
p:nth-child(1){
  font-size: 1.6rem;
  text-decoration: underline;
  font-weight: 500;
  margin: 0 0 1rem 0;
}
ul{
  font-weight: 500;
  li{
    margin-left: 1.6rem;
    list-style: square;
    font-weight: 400;
  }
}
p:nth-child(7){
  text-transform: none;
  text-decoration: underline;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 1rem 0 1rem 0;
}
p:nth-child(8){
  text-transform: none;
  text-decoration: underline;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0 11rem 1rem 0;
}
p:nth-child(9){
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: underline;
  margin: 1rem 0;
}
p:nth-child(11){
  margin:  1rem 0;
  font-weight: 400;
  text-transform: none;
  span{
    font-weight: 600;
    text-transform: none;
  }
}
@keyframes ani {
  0%{
    border: 3px solid red;
  }
  50%{
    border: 3px solid green;
  }
  100%{
    border: 3px solid black;
  }
}
@media only screen and (max-width:550px){
  margin-top: 3rem;
  padding: 1rem 0 1rem 1rem;
  p:nth-child(7){
    font-size: 1rem;
  }
  p:nth-child(8){
    margin: 0;
    font-size: 1rem;
  }
  a{
    padding: 0.3rem;
    font-size: 0.9rem;
  }
  a:hover{
    background-color: white;
    color: black;
  }
  }
`;