import React from 'react'
import styled from 'styled-components';
import ImportantDate from '../Components/ImportantDatesHome';
import Footer from '../Components/Footer';

export default function ImportantDates() {
  return (
    <Container>
        <ImportantDate/>
        <Footer/>
    </Container>
  )
}
const Container = styled.div`
padding-top:6rem;  
`;