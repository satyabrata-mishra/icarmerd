import React, { useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer';

export default function Contactus() {
    useEffect(() => {
        document.title = "ICRAMERD 2023 | CONTACT US";
    }, []);
    return (
        <>
            <Container>
                <h2>For further details contact</h2>
                <div className="sec1">
                    <p className='heading'>Convenor</p>
                    <p className='person'>Dr. Pragyan Senapati </p>
                    <p className='details'>Email: pragyansenapati@soa.ac.in</p>
                    <p className='details'>Mob: 9439583624</p>
                </div>
                <br />
                <div className="sec1">
                    <p className='heading'>Co-Convenor</p>
                    <p className='person'>Dr. Prasanta Kumar Sahoo</p>
                    <p className='details'>Email: prasantakumarsahoo@soa.ac.in</p>
                    <p className='details'>Mob: 8249032759</p>
                    <br />
                    <p className='person'>Dr. Tanmayee Khuntia</p>
                    <p className='details'>Email: tanmayeekhuntia@soa.ac.in</p>
                    <p className='details'>Mob: 9437672050</p>
                </div>
            </Container>
            <Footer />
        </>
    )
}
const Container = styled.div`
margin-top: 4.6rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 20rem;
padding: 0 0 3rem 0;
h2{
text-transform: uppercase;
margin: 1rem 0;
}
.sec1{
    text-align: center;
    .heading{
        font-size: 1.5rem;
        font-weight: 700;
        text-decoration: underline;
    }
    .person{
        font-size: 1.2rem;
        font-weight: 500;
    }
    .details{
        font-size: 0.8rem;
        font-weight: 500;
    }
}
@media only screen and (max-width:  550px){
    h2{
        font-size: 1.4rem;
    }
}
`;