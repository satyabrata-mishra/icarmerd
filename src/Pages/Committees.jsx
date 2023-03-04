import React, { useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer';

export default function Committees({handleScroll}) {

    useEffect(() => {
        document.title = "ICRAMERD 2023 | COMMITTEES";
        handleScroll();
    }, []);

    return (
        <Container>
            <div className="committees">
                <p className='heading'>Chief Patron</p>
                <p className='persons'>Prof. Manojranjan Nayak, Founder and President, Siksha ‘O’ Anusandhan (Deemed to be University)</p>
                <br />
                <p className='heading'>Patron</p>
                <p className='persons'>Prof. (Dr.) A. K. Mahapatra, Vice Chancellor, Siksha ‘O’ Anusandhan (Deemed to be University)</p>
                <p className='persons'>Prof. (Dr.) P. K. Nanda, Pro-Vice Chancellor, Siksha 'O' Anusandhan University (Deemed to be University)</p>
                <br />
                <p className='heading'>Finance Chair</p>
                <p className='persons'>Prof. (Dr.) Manas Kumar Mallik, Director, ITER, S‘O’A (Deemed to be University)</p>
                <br />
                <p className='heading'>General chairs</p>
                <p className='persons'>Prof. (Dr.) D.N, Thatoi, Dept. of Mechanical Engineering, ITER, S‘O’A (Deemed to be University)</p>
                <p className='persons'>Prof. (Dr.) S. K. Acharya, Dept. of Mechanical Engineering, ITER, S‘O’A (Deemed to be University)</p>
                <br />
                <p className='heading'>Program coordinator </p>
                <p className='persons'>Dr. Sasanka Choudhury, Dept. of Mechanical Engineering, ITER, S‘O’A (Deemed to be University)</p>
                <br />
                <p className='heading'>Convenor</p>
                <p className='persons'>Dr. Pragyan Senapati, Dept. of Mechanical Engineering, ITER, S‘O’A (Deemed to be University)</p>
                <br />
                <p className='heading'>Co. Convenor</p>
                <p className='persons'>Dr. Prasant Sahoo, Dept. of Mechanical Engineering, ITER, S‘O’A (Deemed to be University)</p>
                <p className='persons'>Dr. Tanmayee Khuntia, Dept. of Mechanical Engineering, ITER, S‘O’A (Deemed to be University)</p>
                <br />
                <p className='heading'>Local Advisory Board</p>
                <p className='persons'>Prof.  P. K. Sahoo, Dean, ITER, S‘O’A (Deemed to be University)</p>
                <p className='persons'>Prof.  R. P. Mohanty, Research Advisor, S‘O’A (Deemed to be University)</p>
                <p className='persons'>Prof.  B. B Pradhan, Pro-Vice Chancellor, SOA, (Deemed to be University)</p>
                <p className='persons'>Prof.  J. K. Nath, Dean, Research and Development, ITER, S‘O’A (Deemed to be University)</p>
                <p className='persons'>Prof.  D. Acharya, Chairman of Advisory Board, SOA (Deemed to be University)</p>
                <p className='persons'>Prof.  S. Patnaik, Director, IRP, SOA ((Deemed to be University))</p>
                <p className='persons'>Prof.  S. K. Kamila (Head, IPR Cell), ITER, SOA (Deemed to be University)</p>
                <p className='persons'>Prof.  U. K. Mohanty, Professor, ITER, S‘O’A (Deemed to be University)</p>
                <p className='persons'>Prof.  R. K. Bhoi, Professor, ITER, S‘O’A (Deemed to be University)</p>
                <p className='persons'>Prof.  N. Kavi, Professor, ITER, S‘O’A (Deemed to be University)</p>
                <p className='persons'>Prof.  A. Mishra, Professor, ITER, S‘O’A (Deemed to be University)</p>
                <p className='persons'>Prof.  J. Bala, Professor, ITER, S‘O’A (Deemed to be University)</p>
                <p className='persons'>Prof.  H. K. Sarangi, Professor, ITER, S‘O’A (Deemed to be University)</p>
                <p className='persons'>Prof.  P. Pradhan, Professor, ITER, S‘O’A (Deemed to be University)</p>
                <p className='persons'>Prof.  S. Bhuyan, Professor, ITER, S‘O’A (Deemed to be University)</p>
                <p className='persons'>Prof.  D. K. Mishra, Professor, ITER, S‘O’A (Deemed to be University)</p>
                <br />
                <p className='heading'>National and International Advisory Board</p>
                <p className='persons'>Prof. S.A. Sherif, University of Florida</p>
                <p className='persons'>Prof. R. Pati, Michigan Technological University</p>
                <p className='persons'>Prof.  R. O. Dusane, IIT Bombay</p>
                <p className='persons'>Prof.  H. Hirani, IIT Delhi</p>
                <p className='persons'>Prof. A. A. Fakhrabadi, Universidad de Chile, Santiago</p>
                <p className='persons'>Prof.  A. K. Nath, IIT Kharagpur</p>
                <p className='persons'>Prof. D. Mohapatra, School of Materials Science and Engineering, Yeungnam University, South Korea.</p>
                <p className='persons'>Prof.  R. Aepuru, Universidad de Chile, Beauchef 851, Santiago 8370456, Chile</p>
                <p className='persons'>Prof. R.V. Mangalaraja, Universidad Adolfo Ibáñez, Santiago</p>
                <p className='persons'>Prof.  H. Fulara, Indian Institute of Technology Roorkee</p>
                <p className='persons'>Prof.  J. Singh, Indian Institute of Technology Jodhpur</p>
                <p className='persons'>Dr. S. K. Mangla, Plymouth Business School, University of Plymouth, United Kingdom</p>
                <p className='persons'>Dr.    N. Wadibhasme, First Solar</p>
                <p className='persons'>Prof.  Nagsen Meshram, Institute of Chemical Technology, Maharashtra</p>
                <p className='persons'>Dr.  S. Mantry, Principal Scientist, IMMT Bhubanesear</p>
                <p className='persons'>Prof.  H. Sutar, Assistant Professor, IGIT Sarang</p>
                <br />
                <p className='heading'>Organizing Committee</p>
                <p className='persons'>Dr. Abinash Mahapatro</p>
                <p className='persons'>Dr. Ajay Kumar Behera</p>
                <p className='persons'>Dr. Anupama Routray</p>
                <p className='persons'>Mr. Ashok Sahoo</p>
                <p className='persons'>Dr. B. S. Mahanto</p>
                <p className='persons'>Dr. Binayak Pattanayak</p>
                <p className='persons'>Mr. Debasis Dey</p>
                <p className='persons'>Dr. Jajneswar Nanda</p>
                <p className='persons'>Dr. Manoj Kumar Nayak</p>
                <p className='persons'>Dr. Pragyan Patnaik</p>
                <p className='persons'>Dr. Priyaranjan Biswal</p>
                <p className='persons'>Mr. Rajat Kumar Das</p>
                <p className='persons'>Mrs. Rashmi Ray</p>
                <p className='persons'>Dr. Seshadev Sahoo</p>
                <p className='persons'>Dr. Sikata Samantaray</p>
                <p className='persons'>Dr. Sasmeeta Tripathy</p>
                <p className='persons'>Mrs. Sangita Sarangi</p>
                <p className='persons'>Dr. Sankar Narayan Das</p>
                <p className='persons'>Mr. Soumya Aditya Ohid</p>
                <p className='persons'>Mr. Shashendra Kumar Sahoo</p>
                <p className='persons'>Dr. Shakti Prakash Jena</p>
                <p className='persons'>Dr. Siba Sankar Mohapatra</p>
                <p className='persons'>Mr. S. R. Rout</p>
                <p className='persons'>Dr. Subhrajit Beura</p>
                <p className='persons'>Ms. Swetarani Biswal</p>
                <p className='persons'>Dr. Tanmayee Khuntia</p>
                <p className='persons'>Dr. Tapaswinee Das</p>
            </div>
            <Footer />
        </Container>
    )
}
const Container = styled.div`
margin-top: 4.6rem;
.committees{
    padding: 3rem 18rem 2rem 10rem;
    .heading{
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 0.05rem;
        padding: 0 0 0.2rem 0;
        margin: 0 0 0.2rem 0;
        text-decoration: underline;
    }
    .persons{
        font-size: 1rem;
        font-weight: 500;
        margin: 0.3rem 0;
    }
    @media only screen and (max-width: 550px){
        padding: 0 0 0 0.5rem;
        .heading{
            font-size: 1rem;
        }
        .persons{
            font-size: 0.7rem;
            font-weight: 500;
            /* white-space: nowrap; */
        }
    }
}
`;