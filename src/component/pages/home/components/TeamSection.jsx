import React, { useState } from 'react'
import asad from '../../../../assets/team-img/asad.png'
import vivek from "../../../../assets/team-img/vivek.png";
import emran from "../../../../assets/team-img/emran.png";
import ashik from "../../../../assets/team-img/ashik.png";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { userTeamServices } from '../../../../services/teamServices';
import TeamListMain from './TeamListMain';
import { useNavigate } from 'react-router-dom';

export const TeamSection = () => {
  const navigate = useNavigate();

   //navigation
  const goToTeamPage = () => {
    navigate("/team")
  }
    
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
        <TeamListMain />
        <button
          onClick={goToTeamPage}
          className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] mt-4 md:text-[1rem] m-auto w-fit"
        >
          View More
          <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
        </button>
      </div>
    </div>
  );
}

export default TeamSection