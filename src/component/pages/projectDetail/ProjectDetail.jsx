import React, { useEffect } from 'react'
import ProjectBanner from './components/ProjectBanner'
import DetailProject from './components/DetailProject'
import PartnerSection from '../home/components/PartnerSection'
import TalkSection from '../home/components/TalkSection'

export const ProjectDetail = () => {
  // Scroll to the top 
   useEffect(() => {
   window.scrollTo({ top: 0, behavior: "smooth" });
   })
  
  return (
    <div>
      <ProjectBanner />
      <DetailProject />
      <PartnerSection />
      <TalkSection />
    </div>
  );
}

export default ProjectDetail