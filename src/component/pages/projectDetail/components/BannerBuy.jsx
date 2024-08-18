import React, { useState } from 'react'
import buyProject from '../../../../assets/banner-img/sub-banner.png'
import { useLocation } from 'react-router-dom';
import { PopupModel } from "../../../model/PopupModel"; 

export const BannerBuy = () => {
  const location = useLocation();
  const [ShowPopup, setShowPopup] = useState(false);
  
  const getHeading = () =>{
    switch (location.pathname) {
      case "/buy-project":
        return "Buy Property in Dubai";
      case "/off-plan-project":
        return "Off Plan Property in Dubai";
      case "/sell-project":
        return "Let’s sell your property profitably";
    }
  }

  const getSubTitile = () => {
    switch (location.pathname) {
      case "/buy-project":
        return "Properties for sale in Dubai";
      case "/off-plan-project":
        return "New top-launched projects";
      case "/sell-project":
        return "Entire process is on us, from evaluation to a deal";
    }
  };

  const getBannerImg = () => {
    switch (location.pathname) {
      case "/buy-project":
        return buyProject;
      case "/off-plan-project":
        return buyProject;
      case "/sell-project":
        return buyProject;
    }
  }

  return (
    <div
      className="banner w-full bg-[#040406] flex items-center justify-center"
      style={{ backgroundImage: `url(${getBannerImg()})` }}
    >
      <div className="container max-w-[1240px] px-4 flex items-center justify-start">
        <div className="banner-content text-center w-[100%]">
          <h1 className=" text-center">{getHeading()}</h1>
          <p className="pb-4 text-center">{getSubTitile()}</p>
          {location.pathname == "/sell-project" && (
            <button onClick={() => setShowPopup(true)} className="site-btn ">
              Request callback
            </button>
          )}
        </div>
      </div>
      <div>
        {ShowPopup && <PopupModel onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
}

export default BannerBuy