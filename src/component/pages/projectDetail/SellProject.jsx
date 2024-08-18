import React, { useEffect } from "react";
import BannerBuy from "./components/BannerBuy";
import TalkSection from "../home/components/TalkSection";
import SellProjectGrid from "../projectDetail/components/SellProjectGrid";


export const SellProject = () => {
  return (
    <div>
      <BannerBuy />
      <SellProjectGrid />
      <TalkSection />
    </div>
  );
};

export default SellProject;
