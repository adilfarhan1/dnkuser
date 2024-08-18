import React, { useEffect } from 'react'
import BannerBuy from "./components/BannerBuy";
import TalkSection from "../home/components/TalkSection";
import { OffPlanProjectGridList } from './components/OffPlanProjectGridList';

export const OffPlanProject = () => {
    
  // Scroll to the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div>
      <BannerBuy />
      <OffPlanProjectGridList />
      <TalkSection />
    </div>
  );
}

export default OffPlanProject