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
import FooterSection from '../../footer/FooterSection';

export const Home =()=> {
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