import React from 'react'
import AboutBanner from './components/AboutBanner'
import AboutDetail from './components/AboutDetail'
import TeamSection from '../home/components/TeamSection'
import OurProcess from '../home/components/OurProcess'
import ReviewSection from '../home/components/ReviewSection'
import PartnerSection from '../home/components/PartnerSection'
import TalkSection from '../home/components/TalkSection'
import { useEffect } from 'react'

export const About = () => {
  // Scroll to the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div>
      <AboutBanner />
      <AboutDetail />
      <TeamSection />
      <OurProcess />
      <ReviewSection />
      <PartnerSection />
      <TalkSection />
    </div>
  );
}

export default About