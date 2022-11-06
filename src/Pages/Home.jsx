import React from 'react'
import styled from 'styled-components';
import AboutHome from '../Components/AboutHome';
import CallForPaperHome from '../Components/CallForPaperHome';
import CaraouselDes from '../Components/CaraouselDes';
import ConferenceThemeHome from '../Components/ConferenceThemeHome';
import EventDescription from '../Components/EventDescription';
import IcramerdHome from '../Components/IcramerdHome';
import ImportantDatesHome from '../Components/ImportantDatesHome';
import SpeakerHome from '../Components/SpeakerHome';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <Container>
      <EventDescription yr={23} />
      <CaraouselDes yr={23} />
      <AboutHome yr={23} />
      <ConferenceThemeHome />
      <CallForPaperHome />
      <ImportantDatesHome yr={23} />
      <SpeakerHome />
      <IcramerdHome />
      <Footer />
    </Container>
  )
}
const Container = styled.div`
    
`;