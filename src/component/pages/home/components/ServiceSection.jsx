import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import propertyManagement from "../../../../assets/icons/propertyManagement.svg"
import loadingRound from "../../../../assets/icons/loadingRound.svg"
import capitalImprovements from "../../../../assets/icons/capitalImprovement.svg"
import financeRealEstate from "../../../../assets/icons/FinanceRealEstate.svg";
import financialReporting from "../../../../assets/icons/FinancialReporting.svg";
import recoverAssetValue from "../../../../assets/icons/RecoverAssetValue.svg";
import { useNavigate } from 'react-router-dom';

export const ServiceSection = () => {
  const navigate = useNavigate()

  const goToServices = () => {
    navigate("/services")
  }
  
  return (
    <div className="w-full bg-[#121218] flex items-center justify-center">
      <div className="serviceSection container max-w-[1240px] py-5  px-4  md:py-9">
        <h1 className="m-auto w-fit">Our Service</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 pt-[3rem] ">
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
                  <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0 "></span>
                  <p class="m-0 font-normal text-gray-700 dark:text-gray-400 text-justify line-clamp-3">
                    Our property management concept is built on integrity,
                    accountability, and honest service that promises maximum
                    ROI. By connecting the right people for our
                  </p>
                </div>

                <button
                  onClick={goToServices}
                  className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] mt-4 md:text-[1rem] m-auto"
                >
                  View More
                  <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
                </button>
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
                    <img src={capitalImprovements} alt="service icon m-auto" />
                  </div>
                </div>
              </div>
              <div className="p-4 pt-[2.7rem]">
                <h5 class="mb-2 tracking-tight text-gray-900 dark:text-white m-auto w-fit">
                  Capital Improvements
                </h5>
                <div className="relative">
                  <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0"></span>
                  <p class="m-0 font-normal text-gray-700 dark:text-gray-400 text-justify line-clamp-3">
                    Our capital improvement strategists use a time-honoured
                    approach to help clients realize the maximum potential of
                    their capital investments regardless of the size
                  </p>
                </div>

                <button
                  onClick={goToServices}
                  className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] mt-4 md:text-[1rem] m-auto"
                >
                  View More
                  <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
                </button>
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
                  <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0"></span>
                  <p class="m-0 font-normal text-gray-700 dark:text-gray-400 text-justify line-clamp-3">
                    We are capable of funding across the capital stack right
                    from early stage equity to late-stage debt, construction
                    finance, lease rental discounting, loan against property as
                    well as bulk buying properties
                  </p>
                </div>

                <button
                  onClick={goToServices}
                  className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] mt-4 md:text-[1rem] m-auto"
                >
                  View More
                  <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
                </button>
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
                  <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0"></span>
                  <p class="m-0 font-normal text-gray-700 dark:text-gray-400 text-justify line-clamp-3">
                    Our financial reporting system is designed by specialists
                    who are highly proficient in using various financial
                    solutions. Our reporting system helps you visualize your
                  </p>
                </div>

                <button
                  onClick={goToServices}
                  className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] mt-4 md:text-[1rem] m-auto"
                >
                  View More
                  <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
                </button>
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
                  <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0"></span>
                  <p class="m-0 font-normal text-gray-700 dark:text-gray-400 text-justify line-clamp-3">
                    We help recover the value of the underperforming assets or
                    portfolios. Whether the resolution involves a sale or
                    workout of a loan, valuation, sale of a
                  </p>
                </div>

                <button
                  onClick={goToServices}
                  className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] mt-4 md:text-[1rem] m-auto"
                >
                  View More
                  <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection