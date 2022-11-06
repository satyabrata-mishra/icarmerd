import React from 'react'
import styled from 'styled-components';
import CaraouselDes from '../Components/CaraouselDes';
import EventDescription from '../Components/EventDescription';
import AboutHome from '../Components/AboutHome';
import Footer from '../Components/Footer';

export default function Icramerd2022() {
    return (
        <Container>
            <EventDescription yr={22} />
            <CaraouselDes yr={22} />
            <AboutHome yr={22}/>
            <Footer yr={22}/>
        </Container>
    )
}
const Container = styled.div`
    
`;