import React from 'react'
import Slider from "react-slick";
import Emaar from "../../../../assets/partners/emaar.svg"
import Damac from "../../../../assets/partners/damac.svg"
import Sobha from "../../../../assets/partners/sobha.svg"
import Aldar from "../../../../assets/partners/aldar.svg";
import DubaiPro from "../../../../assets/partners/dubaiPro.svg";
import Danube from "../../../../assets/partners/danube.svg";

export const PartnerSection =()=> {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 8000,
      autoplaySpeed: 0,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 992,

          settings: {
            slidesToShow: 4,
          },
        },

        {
          breakpoint: 640,

          settings: {
            slidesToShow: 3,
          },
        },
      ],
    };
  return (
    <div className="w-full bg-[#040406] flex items-center justify-center">
      <div className=" container max-w-[1240px] py-5  px-4  md:py-9">
        <h1 className="m-auto w-fit">Our Partners</h1>
        <p className="text-center m-auto w-[100%] md:w-[80%]">
          We are honoured to have these amazing partners.
        </p>
        <div className="relative">
          <span className="bg-gradient-to-r from-[#040406] from-10% to-transparent absolute left-0 top-0  h-[130px] w-[150px] z-20"></span>
          <Slider {...settings} className="p-4 pt-6 relative">
            <div className="!flex !items-center !justify-center w-[160px]  h-[70px] px-2 xl:px-0">
              <img
                src={Emaar}
                alt="partner logo"
                className="w-fit opacity-80 hover:opacity-100"
              />
            </div>
            <div className="!flex !items-center !justify-center w-[160px]  h-[70px] px-2 xl:px-0">
              <img
                src={Damac}
                alt="partner logo"
                className="w-fit opacity-80 hover:opacity-100"
              />
            </div>
            <div className="!flex !items-center !justify-center w-[160px]  h-[70px] px-2 xl:px-0">
              <img
                src={Sobha}
                alt="partner logo"
                className="w-fit opacity-80 hover:opacity-100"
              />
            </div>
            <div className="!flex !items-center !justify-center w-[160px]  h-[70px] px-2 xl:px-0">
              <img
                src={Aldar}
                alt="partner logo"
                className="w-fit opacity-80 hover:opacity-100"
              />
            </div>
            <div className="!flex !items-center !justify-center w-[160px]  h-[70px] px-2 xl:px-0">
              <img
                src={DubaiPro}
                alt="partner logo"
                className="w-fit opacity-80 hover:opacity-100"
              />
            </div>
            <div className="!flex !items-center !justify-center w-[160px] h-[70px] px-2 xl:px-0">
              <img
                src={Danube}
                alt="partner logo"
                className="w-fit opacity-80 hover:opacity-100"
              />
            </div>
          </Slider>
          <span className="bg-gradient-to-l from-[#040406] from-10% to-transparent absolute right-0 top-0  h-[130px] w-[150px] z-20"></span>
        </div>
      </div>
    </div>
  );
}

export default PartnerSection