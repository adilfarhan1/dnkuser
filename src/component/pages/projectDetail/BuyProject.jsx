import React, { useEffect } from 'react'
import BannerBuy from './components/BannerBuy'
import ProjectGridList from './components/ProjectGridList'
import TalkSection from '../home/components/TalkSection'

export const BuyProject = () => {
  
  // Scroll to the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div>
      <BannerBuy />
      <ProjectGridList />
      <TalkSection />
    </div>
  );
}

export default BuyProject