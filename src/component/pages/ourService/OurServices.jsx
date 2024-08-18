import React, { useEffect } from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import propertyManagement from "../../../assets/icons/propertyManagement.svg";
import loadingRound from "../../../assets/icons/loadingRound.svg";
import capitalImprovements from "../../../assets/icons/capitalImprovement.svg";
import financeRealEstate from "../../../assets/icons/FinanceRealEstate.svg";
import financialReporting from "../../../assets/icons/FinancialReporting.svg";
import recoverAssetValue from "../../../assets/icons/RecoverAssetValue.svg";
import TalkSection from '../home/components/TalkSection';
import PartnerSection from '../home/components/PartnerSection';
import ReviewSection from '../home/components/ReviewSection';
import OurProcess from '../home/components/OurProcess';
import BannerService from './component/BannerService';

export const OurServices = () => {
  
// Scroll to the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

    return (
        <div>
            <BannerService />
        <div className="about-section w-full bg-[#040406] flex items-center justify-center">
          <div className="container max-w-[1240px] py-5  px-4  md:py-9 grid md:grid-cols-2 relative">
            {/* property Management-card */}
            <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] group m-4 mt-14">
              <div class="relative">
                <div className="absolute -translate-y-14 w-[100%]">
                  <div className="w-fit m-auto border border-[#ffff] rounded-[50px] p-[5px] bg-[#121218]">
                    <div className="relative p-4 ">
                      <img
                        src={loadingRound}
                        alt="loading loop"
                        className="absolute left-0 top-0 hidden group-hover:block animate-spin"
                      />
                      <img src={propertyManagement} alt="service icon m-auto" />
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-[2.7rem]">
                  <h5 class="mb-2 tracking-tight text-gray-900 dark:text-white m-auto w-fit">
                    Property Management
                  </h5>
                  <div className="relative">
                    {/* <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0 "></span> */}
                    <p class="m-0 font-normal text-gray-700 dark:text-gray-400 text-justify">
                      Our property management concept is built on integrity,
                      accountability, and honest service that promises maximum
                      ROI. By connecting the right people for our client's
                      property and managing them throughout the stay, their
                      investment will be protected and maintained with us. With
                      our experienced and conscientious team, our clients can
                      rest easy and live their life to the fullest without the
                      hassle that comes with managing the property.
                    </p>
                  </div>

                  {/* <button className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] mt-4 md:text-[1rem] m-auto">
                View More
                <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
              </button> */}
                </div>
              </div>
            </div>
            {/* Capital Improvements-card */}
            <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] group m-4 mt-14">
              <div class="relative">
                <div className="absolute -translate-y-14 w-[100%]">
                  <div className="w-fit m-auto border border-[#ffff] rounded-[50px] p-[5px] bg-[#121218]">
                    <div className="relative p-4 ">
                      <img
                        src={loadingRound}
                        alt="loading loop"
                        className="absolute left-0 top-0 hidden group-hover:block animate-spin"
                      />
                      <img
                        src={capitalImprovements}
                        alt="service icon m-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-[2.7rem]">
                  <h5 class="mb-2 tracking-tight text-gray-900 dark:text-white m-auto w-fit">
                    Capital Improvements
                  </h5>
                  <div className="relative">
                    {/* <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0"></span> */}
                    <p class="m-0 font-normal text-gray-700 dark:text-gray-400 text-justify ">
                      Our capital improvement strategists use a time-honoured
                      approach to help clients realize the maximum potential of
                      their capital investments regardless of the size. Our
                      dynamic team is uniquely equipped to provide the skill set
                      necessary for each property investment and tailor
                      strategic engagements to meet a specific need by
                      developing a specific approach and tool to help manage and
                      control investments in a way that minimizes risks,
                      maximizes performance, and ensures success.
                    </p>
                  </div>

                  {/* <button className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] mt-4 md:text-[1rem] m-auto">
                View More
                <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
              </button> */}
                </div>
              </div>
            </div>
            {/* Finance Real Estate-card */}
            <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] m-4 group mt-14">
              <div class="relative">
                <div className="absolute -translate-y-14 w-[100%]">
                  <div className="w-fit m-auto border border-[#ffff] rounded-[50px] p-[5px] bg-[#121218]">
                    <div className="relative p-4 ">
                      <img
                        src={loadingRound}
                        alt="loading loop"
                        className="absolute left-0 top-0 hidden group-hover:block animate-spin"
                      />
                      <img src={financeRealEstate} alt="service icon m-auto" />
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-[2.7rem]">
                  <h5 class="mb-2 tracking-tight text-gray-900 dark:text-white m-auto w-fit">
                    Finance Real Estate
                  </h5>
                  <div className="relative">
                    {/* <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0"></span> */}
                    <p class="m-0 font-normal text-gray-700 dark:text-gray-400 text-justify ">
                      We are capable of funding across the capital stack right
                      from early stage equity to late-stage debt, construction
                      finance, lease rental discounting, loan against property
                      as well as bulk buying properties. We also provide
                      holistic financing solutions to clients looking for
                      housing opportunities.
                    </p>
                  </div>

                  {/* <button className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] mt-4 md:text-[1rem] m-auto">
                View More
                <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
              </button> */}
                </div>
              </div>
            </div>
            {/* Financial Reporting-card */}
            <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] m-4 group mt-14">
              <div class="relative">
                <div className="absolute -translate-y-14 w-[100%]">
                  <div className="w-fit m-auto border border-[#ffff] rounded-[50px] p-[5px] bg-[#121218]">
                    <div className="relative p-4 ">
                      <img
                        src={loadingRound}
                        alt="loading loop"
                        className="absolute left-0 top-0 hidden group-hover:block animate-spin"
                      />
                      <img src={financialReporting} alt="service icon m-auto" />
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-[2.7rem]">
                  <h5 class="mb-2 tracking-tight text-gray-900 dark:text-white m-auto w-fit">
                    Financial Reporting
                  </h5>
                  <div className="relative">
                    {/* <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0"></span> */}
                    <p class="m-0 font-normal text-gray-700 dark:text-gray-400 text-justify ">
                      Our financial reporting system is designed by specialists
                      who are highly proficient in using various financial
                      solutions. Our reporting system helps you visualize your
                      entire property investment portfolio in a consolidated
                      fashion and provides intelligence and data to help you
                      make better-informed decisions. Our comprehensive
                      financial statement reporting also provides you with an
                      easy-to-understand overview of all your real estate
                      activities.
                    </p>
                  </div>

                  {/* <button className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] mt-4 md:text-[1rem] m-auto">
                View More
                <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
              </button> */}
                </div>
              </div>
            </div>
            {/* Recover Asset Value-card */}
            <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] m-4 group mt-14">
              <div class="relative">
                <div className="absolute -translate-y-14 w-[100%]">
                  <div className="w-fit m-auto border border-[#ffff] rounded-[50px] p-[5px] bg-[#121218]">
                    <div className="relative p-4 ">
                      <img
                        src={loadingRound}
                        alt="loading loop"
                        className="absolute left-0 top-0 hidden group-hover:block animate-spin"
                      />
                      <img src={recoverAssetValue} alt="service icon m-auto" />
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-[2.7rem]">
                  <h5 class="mb-2 tracking-tight text-gray-900 dark:text-white m-auto w-fit">
                    Recover Asset Value
                  </h5>
                  <div className="relative">
                    {/* <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0"></span> */}
                    <p class="m-0 font-normal text-gray-700 dark:text-gray-400 text-justify">
                      We help recover the value of the underperforming assets or
                      portfolios. Whether the resolution involves a sale or
                      workout of a loan, valuation, sale of a property, or
                      recapitalization, we seamlessly realign the asset strategy
                      to the original investment goals of the client and deliver
                      the expected and honest service through trust and
                      accountability.
                    </p>
                  </div>

                  {/* <button className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] mt-4 md:text-[1rem] m-auto">
                View More
                <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
              </button> */}
                </div>
              </div>
            </div>
          </div>
            </div>
        <OurProcess />
        <ReviewSection />    
        <PartnerSection />
        <TalkSection />
      </div>
    );
}

export default OurServices