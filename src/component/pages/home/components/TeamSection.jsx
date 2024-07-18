import React from 'react'
import asad from '../../../../assets/team-img/asad.png'
import vivek from "../../../../assets/team-img/vivek.png";
import emran from "../../../../assets/team-img/emran.png";
import ashik from "../../../../assets/team-img/ashik.png";
import Slider from 'react-slick';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export const TeamSection = () => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
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
      <div className="serviceSection container max-w-[1240px] py-5  px-4  md:py-9">
        <h1 className="m-auto w-fit">Our Exclusive Team</h1>
        <p className="text-center m-auto w-[100%] md:w-[80%]">
          We at DNK Real Estate, as dedicated professionals, provide
          unparalleled real estate service, and pride ourselves on our
          knowledge, experience and skills, which enable us to help a wide
          variety of clients.
        </p>
        <Slider {...settings}>
          {/* Asad Khan */}
          <div className="p-4">
            <div class="max-w-max bg-[#040406] cursor-pointer team-card">
              <img
                class="rounded-t-lg w-[70%] xl:w-[100%] md:w-[90%] m-auto"
                src={asad}
                alt="team image"
              />
              <div class="text-center pt-1">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Asad Khan
                </h5>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  vice president sales
                </p>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  English, Arabic, Hindi, German
                </p>
              </div>
            </div>
          </div>
          {/* Vivek */}
          <div className="p-4">
            <div class="max-w-max bg-[#040406] cursor-pointer team-card">
              <img
                class="rounded-t-lg w-[70%] xl:w-[100%] md:w-[90%] m-auto"
                src={vivek}
                alt="team image"
              />
              <div class="text-center pt-1">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Vivek Nair
                </h5>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  vice president sales
                </p>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  English, Arabic, Hindi, Malayalam
                </p>
              </div>
            </div>
          </div>
          {/* emran */}
          <div className="p-4">
            <div class="max-w-max bg-[#040406] cursor-pointer team-card">
              <img
                class="rounded-t-lg w-[70%] xl:w-[100%] md:w-[90%] m-auto"
                src={emran}
                alt="team image"
              />
              <div class="text-center pt-1">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Emran Khan
                </h5>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  Sales Director
                </p>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  English, Arabic, Hindi
                </p>
              </div>
            </div>
          </div>
          {/* ashik */}
          <div className="p-4">
            <div class="max-w-max bg-[#040406] cursor-pointer team-card">
              <img
                class="rounded-t-lg w-[70%] xl:w-[100%] md:w-[90%] m-auto"
                src={ashik}
                alt="team image"
              />
              <div class="text-center pt-1">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Ashik KC
                </h5>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  Sales Director
                </p>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  English, Hindi, German
                </p>
              </div>
            </div>
          </div>
        </Slider>
        <button className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] mt-4 md:text-[1rem] m-auto w-fit">
          View More
          <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
        </button>
      </div>
    </div>
  );
}

export default TeamSection