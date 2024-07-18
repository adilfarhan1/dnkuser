import React, { useState } from "react";
import LuxuryVilla01 from "../../../../assets/project-img/luxury-villas01.png"
import LuxuryVilla02 from "../../../../assets/project-img/luxury-villas02.png"
import LuxuryVilla03 from "../../../../assets/project-img/luxury-villas03.png"
import { IoMdHelpCircle } from "react-icons/io";
import { IoChevronForwardCircle } from "react-icons/io5";
import ProjectConnect from "./ProjectConnect";
import kidsIcon from "../../../../assets/icons/kids-ic.svg";


export const DetailProject = () => {
  const [navR, setNavR] = useState(true);

  //nav menu button
  const handleNavR = () => {
    setNavR(!navR);
  };

  return (
    <div className=" w-full bg-[#040406] flex items-center justify-center">
      <div className="container max-w-[1240px] py-5  px-4  md:py-9 grid  lg:grid-cols-3 relative">
        <div className="col-span-2">
          <h1>Dream Villas Dubai</h1>
          <p>Personally Visited & Approved</p>
          <div
            className="grid 
          grid-cols-3 mb-3"
          >
            <div
              className="col-span-2 relative mr-1 h-[170px] md:h-[285px] w-full"
              style={{
                backgroundImage: `url(${LuxuryVilla01})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="ml-1">
              <div
                className=""
                style={{
                  backgroundImage: `url(${LuxuryVilla02})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "49.5%",
                }}
              ></div>
              <div className="h-[1.5%] w-full"></div>
              <div
                className=""
                style={{
                  backgroundImage: `url(${LuxuryVilla03})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "49.5%",
                }}
              >
                <div className="white-cover flex">
                  <p className="m-auto text-[#000000] ">View More</p>
                </div>
              </div>
            </div>
          </div>
          <h6 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold mb-4">
            Features & amenities
          </h6>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            <div className="text-[#ffffff] w-full flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
              <img className="w-[1.5rem] md:w-[1.8rem]" src={kidsIcon}></img>{" "}
              <p className="text-[#ffffff] m-0">Kids play area</p>
            </div>
            <div className="text-[#ffffff] w-full mr-1 flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
              <img className="w-[1.5rem] md:w-[1.8rem]" src={kidsIcon}></img>{" "}
              <p className="text-[#ffffff] m-0">Kids play area</p>
            </div>
            <div className="text-[#ffffff] w-full mr-1 flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
              <img className="w-[1.5rem] md:w-[1.8rem]" src={kidsIcon}></img>{" "}
              <p className="text-[#ffffff] m-0">Kids play area</p>
            </div>
            <div className="text-[#ffffff] w-full mr-1 flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
              <img className="w-[1.5rem] md:w-[1.8rem]" src={kidsIcon}></img>{" "}
              <p className="text-[#ffffff] m-0">Kids play area</p>
            </div>
          </div>
          <h6 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold mb-4">
            Lifestyle at Gems Estates
          </h6>
          <p>
            The Gems Estates collection of premium villas will allow you to
            experience a truly luxurious lifestyle in Damac Hills, one of
            Dubai's most prestigious golf communities. This brand-new
            residential complex is being developed by Damac Properties (the
            largest construction company) in collaboration with the jewellery
            company, de Grisogono, and the fashion brand Cavalli.
          </p>
        </div>

        {/* side section */}
        <div className="pl-4 hidden lg:block">
          <ProjectConnect />
        </div>
      </div>

      {/* slidebar */}
      <div
        className="fixed right-0 top-[15rem] bg-[#CE8745] rounded-bl-2xl rounded-tl-2xl  lg:hidden"
        onClick={handleNavR}
      >
        {!navR ? (
          <IoChevronForwardCircle className="text-[#ffffff] text-[2rem]  mr-3" />
        ) : (
          <IoMdHelpCircle className="text-[#ffffff] text-[2rem] mr-3" />
        )}
      </div>

      <div
        className={
          !navR
            ? "fixed right-0 top-[50px] w-[60%] bg-[#040406] h-full ease-in-out duration-500 slide-bar"
            : "fixed right-[-100%] slide-bar top-15 h-full"
        }
      >
        <div className="p-4">
          <div
            className="absolute left-[-44px] top-[10rem] bg-[#CE8745] rounded-bl-2xl rounded-tl-2xl"
            onClick={handleNavR}
          >
            <IoChevronForwardCircle className="text-[#ffffff] text-[2rem]  mr-3" />
          </div>

          <ProjectConnect />
        </div>
      </div>
    </div>
  );
}

export default DetailProject