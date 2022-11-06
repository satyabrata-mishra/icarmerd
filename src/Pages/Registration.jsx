import React from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer';

export default function Registration() {
    return (
        <>
            <Container>
                <h2>REGISTRATION FEE</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Participant Category</th>
                            <th>India and SAARC Country (INR)</th>
                            <th>Early Bird* (INR)</th>
                            <th>Overseas(USD)</th>
                            <th>Early Bird*(USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Industry Delegates</td>
                            <td>4500/-</td>
                            <td>4000/-</td>
                            <td>$90</td>
                            <td>$85</td>
                        </tr>
                        <tr>
                            <td>Academic Delegates</td>
                            <td>4000/-</td>
                            <td>3500/-</td>
                            <td>$80</td>
                            <td>$75</td>
                        </tr>
                        <tr>
                            <td>Students</td>
                            <td>3500/-</td>
                            <td>3000/-</td>
                            <td>$70</td>
                            <td>$60</td>
                        </tr>
                    </tbody>
                </table>
                <p className='star'>*Early bird offer is valid upto 15 June, 2023.</p>
                <h2>PAYMENT DETAILS</h2>
                <div className="bankdetails">
                    <p>Account No:<span> 6762002100000239</span></p>
                    <p>Beneficiary Name:<span> SIKSHA O ANUSANDHAN</span></p>
                    <p>Bank:<span> PUNJAB NATIONAL BANK</span></p>
                    <p>IFSC Code:<span> PUNB0676200</span></p>
                    <p>MICR Code:<span> 751024011</span></p>
                    <p>BRANCH:<span> POKHARIPUT, KHANDAGIRI, ODISHA.</span></p>
                </div>
                <p className='end'>*After registration please send the payment details to <span>icramerd23@soa.ac.in</span> </p>
            </Container>
            <Footer />
        </>
    )
}
const Container = styled.div`
padding: 6rem 0 2rem 0;
h2{
    text-align: center;
    margin-bottom: 2rem;
}
table{
    border: 5px solid black;
    border-collapse:collapse ;
    margin-left: 4rem;
    th , td{
        border: 3px solid black;
        text-align: center;
        padding: 1rem 2rem;
    }
    th{
        background-color: red;
    }
    td{
        font-weight: 500;
    }
}
.star{
    font-size: 0.8rem;
    font-weight: 500;
    margin-left: 4rem;
}
.bankdetails{
    text-align: center;
    margin-top: -1rem;
    p{
        margin: 0.2rem 0;
        font-weight: 500;
        font-size: 1rem;
        span{
            color: red;
            font-weight: 600;
        }
    }
}
.end{
    font-weight: 500;
    margin: 1rem 0 0 4rem;
    span{
        background-color: blue;
        color: white;
        padding: 0 0.5rem;
    }
}
@media only screen and (max-width: 550px){
padding: 4rem 0 1rem 0.2rem;
h2{
    font-size: 1.5rem;
}
table{
    th,td{
        padding: 0.2rem;
        font-size: 0.8rem;
    }
}
.star{
    margin: 0.5rem 0;
}
.bankdetails{
    p{
        font-size: 0.9rem;
    }
}
.end{
    font-size: 0.67rem;
    span{
        padding: 0;
    }
}
}
`;