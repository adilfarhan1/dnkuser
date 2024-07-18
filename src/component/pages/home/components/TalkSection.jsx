import React from 'react'
import Assist from "../../../../assets/icons/assist.svg"
import Consultation from "../../../../assets/icons/consultation.svg"
import Estimation from "../../../../assets/icons/estimation.svg"
import Shedule from "../../../../assets/icons/shedule.svg"
import { FaWhatsapp } from "react-icons/fa";


export const TalkSection=()=> {
  return (
    <div className="w-full bg-[#040406] flex items-center justify-center">
      <div className=" container max-w-[1240px] py-5  px-4  md:py-9 talkSection">
        <h1 className="m-auto w-fit">Let's Talk Together</h1>
        <p className="text-center m-auto w-[100%] md:w-[80%] pb-4">
          We love talk with new people. Please take a moment to tell us about
          your Dream. Your messages will be responded to within ONE BUSINESS
          DAY.
        </p>
        <div className="grid  md:grid-cols-2 relative pt-8">
          <div className="grid grid-cols-2">
            <div className="p-2">
              <img
                src={Assist}
                alt="info icon"
                className="pb-4 m-auto md:m-0"
              />
              <h5 className="text-center md:text-left">
                Call Enquiry Assistance
              </h5>
              <p className="text-center md:text-left">
                We are always available on call to assist you with any questions
                you may have.
              </p>
            </div>
            <div className="p-2">
              <img
                src={Consultation}
                alt="info icon"
                className="pb-4 m-auto md:m-0"
              />
              <h5 className="text-center md:text-left">
                Call Enquiry Assistance
              </h5>
              <p className="text-center md:text-left">
                We are always available on call to assist you with any questions
                you may have.
              </p>
            </div>
            <div className="p-2">
              <img
                src={Estimation}
                alt="info icon"
                className="pb-4  m-auto md:m-0"
              />
              <h5 className="text-center md:text-left">
                Call Enquiry Assistance
              </h5>
              <p className="mb-0 text-center md:text-left">
                We are always available on call to assist you with any questions
                you may have.
              </p>
            </div>
            <div className="p-2">
              <img
                src={Shedule}
                alt="info icon"
                className="pb-4  m-auto md:m-0"
              />
              <h5 className="text-center md:text-left">
                Call Enquiry Assistance
              </h5>
              <p className="mb-0 text-center md:text-left">
                We are always available on call to assist you with any questions
                you may have.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between mx-[0px] md:mx-[10px] mt-3 md:mt-0">
            <div>
              <input
                placeholder="Full Name*"
                type="email"
                class="w-full bg-[#040406] border border-[#ffffff] p-[10px] rounded mb-[25px]"
              />
              <input
                placeholder="Email Address*"
                type="email"
                class="w-full bg-[#040406] border border-[#ffffff] p-[10px] rounded mb-[25px] "
              />
              <input
                placeholder="Mobile Number*"
                type="email"
                class="w-full bg-[#040406] border border-[#ffffff] p-[10px] rounded mb-[25px] "
              />
              <input
                placeholder="City"
                type="email"
                class="w-full bg-[#040406] border border-[#ffffff] p-[10px] rounded mb-[25px]"
              />
            </div>
            <div>
              <button className="bg-[#CE8745] hover:bg-[#ffffff] hover:text-[#CE8745] w-full p-[10px] rounded duration-100">
                Submit
              </button>
              <div className="flex items-center justify-center mt-4">
                <p className="mb-0">Or contact us right now via</p>
                <a href="" className="flex items-center justify-center group">
                  <FaWhatsapp className="text-[#CE8745] text-[1.3rem] ml-2 group-hover:text-[#6B9B2D]" />
                  <p className="mb-0 text-[#CE8745] group-hover:text-[#6B9B2D]">
                    WhatsApp
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalkSection