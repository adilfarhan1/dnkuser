import React from 'react'
import BannerContact from './component/BannerContact'
import ContactForm from './component/ContactForm';
import Assist from "../../../assets/icons/assist.svg";
import Consultation from "../../../assets/icons/consultation.svg";
import Estimation from "../../../assets/icons/estimation.svg";
import Shedule from "../../../assets/icons/shedule.svg";
import { useEffect } from 'react';

export const Contact = () => {
  // Scroll to the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <div>
      <BannerContact />
      <div className=" w-full bg-[#040406] flex items-center justify-center">
        <div className="container max-w-[1240px] py-5  px-4  md:py-9">
          <h1 className="m-auto w-[100%] sm:w-[90%] md:w-[70%] text-center">
            Contact DNK Real Estate for Luxury Property Consultation in Dubai.
          </h1>
          <p className="text-center m-auto w-[100%] md:w-[80%]">
            Looking for help or any support? We are available for you.
          </p>
        </div>
      </div>
      <div className=" w-full bg-[#040406] flex items-center justify-center">
        <div className="container max-w-[1240px] py-5  px-4  md:py-9">
          <div className="grid  md:grid-cols-2 relative">
            <div className="grid grid-cols-2">
              <div className="p-2">
                <img
                  src={Assist}
                  alt="info icon"
                  className="pb-4 m-auto md:m-0"
                />
                <h5 className="text-center md:text-left text-[#ffffff]">
                  Call Enquiry Assistance
                </h5>
                <p className="text-center md:text-left">
                  We are always available on call to assist you with any
                  questions you may have.
                </p>
              </div>
              <div className="p-2">
                <img
                  src={Consultation}
                  alt="info icon"
                  className="pb-4 m-auto md:m-0"
                />
                <h5 className="text-center md:text-left text-[#ffffff]">
                  Call Enquiry Assistance
                </h5>
                <p className="text-center md:text-left">
                  We are always available on call to assist you with any
                  questions you may have.
                </p>
              </div>
              <div className="p-2">
                <img
                  src={Estimation}
                  alt="info icon"
                  className="pb-4  m-auto md:m-0"
                />
                <h5 className="text-center md:text-left text-[#ffffff]">
                  Call Enquiry Assistance
                </h5>
                <p className="mb-0 text-center md:text-left">
                  We are always available on call to assist you with any
                  questions you may have.
                </p>
              </div>
              <div className="p-2">
                <img
                  src={Shedule}
                  alt="info icon"
                  className="pb-4  m-auto md:m-0"
                />
                <h5 className="text-center md:text-left text-[#ffffff]">
                  Call Enquiry Assistance
                </h5>
                <p className="mb-0 text-center md:text-left">
                  We are always available on call to assist you with any
                  questions you may have.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
      <iframe
        class="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.546332658738!2d55.26173537506647!3d25.184791932203755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6929773eb961%3A0xc341839da661e4e1!2sDNK%20Real%20Estate!5e0!3m2!1sen!2sae!4v1719237952819!5m2!1sen!2sae"
      ></iframe>
    </div>
  );
}

export default Contact