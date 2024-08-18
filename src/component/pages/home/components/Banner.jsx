import React, { useState } from 'react'
import bannerImg from "../../../../assets/banner-img/banner-home.png"
import { PopupModel } from '../../../model/PopupModel' 


export const BannerHome = () => {
  const [ ShowPopup, setShowPopup ]= useState(false)
  
  return (
    <div
      className="banner w-full bg-[#040406] flex items-center justify-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="container max-w-[1240px] px-4 flex items-center justify-start">
        <div className="banner-content">
          <h1 className="banner-h1">
            Invest in Dubai real estate with DNK Real Estate
          </h1>
          <p className="pb-4">
            Our agents will help you find the right property
          </p>
          <button onClick={() => setShowPopup(true)} className="site-btn ">
            Request callback
          </button>
        </div>
      </div>
      <div>
        {ShowPopup && <PopupModel onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
}

export default BannerHome