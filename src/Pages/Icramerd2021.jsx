import React from 'react'
import styled from 'styled-components';
import CaraouselDes from '../Components/CaraouselDes';
import EventDescription from '../Components/EventDescription';
import AboutHome from '../Components/AboutHome';
import Footer from '../Components/Footer';

export default function Icramerd2021() {
    return (
        <Container>
            <EventDescription yr={21} />
            <CaraouselDes yr={21} />
            <AboutHome yr={21}/>
            <Footer yr={21}/>
        </Container>
    )
}
const Container = styled.div`
    
`;