import React from 'react';
import styled from 'styled-components';
import brochure from '../Utils/brochure.pdf';

export default function AboutHome() {
  return (
    <Container>
      <span className='heading'>ABOUT SIKSHA ‘O’ ANUSANDHAN UNIVERSITY</span>
      <p className='desc'>Siksha 'O' Anusandhan (Deemed to be University u/s 3 of UGC Act, 1956); is located in an area of 451.996 acres in the centre of Bhubaneswar, its Campus comprising 67 buildings occupy 127 acres. It is a leading institution of higher learning in its chosen areas of concentration, preparing future generations through quality teaching and innovative research and will emerge as a comprehensive and socially inclusive University in the country for professional advancements in related disciplines. It is offering professional programmes in the disciplines of Engineering, Medicine, Dental Sciences, Nursing, Pharmaceutical Sciences, Biotechnology, Management, Law, Hotel Management and Agricultural Sciences. It is being recognized as a world-class learning and research institution with 12 research centres and 37 research laboratories. Based on its all-round performance on quality teaching and innovative research, the University has been awarded ranks among top 16 in the country in University category, 27th in the Engineering Category, 18th in the Medical Category, 10th in the Dental Category, 9th in the Law Category and 45th in the Research Category by National Institutional Ranking Framework (NIRF) of Ministry of Human Resources & development (MHRD), Govt. of INDIA. The university has been accredited by the NAAC with A++ Grade (3rd cycle) and has obtained the International Accreditation by ABET, USA and certification by IAO, URS, UK.</p>
      <p className='heading'>ABOUT INSTITUTE OF TECHNICAL EDUCATION AND RESEARCH (ITER)</p>
      <p className='desc'>Institute of Technical Education and Research (ITER) is the Faculty of Engineering and Technology of Siksha 'O' Anusandhan and is the oldest constituent institute. Since its inception in 1997, it is continuing to excel in the field of imparting education to students. It has worked with a mission to educate students and make them responsible, enlightened, and productive citizen to achieve global excellence. It has fourteen departments with more than five hundred faculty members.</p>
      <p className='heading'>ABOUT THE CONFERENCE</p>
      <p className='desc'>The International Conference on Recent advances in Mechanical Engineering Research and Development (ICRAMERD-2022) is a two year young conference which accepts quality research papers, follows a peer review process and gets the proceedings published through reputed publishers indexed by SCOPUS. The scope of the conference is to provide a forum for researchers, scientists, academicians, scholars and industrial practitioners from across the world to present papers and exchange their ideas on topics of great importance and recent developments in broad fields of sustainable science, material science and engineering. With the increasing importance of automation, smart manufacturing, their applications in industrial robotics, energy storage and conversion, power system engineering, the conference targets to present latest research on novel materials, new strategies and innovations for overcoming the technical challenges of machine learning, IoT, mechatronics & robotics, Artificial Intelligence in manufacturing process, environmental science, renewable energy and automation in healthcare systems. The International Conference deliberations are being structured to cover the following themes (but not limited to):</p>
      <a target="_blank" href={brochure} rel="noreferrer">Show Brochure</a> 
    </Container>
  )
}
const Container = styled.div`
padding:1.5rem 0;
display: flex;
flex-direction: column;
p{
    margin: 1rem 16rem;
}
.heading{
    font-size: 1.5rem;
    font-weight: 600;
    border-bottom: 3px solid gray;
    margin: 1rem 16rem;
}
.desc{
    font-size: 0.9rem;
    font-weight: 350;
    font-size: 15px;
    text-align: justify;
}
a{
    margin: 1rem 16rem;
    width: 8rem;
    height: 2rem;
    border: 2px solid black;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    &:hover{
      background-color: black;
      color: white;
      cursor: pointer;
    }
}
@media only screen and (max-width: 550px){
  .heading{
    margin: 0 1rem;
    font-size: 1rem;
  }
  p{
    margin: 1rem;
    font-weight: 900;
  }
  a{
    margin: 0.5rem 1rem;
  }
}
`;