import React from 'react'
import AboutBanner from '../about/components/AboutBanner'
import OurProcess from '../home/components/OurProcess';
import TeamList from './components/TeamList';
import ReviewSection from '../home/components/ReviewSection';
import PartnerSection from '../home/components/PartnerSection';
import TalkSection from '../home/components/TalkSection';

export const Team =()=> {
  return (
    <div>
      <AboutBanner />
      <TeamList />
      <OurProcess />
      <ReviewSection />
      <PartnerSection />
      <TalkSection />
    </div>
  );
}

export default Team