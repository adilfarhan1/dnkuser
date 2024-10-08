import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import findAgent from '../../../../assets/icons/findAgent.svg'
import loadingRound from '../../../../assets/icons/loadingRound.svg'
import listProperty from "../../../../assets/icons/listProperty.svg";
import availableProject from "../../../../assets/icons/availableProject.svg";


export const OurProcess =()=> {
  return (
    <div className="w-full bg-[#121218] flex items-center justify-center">
      <div className="serviceSection container max-w-[1240px] py-5  px-4  md:py-9">
        <h1 className="m-auto w-fit">Our Process</h1>
        <p className="text-center m-auto w-[100%] md:w-[80%]">
          Team of real estate experts, Find your agent to find a home for you
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 pt-[3rem]">
          {/* Find an Agent */}
          <div class=" xl:max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] group m-1 xl:m-4 p-4 ">
            <div class="relative">
              <div className="w-[100%]">
                <div className="w-fit m-auto border border-[#ffff] rounded-[50px] p-[5px] bg-[#121218]">
                  <div className="relative p-4 ">
                    <img
                      src={loadingRound}
                      alt="loading loop"
                      className="absolute left-0 top-0 animate-spin"
                    />
                    <img src={findAgent} alt="service icon m-auto" />
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <h5 class="mb-2 tracking-tight text-gray-900 dark:text-white m-auto w-fit">
                  Find an Agent
                </h5>
                <div className="relative">
                  <p class="m-0 font-normal text-gray-700 dark:text-gray-400 text-center">
                    Our strong team is here to provide support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* List Your Property */}
          <div class="xl:max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] group  m-1 xl:m-4 p-4">
            <div class="relative">
              <div className="w-[100%]">
                <div className="w-fit m-auto border border-[#ffff] rounded-[50px] p-[5px] bg-[#121218]">
                  <div className="relative p-4 ">
                    <img
                      src={loadingRound}
                      alt="loading loop"
                      className="absolute left-0 top-0 animate-spin"
                    />
                    <img src={listProperty} alt="service icon m-auto" />
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <h5 class="mb-2 tracking-tight text-gray-900 dark:text-white m-auto w-fit">
                  List Your Property
                </h5>
                <div className="relative">
                  <p class="m-0 font-normal text-gray-700 dark:text-gray-400 text-center">
                    Sell or Rent your property with the best prices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Projects */}
          <div class="xl:max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] group  m-1 xl:m-4 p-4">
            <div class="relative">
              <div className="w-[100%]">
                <div className="w-fit m-auto border border-[#ffff] rounded-[50px] p-[5px] bg-[#121218]">
                  <div className="relative p-4 ">
                    <img
                      src={loadingRound}
                      alt="loading loop"
                      className="absolute left-0 top-0 animate-spin"
                    />
                    <img src={availableProject} alt="service icon m-auto" />
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <h5 class="mb-2 tracking-tight text-gray-900 dark:text-white m-auto w-fit">
                  Projects
                </h5>
                <div className="relative">
                  <p class="m-0 font-normal text-gray-700 dark:text-gray-400 text-center">
                    Discover the off-plan & ready to move property in Dubai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProcess