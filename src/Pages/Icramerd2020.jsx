import React from 'react'
import styled from 'styled-components';
import CaraouselDes from '../Components/CaraouselDes';
import EventDescription from '../Components/EventDescription';
import AboutHome from '../Components/AboutHome';
import Footer from '../Components/Footer';

export default function Icramerd2020() {
    return (
        <Container>
            <EventDescription yr={20} />
            <CaraouselDes yr={20} />
            <AboutHome yr={20}/>
            <Footer yr={20}/>
        </Container>
    )
}
const Container = styled.div`
    
`;