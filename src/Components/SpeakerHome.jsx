import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

import bg from "../Utils/bg.webp";

import Omkar_Mohanty from "../Utils/Speakers/Omkar_Mohanty.jpg";
import Satya_Swaroop_Panda from "../Utils/Speakers/Satya_Swaroop_Panda.png";
import Pradyumna from "../Utils/Speakers/Pradyumna.jpeg";
import SASherif from "../Utils/Speakers/SA-Sherif-Picture-1.jpg";
import Sisir from "../Utils/Speakers/Sisir.jpeg";
import SK from "../Utils/Speakers/S.K.Patnaik.jpg";
import Poonam from "../Utils/Speakers/Poonam Kumari.jpg";
import Jaiveer from "../Utils/Speakers/Jaiveer Singh.jpg";


export default function SpeakerHome() {
  return (
    <Container style={{ backgroundImage: `url(${bg})` }}>
      <p>OUR ESTEEMED SPEAKERS</p>
      <div className="cardsection">
        <Carousel interval={null}>
          <Carousel.Item>
            <div className="speakerDetails">
              <img src={Omkar_Mohanty} alt="Omkar Mohanty" style={{ height: "40vh", width: "14vw" }} />
              <p className='Name'>Prof. Dr.-Ing. Omkar Nath Mohanty</p>
              <p className='Designation'>Director, Technology & Academic Initiative, RSB Metaltech, RSB Group, Pune</p>
              <p className='About'>Dr Omkar Nath Mohanty a B.Tech. and M.Tech. in Metallurgical Engg. from IIT Kharagpur; a Ph.D (Dr.-Ing.) in Materials Engg. from the University of Karlsruhe, Germany and did a course in Business Administration from CEDEP ( a part of INSEAD ), France. Served as a Professor at IIT Kharagpur; Director-level Scientist at CSIR- National Metallurgical Lab. (NML) Jamshedpur; Director (Research & Development) at Tata Steel; Tata Research Professor at IIT Kharagpur, and Vice-Chancellor, Biju Patnaik University of Technology, Odisha, before taking up the current position in 2010. Inducted as Adjunct Professor, IIT Bhubaneswar and a Honorary Scientist at CSIR-Inst. of Minerals & Materials Technology ( IMMT ), Bhubaneswar, Govt. of India. Supervised 13 Ph.D ( doctoral ) dissertations and 15 M.Tech. dissertations in the area of Metallurgical & Materials Engineering. Holds 17 Patents.</p>
              <p className='date'>11:15AM - 12:00PM, 22nd July 2023(Saturday)</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="speakerDetails">
              <img src={Satya_Swaroop_Panda} alt="Satya Swaroop Panda" style={{ height: "40vh", width: "18vw" }} />
              <p className='Name'>Mr. Satya Swaroop Panda</p>
              <p className='Designation'>Director at Collins Aerospace, Bengaluru, Karnataka, India</p>
              <p className='About'>Engineering leader with 24+ years of experience in leading global engineering and technology teams with complete end to end ownership. Demonstrated leadership in working with cross functional teams in highly matrixed organizational structure. Held roles of increasing responsibilities in industries spanning automobiles, aviation and energy. Experienced in diversified domains such as product development, aftermarkets, R&D, cost out & productivity, product localization, setting up lab etc. Established technology team at Collins India Interiors Division and Matured the team to handle projects across multiple portfolio and program applications. Championed innovation strategies and delivered 100+ patents. Coordinate technology programs across Collins Global Engineering Centers and represent at Collins SBU strategic BU roadmap development sessions.</p>
              <p className='date'>4:00PM - 4:45PM, 22nd July 2023(Saturday)</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="speakerDetails">
              <img src={Pradyumna} alt="Dr. S. Pradyumna" style={{ height: "40vh", width: "15vw" }} />
              <p className='Name'>Dr. S. Pradyumna</p>
              <p className='Designation'>Professor, Department of Applied Mechanics Indian Institute of Technology, New Delhi</p>
              <p className='About'>Dr. S. Pradyumna did his B.E. in Civil Engineering from Mysore University in 2000. He completed his M.Tech. in Computer Aided Design of Structures from Visvesvaraya Technological University in 2003. He received his Ph.D. in Civil Engineering from IIT Kharagpur in 2009. Dr. Pradyumna is working as a Professor in the Department of Applied Mechanics since June 2022. He joined the Indian Institute of Technology Delhi as an Assistant Professor in May 2010. Before joining IIT Delhi, he worked as an Assistant Professor at the Department of Civil Engineering in NIT Rourkela. His areas of interest include dynamics and stability of plates and shells, finite element method, meshless methods, composite structures and functionally graded materials. He has more than 15 years of teaching experience and has published/presented more than 80 papers in peer reviewed international journals and conferences. He has been teaching subjects like Engineering Mechanics, Solid Mechanics, Finite Element Method, Dynamics, Composite Structures etc. to Undergraduate and Postgraduate students.</p>
              <p className='date'>11:15AM - 12:00PM, 21st July 2023(Friday)</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="speakerDetails">
              <img src={SASherif} alt="Dr.S.A. Sherif" style={{ height: "40vh", width: "26vw" }} />
              <p className='Name'>Dr S.A. Sherif</p>
              <p className='Designation'>Professor of Mechanical and Aerospace Engineering, University of Florida</p>
              <p className='About'>Professor SA Sherif is a Life Fellow of ASME, a Life Fellow of ASHRAE, a Fellow of the Royal Aeronautical Society, a Fellow of American Society of Thermal and Fluids Engineers (ASTFE), an Associate Fellow of AIAA, Vice President of Commission B-2 of the International Institute of Refrigeration, a Member of the Advisory Board of Directors of the International Association for Hydrogen Energy, and Founding Member of the Board of Directors and Vice President of Programs for ASTFE. He served as Editor-in-Chief of the Journal of Thermal Science and Engineering Applications and the Editor-in-Chief of the Journal of Solar Energy Engineering. He has 600 publications and two US patents.</p>
              <p className='date'>9:30AM - 10:15AM, 21st July 2023(Friday)</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="speakerDetails">
              <img src="" alt="Dr Praveen Kumar" style={{ height: "40vh", width: "15vw" }} />
              <p className='Name'>Dr Praveen Kumar</p>
              <p className='Designation'></p>
              <p className='About'></p>
              <p className='date'>9:30AM - 10:15AM, 22nd July 2023(Saturday)</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="speakerDetails">
              <img src={Sisir} alt="Dr. Sisir Mantry" style={{ height: "40vh", width: "18vw" }} />
              <p className='Name'>Dr. Sisir Mantry</p>
              <p className='Designation'>CSIR-Institute of Minerals & Materials Technology (Under DSIR) Bhubaneswar, Odisha, INDIA</p>
              <p className='About'>Dr. Sisir Mantry, presently working as Principal Scientist in CSIR-IMMT. Prior to joining IMMT, Dr.Mantry served as Scientist in ISRO, Trivandrum for 2 yrs. and also had a short tenure in HAL (R&D), Bangalore as design Engineer. He completed PhD. (Engineering) From IIT, Bhubaneswar in 2014 and M. Tech from NIT, Rourkela in 2006. He has more than 17 yrs. of research experience in the area of thermal spray coating of materials, tribology with special mention to erosion wear. He has developed a host of novel coatings that ranges from high end materials like nanostructured yttria stabilized zirconia (YSZ) to sheer industrial waste like copper slag and marble dust. He has published about 50 papers in international SCI journals, one patent and more than 50 in conference proceedings invited talks. He is also a peer reviewer of many reputed international journals. Based on his credentials, he received 4th Berger Young Researcher Award in Coating Research Excellence by SSPC-India (2019). He is also recipient of IIM Bhubaneswar Chapter Award 2019. He is a Fellow of “The Institution of Engineers (India)”. He received prestigious Raman Research Fellowship for the current FY 2022-23 and continuing as Raman Research Fellow at University of Nottingham, UK</p>
              <p className='date'>4:00PM - 4:45PM, 20th July 2023(Thursday)</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="speakerDetails">
              <img src={SK} alt="Sanjaya Kumar Patnaik" style={{ height: "40vh", width: "17vw" }} />
              <p className='Name'>Mr. Sanjaya Kumar Patnaik</p>
              <p className='Designation'>General Manager(Env) Panchpatmali Bauxite Mine NALCO</p>
              <p className='About'>Born on 18th February 1969, Sri Sanjaya Kumar Patnaik has passed B.E. in Civil Engineering from I.G.I.T.Sarang and has completed M.Tech in Environmental Science and Engineering from I.I.T., Mumbai. He is also  a Lead Assessor in ISO 14001 and ISO 45001. He is also a Black Belt in Lean Six Sigma. He is also an assessor for EFQM model  of business excellence. He joined NALCO in the year 1994 as a G.E.T (Env Engg). He has since then worked in various capacities and is presently working as General Manager(Env & TQM) at Panchpatmali Bauxite Mines. His major achievements include of implementation of ISO 14001 in different units of NALCO , renovation of defluoridation plant, installation of hazardous waste landfill, installation of hazardous waste incinerators, improving afforestation, reclamation and rehabilitation of mined out areas, improving biodiversity,  promoting renewable energy, improving interaction with locals for protection of environment, promotion of quality circles, lean six sigma, 5S, business excellence, etc. </p>
              <p className='date'>10:15AM - 11:00AM, 22nd July 2023(Saturday)</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="speakerDetails">
              <img src={Poonam} alt="Dr. S. Pradyumna" style={{ height: "40vh", width: "17vw" }} />
              <p className='Name'>Dr. Poonam Kumari</p>
              <p className='Designation'>Associate Professor, Department of Mechanical Engineering, IIT Guwahati</p>
              <p className='About'></p>
              <p className='date'>12:00PM - 12:45PM, 21st July 2023(Friday)</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="speakerDetails">
              <img src={Jaiveer} alt="Dr. Jaiveer Singh" style={{ height: "40vh", width: "15vw" }} />
              <p className='Name'>Dr. Jaiveer Singh</p>
              <p className='Designation'>Department of Metallurgical and Materials Engineering, IIT Jodhpur, Rajastan</p>
              <p className='About'>Currently, Dr. Jaiveer Singh is working as an Associate Professor in the Department of Metallurgical and Materials Engineering at the Indian Institute of Technology Jodhpur (IIT Jodhpur). He worked as a postdoctoral researcher at Sunchon National University, Suncheon, Republic of Korea for about 3.5 years before joining IIT Jodhpur. The primary objective of his post-doctoral research work was to study the deformation and fracture mechanisms in magnesium (Mg) alloys during mini-V-bending and Erichsen tests at room temperature. He obtained his Ph.D. from the Department of Metallurgical Engineering and Materials Science at IIT Bombay in 2015. His Ph.D. thesis was mainly focused on the microstructure and texture evolution during deformation in zirconium. At present, he has published more than 30 papers in peer-reviewed journals (SCI/SCIE) and serving as Guest Editor for Frontiers in Metals and Alloys for the special issue on “Advances in Lightweight Materials for Automotive and Aerospace Applications”.</p>
              <p className='date'>10:15AM - 11:00AM, 21st July 2023(Friday)</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="speakerDetails">
              <img src="" alt="Mr Sushanta Kumar Das" style={{ height: "40vh", width: "15vw" }} />
              <p className='Name'>Mr Sushanta Kumar Das</p>
              <p className='Designation'></p>
              <p className='About'></p>
              <p className='date'>12:00PM - 12:45PM, 22nd July 2023(Saturday)</p>
            </div>
          </Carousel.Item>
        </Carousel>
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
      .speakerDetails{
        height: 90vh;
        width: 80vw;
        background-color: rgb(255, 255, 255,0.4);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .Name{
          font-size: 40px;
          border: none;
          margin: 0 5vw;
        }
        .Designation{
          font-size: 25px;
          border: none;
          margin:0 5vw 3vh 5vw;
        }
        .About{
          font-size: 14px;
          margin: 0 5vw;
          border: none;
        }
        .date{
          margin: 5vh 0;
          font-size: 20px;
          font-weight: 800;
          font-family: 'VT323', monospace;
          border: none;
          text-align: center;
          color: red;
        }
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