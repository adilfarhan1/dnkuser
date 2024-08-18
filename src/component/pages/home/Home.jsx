import React from 'react'
import AboutSection from './components/AboutSection'
import BannerHome from './components/Banner';
import FeatureProject from './components/FeatureProject';
import ServiceSection from './components/ServiceSection';
import Reasons from './components/Reasons';
import TeamSection from './components/TeamSection';
import OurProcess from './components/OurProcess';
import ReviewSection from './components/ReviewSection';
import PartnerSection from './components/PartnerSection';
import TalkSection from './components/TalkSection';
import { useEffect } from 'react';

export const Home = () => {
  // Scroll to the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div>
      <BannerHome />
      <div>
        <AboutSection />
        <FeatureProject />
        <ServiceSection />
        <TeamSection />
        <Reasons />
        <OurProcess />
        <ReviewSection />
        <PartnerSection />
        <TalkSection />
      </div>
    </div>
  );
}

export default Home