import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import luxuryVilla01 from '../../../../assets/project-img/luxury-villas.png'
import riverSide01 from '../../../../assets/project-img/river-side.png'
import binghattiHills01 from "../../../../assets/project-img/binghatti-hills.png";
import Slider from "react-slick";

export const FeatureProject = () => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 992,

          settings: {
            slidesToShow: 2,

            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 640,

          settings: {
            slidesToShow: 1,

            slidesToScroll: 1,
          },
        },
      ],
    };
  return (
    <div className="w-full bg-[#040406] flex items-center justify-center px-4 xl:px-0">
      <div className="featureProject container max-w-[1240px] py-5  px-4  md:py-9">
        <div className="flex flex-col  md:flex-row ">
          <div className="basis-4/5">
            <h1>Discover Featured Off-Plan Projects</h1>
            <div className="flex items-end justify-start mb-2">
              <h3 className="load-text">In Dubai</h3>
              <span className="loadDot dot1"></span>
              <span className="loadDot dot2"></span>
              <span className="loadDot dot2"></span>
            </div>
          </div>
          <div className="basis-1/5">
            <button className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] mt-4 md:text-[1rem]">
              View More
              <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
            </button>
          </div>
        </div>
        <Slider {...settings}>
          <div className="p-4">
            <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#040406] cursor-pointer">
              <img
                class="rounded-t-lg"
                src={luxuryVilla01}
                alt="property image"
              />
              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Luxury Villas
                </h5>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  Handover in 2027
                </p>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  Damac
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#040406] cursor-pointer">
              <img
                class="rounded-t-lg"
                src={riverSide01}
                alt="property image"
              />
              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  River Side
                </h5>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  Handover in 2027
                </p>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  Damac
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#040406] cursor-pointer">
              <img
                class="rounded-t-lg"
                src={binghattiHills01}
                alt="property image"
              />
              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Binghatti Hills
                </h5>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  Handover in 2026
                </p>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  Binghatti
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#040406] cursor-pointer">
              <img
                class="rounded-t-lg"
                src={luxuryVilla01}
                alt="property image"
              />
              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Luxury Villas
                </h5>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  Handover in 2027
                </p>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  Damac
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#040406] cursor-pointer">
              <img
                class="rounded-t-lg"
                src={riverSide01}
                alt="property image"
              />
              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  River Side
                </h5>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  Handover in 2027
                </p>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  Damac
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#040406] cursor-pointer">
              <img
                class="rounded-t-lg"
                src={binghattiHills01}
                alt="property image"
              />
              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Binghatti Hills
                </h5>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  Handover in 2026
                </p>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  Binghatti
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default FeatureProject