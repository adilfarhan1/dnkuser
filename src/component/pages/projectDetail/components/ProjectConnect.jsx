import React from 'react'
import { IoMdHelpCircle } from "react-icons/io";
import { IoChevronForwardCircle } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import Profile from "../../../../assets/icons/profile.svg";
import qrcode from "../../../../assets/icons/qr-code.png";

export const ProjectConnect=()=> {
  return (
    <div>
      <div className="border border-[#ffffff] border-spacing-1 rounded-md p-3">
        <div className="flex text-center">
          <img
            className="h-[60px] w-[60px] sm:h-[95px] sm:w-[95px]"
            src={Profile}
            alt="profile"
          />
          <div className="pl-2">
            <h6 className="text-[#ffffff] text-left text-[0.9rem] sm:text-[1rem] font-semibold">
              Kulsoom
            </h6>
            <p className="text-[0.89rem]">Property Consultant</p>
          </div>
        </div>
        <div className="flex items-center pt-3">
          <button className="site-sub-btn w-full mr-1">Call</button>
          <button className="site-sub-btn w-full ml-1">Inquiry</button>
        </div>
        <div className="flex items-center justify-center mt-2">
          <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
            Or get availability via
          </p>
          <a href="" className="flex items-center justify-center group">
            <FaWhatsapp className="text-[#CE8745] ml-2 group-hover:text-[#6B9B2D] text-[1rem] lg:text-[1.3rem]" />
            <p className="mb-0 text-[#CE8745] group-hover:text-[#6B9B2D] text-[0.8rem] lg:text-[1rem]">
              WhatsApp
            </p>
          </a>
        </div>
      </div>
      <div className="border border-[#ffffff] border-spacing-1 rounded-md p-3 mt-3">
        <h6 className="text-[#ffffff] text-left text-[0.9rem] sm:text-[1.1rem] font-medium border-b-[#ffffff] border-b pb-2 mb-3">
          Quick Facts
        </h6>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">Project:</span>
          Gems Estates
        </p>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">Developer:</span>
          Damac Properties
        </p>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">Bedroom:</span>
          5,6
        </p>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">Type:</span>
          Villa
        </p>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">
            Handover date:
          </span>
          Dec 18, 2022
        </p>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">Total Area:</span>
          0.00m sq.ft
        </p>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">
            DLD Permit Number:
          </span>
        </p>
        <img src={qrcode} alt="qr code" className="w-[28%]" />
      </div>
      <div className="border border-[#ffffff] border-spacing-1 rounded-md p-3 mt-3">
        <h6 className="text-[#ffffff] text-left text-[0.9rem] sm:text-[1.1rem] font-medium border-b-[#ffffff] border-b pb-2 mb-3">
          Share
        </h6>
        <ul className="flex items-center justify-left gap-4 p-2 md:flex">
          <li className="group">
            <FaFacebookF className="text-[#ffffff] group-hover:text-[#CE8745] text-xl  transition duration-200 ease-out" />
          </li>
          <li className="group">
            <FaInstagram className="text-[#ffffff] group-hover:text-[#CE8745] text-xl  transition duration-200 ease-out" />
          </li>
          <li className="group">
            <FaLinkedin className="text-[#ffffff] group-hover:text-[#CE8745] text-xl  transition duration-200 ease-out" />
          </li>
          <li className="group">
            <RiWhatsappFill className="text-[#ffffff] group-hover:text-[#CE8745] text-xl  transition duration-200 ease-out" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectConnect