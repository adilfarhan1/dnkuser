import React, { useEffect, useState } from 'react'
import { IoMdHelpCircle } from "react-icons/io";
import { IoChevronForwardCircle } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import Profile from "../../../../assets/icons/profile.svg";
import qrcode from "../../../../assets/icons/qr-code.png";
import { URL } from '../../../../url/axios';
import { useParams } from 'react-router-dom';
import { PopupModel } from "../../../model/PopupModel";
import { useProjectServices } from '../../../../services/projectServices';

export const ProjectConnect = ({url, title}) => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getProjectById } = useProjectServices();
  const [ShowPopup, setShowPopup] = useState(false);


  useEffect(() => {
    fetchProject();
     // Log the API response
  }, [id])

   const fetchProject = async () => {
     try {
       const response = await getProjectById(id);
       console.log("API Response:", response); // Log the API response

       if (response.success) {
         const projectData = response.data;
         console.log("Matching Team Data:", projectData);

         if (projectData) {
           setProjectData(projectData);
         } else {
           setError("No project found with the provided ID.");
         }
       } else {
         setError("Failed to fetch project details.");
       }
     } catch (err) {
       console.error("Failed to fetch team details", err);
       setError("An error occurred while fetching team details.");
     } finally {
       setLoading(false);
     }
  };
  
  if (loading) {
    return (
      <div className="bg-[#040406] text-center">
        <p className="m-auto loader !w-[24px] !h-[24px]"></p>
      </div>
    ); // Loading indicator
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  const currentUrl = window.location.href;

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}`,
      "_blank"
    );
  };

  const shareOnInstagram = () => {
    alert(
      "Instagram does not support direct link sharing. Please copy the link and share it manually in your Instagram app."
    );
  };

  const shareOnLinkedIn = () => {
   window.open(
     `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
       currentUrl
     )}&title=${encodeURIComponent(title)}`,
     "_blank"
   );
  };

  const shareOnWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(title + " " + currentUrl)}`,
      "_blank"
    );
  };


 
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
          <a
            href="tel:+971543049309"
            className="site-sub-btn w-full mr-1 text-center"
          >
            Call
          </a>
          <button
            onClick={() => setShowPopup(true)}
            className="site-sub-btn w-full ml-1"
          >
            Inquiry
          </button>
        </div>
        <div className="flex items-center justify-center mt-2">
          <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
            Or get availability via
          </p>
          <a
            href={`https://wa.me/+971543049309?text=Hello,%20Share%20more%20details%20${projectData.projectname}`}
            className="flex items-center justify-center group"
          >
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
          {projectData.projectname}
        </p>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">Developer:</span>
          {projectData.developer}
        </p>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">Bedroom:</span>
          {projectData.bedroom}
        </p>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">Type:</span>
          {projectData.type}
        </p>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">
            Handover date:
          </span>
          {projectData.handover}
        </p>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">Total Area:</span>
          {projectData.totalarea}
        </p>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">
            DLD Permit Number:
          </span>
        </p>
        <div
          style={{
            backgroundImage: `url(${
              projectData?.dld ? URL + projectData.dld : qrcode
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100px",
            height: "100px",
          }}
        ></div>
      </div>
      <div className="border border-[#ffffff] border-spacing-1 rounded-md p-3 mt-3">
        <h6 className="text-[#ffffff] text-left text-[0.9rem] sm:text-[1.1rem] font-medium border-b-[#ffffff] border-b pb-2 mb-3">
          Share
        </h6>
        <ul className="flex items-center justify-left gap-4 p-2 md:flex">
          <li className="group">
            <FaFacebookF
              onClick={shareOnFacebook}
              className="text-[#ffffff] group-hover:text-[#CE8745] text-xl  transition duration-200 ease-out"
            />
          </li>
          <li className="group">
            <FaInstagram
              onClick={shareOnInstagram}
              className="text-[#ffffff] group-hover:text-[#CE8745] text-xl  transition duration-200 ease-out"
            />
          </li>
          <li className="group">
            <FaLinkedin
              onClick={shareOnLinkedIn}
              className="text-[#ffffff] group-hover:text-[#CE8745] text-xl  transition duration-200 ease-out"
            />
          </li>
          <li className="group">
            <RiWhatsappFill
              onClick={shareOnWhatsApp}
              className="text-[#ffffff] group-hover:text-[#CE8745] text-xl  transition duration-200 ease-out"
            />
          </li>
        </ul>
      </div>
      <div>
        {ShowPopup && <PopupModel onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
}

export default ProjectConnect