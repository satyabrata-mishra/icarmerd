import React, { useEffect } from 'react'
import styled from 'styled-components';
import CaraouselDes from '../Components/CaraouselDes';
import EventDescription from '../Components/EventDescription';
import AboutHome from '../Components/AboutHome';
import Footer from '../Components/Footer';

export default function Icramerd2021({handleScroll}) {
    
    useEffect(() => {
        document.title="ICRAMERD 2023 | 2021";
        handleScroll();
      }, []);

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