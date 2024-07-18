import React from 'react'
import Slider from 'react-slick'
import dann from "../../../../assets/cover-team/Dan.png"
import waseem from "../../../../assets/cover-team/waseem.png";
import Sameera from "../../../../assets/cover-team/Sameera.png";
import asad from "../../../../assets/cover-team/asad.png";
import velina from "../../../../assets/cover-team/velina.png";
import vivek from "../../../../assets/cover-team/vivek.png";
import Nandini from "../../../../assets/cover-team/Nandini.png";
import christopher from "../../../../assets/cover-team/christopher.png";
import ashik from "../../../../assets/cover-team/ashik.png";
import saba from "../../../../assets/cover-team/saba.png";
import mansi from "../../../../assets/cover-team/mansi.png";
import adilfarhan from "../../../../assets/cover-team/adilfarhan.png";
import monia from "../../../../assets/cover-team/monia.png";
import krati from "../../../../assets/cover-team/krati.png";
import sumaiya from "../../../../assets/cover-team/sumaiya.png";
import sattar from "../../../../assets/cover-team/sattar.png";
import shahid from "../../../../assets/cover-team/shahid.png";

export const AboutBanner = () => {
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
    <div className="w-full relative bg-[#040406]">
      <div className="absolute bottom-8 left-0 z-30 w-full">
        <h1 className="w-full text-center m-0">Who we are</h1>
        <p className="w-full text-center mb-2 text-[#ffffff]">
          Get to Know Our Team
        </p>
      </div>
      <Slider {...settings}>
        <div className="relative">
          <div className="bg-[#050612] opacity-60 w-full absolute top-0 left-0 h-full hover:bg-transparent ease-in-out duration-1000"></div>
          <img src={dann} alt="cover img" />
        </div>
        <div className="relative">
          <div className="bg-[#050612] opacity-60 w-full absolute top-0 left-0 h-full hover:bg-transparent ease-in-out duration-1000"></div>
          <img src={waseem} alt="cover img" />
        </div>
        <div className="relative">
          <div className="bg-[#050612] opacity-60 w-full absolute top-0 left-0 h-full hover:bg-transparent ease-in-out duration-1000"></div>
          <img src={Sameera} alt="cover img" />
        </div>
        <div className="relative">
          <div className="bg-[#050612] opacity-60 w-full absolute top-0 left-0 h-full hover:bg-transparent ease-in-out duration-1000"></div>
          <img src={asad} alt="cover img" />
        </div>
        <div className="relative">
          <div className="bg-[#050612] opacity-60 w-full absolute top-0 left-0 h-full hover:bg-transparent ease-in-out duration-1000"></div>
          <img src={velina} alt="cover img" />
        </div>
        <div className="relative">
          <div className="bg-[#050612] opacity-60 w-full absolute top-0 left-0 h-full hover:bg-transparent ease-in-out duration-1000"></div>
          <img src={vivek} alt="cover img" />
        </div>
        <div className="relative">
          <div className="bg-[#050612] opacity-60 w-full absolute top-0 left-0 h-full hover:bg-transparent ease-in-out duration-1000"></div>
          <img src={Nandini} alt="cover img" />
        </div>
        <div className="relative">
          <div className="bg-[#050612] opacity-60 w-full absolute top-0 left-0 h-full hover:bg-transparent ease-in-out duration-1000"></div>
          <img src={christopher} alt="cover img" />
        </div>
        <div className="relative">
          <div className="bg-[#050612] opacity-60 w-full absolute top-0 left-0 h-full hover:bg-transparent ease-in-out duration-1000"></div>
          <img src={ashik} alt="cover img" />
        </div>
        <div className="relative">
          <div className="bg-[#050612] opacity-60 w-full absolute top-0 left-0 h-full hover:bg-transparent ease-in-out duration-1000"></div>
          <img src={saba} alt="cover img" />
        </div>
        <div className="relative">
          <div className="bg-[#050612] opacity-60 w-full absolute top-0 left-0 h-full hover:bg-transparent ease-in-out duration-1000"></div>
          <img src={mansi} alt="cover img" />
        </div>
        <div className="relative">
          <div className="bg-[#050612] opacity-60 w-full absolute top-0 left-0 h-full hover:bg-transparent ease-in-out duration-1000"></div>
          <img src={adilfarhan} alt="cover img" />
        </div>
        <div className="relative">
          <div className="bg-[#050612] opacity-60 w-full absolute top-0 left-0 h-full hover:bg-transparent ease-in-out duration-1000"></div>
          <img src={monia} alt="cover img" />
        </div>
        <div className="relative">
          <div className="bg-[#050612] opacity-60 w-full absolute top-0 left-0 h-full hover:bg-transparent ease-in-out duration-1000"></div>
          <img src={krati} alt="cover img" />
        </div>
        <div className="relative">
          <div className="bg-[#050612] opacity-60 w-full absolute top-0 left-0 h-full hover:bg-transparent ease-in-out duration-1000"></div>
          <img src={sumaiya} alt="cover img" />
        </div>
        <div className="relative">
          <div className="bg-[#050612] opacity-60 w-full absolute top-0 left-0 h-full hover:bg-transparent ease-in-out duration-1000"></div>
          <img src={sattar} alt="cover img" />
        </div>
        <div className="relative">
          <div className="bg-[#050612] opacity-60 w-full absolute top-0 left-0 h-full hover:bg-transparent ease-in-out duration-1000"></div>
          <img src={shahid} alt="cover img" />
        </div>
      </Slider>
    </div>
  );
}

export default AboutBanner