import React from 'react'
import styled from 'styled-components';
import AboutHome from '../Components/AboutHome';
import CallForPaperHome from '../Components/CallForPaperHome';
import CaraouselDes from '../Components/CaraouselDes';
import ConferenceThemeHome from '../Components/ConferenceThemeHome';
import IcramerdHome from '../Components/IcramerdHome';
import ImportantDatesHome from '../Components/ImportantDatesHome';
import SpeakerHome from '../Components/SpeakerHome';

export default function Home() {
  return (
    <Container>
      <CaraouselDes/>
      <AboutHome/>
      <ConferenceThemeHome/>
      <CallForPaperHome/>
      <ImportantDatesHome/>
      <SpeakerHome/>
      <IcramerdHome/>
    </Container>
  )
}
const Container = styled.div`
    
`;