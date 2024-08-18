import React, { useEffect, useState } from "react";
import LuxuryVilla01 from "../../../../assets/project-img/luxury-villas01.png"
import LuxuryVilla02 from "../../../../assets/project-img/luxury-villas02.png"
import LuxuryVilla03 from "../../../../assets/project-img/luxury-villas03.png"
import LoadImg from "../../../../assets/icons/loadImg.png"
import { IoMdHelpCircle } from "react-icons/io";
import { IoChevronForwardCircle } from "react-icons/io5";
import ProjectConnect from "./ProjectConnect";
import kidsIcon from "../../../../assets/icons/kids-ic.svg";
import pool from "../../../../assets/icons/swimming-pool.png"
import health from "../../../../assets/icons/rehabilitation.png"
import Retailoutlet from "../../../../assets/icons/wholesaler.png"
import gym from "../../../../assets/icons/weights.png"
import park from "../../../../assets/icons/park.png"
import restro from "../../../../assets/icons/restaurant.png"
import { useParams } from "react-router-dom";
import { URL } from "../../../../url/axios";
import { useProjectServices } from '../../../../services/projectServices';

export const DetailProject = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [navR, setNavR] = useState(true);
  const { getProjectById } = useProjectServices();

  useEffect(() => {
    console.log("Fetched ID from useParams:", id);
    fetchProject();
  }, [id])

  const fetchProject = async () => {
    try {
      const response = await getProjectById(id);

      if (response.success) {
        const projectData = response.data;

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
      setLoading(false)
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

  //nav menu button
  const handleNavR = () => {
    setNavR(!navR);
  };

  return (
    <div className=" w-full bg-[#040406] flex items-center justify-center">
      <div className="container max-w-[1240px] py-5  px-4  md:py-9 grid  lg:grid-cols-3 relative">
        <div className="col-span-2">
          <h1>{projectData?.mainhead}</h1>
          <p>Personally Visited & Approved</p>
          <div
            className="grid 
          grid-cols-3 mb-3"
          >
            <div
              className="col-span-2 relative mr-1 h-[170px] md:h-[285px] w-full"
              style={{
                backgroundImage: `url(${
                  projectData?.gallary1 ? URL + projectData.gallary1 : LoadImg
                })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <div className="ml-1">
              <div
                className=""
                style={{
                  backgroundImage: `url(${
                    projectData?.gallary2 ? URL + projectData.gallary2 : LoadImg
                  })`,
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
                  backgroundImage: `url(${
                    projectData?.gallary2 ? URL + projectData.gallary3 : LoadImg
                  })`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "49.5%",
                }}
              >
                {/* <div className="white-cover flex">
                  <p className="m-auto text-[#000000] ">View More</p>
                </div> */}
              </div>
            </div>
          </div>
          <h6 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold mb-4">
            Features & amenities
          </h6>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            <div className="text-[#ffffff] w-full flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
              <img className="w-[1.5rem] md:w-[1.8rem]" src={park}></img>
              <p className="text-[#ffffff] m-0">Kids Play Area</p>
            </div>
            <div className="text-[#ffffff] w-full mr-1 flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
              <img className="w-[1.5rem] md:w-[1.8rem]" src={pool}></img>
              <p className="text-[#ffffff] m-0">Swimming pool</p>
            </div>
            <div className="text-[#ffffff] w-full mr-1 flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
              <img className="w-[1.5rem] md:w-[1.8rem]" src={health}></img>
              <p className="text-[#ffffff] m-0">Health Care Centre</p>
            </div>
            <div className="text-[#ffffff] w-full mr-1 flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
              <img className="w-[1.5rem] md:w-[1.8rem]" src={gym}></img>
              <p className="text-[#ffffff] m-0">Gymnasium</p>
            </div>
            <div className="text-[#ffffff] w-full mr-1 flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
              <img
                className="w-[1.5rem] md:w-[1.8rem]"
                src={Retailoutlet}
              ></img>
              <p className="text-[#ffffff] m-0">Retail Outlets</p>
            </div>
            <div className="text-[#ffffff] w-full mr-1 flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
              <img
                className="w-[1.5rem] md:w-[1.8rem] backdrop-brightness-200"
                src={restro}
              ></img>
              <p className="text-[#ffffff] m-0">Restaurants</p>
            </div>
          </div>
          <h6 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold mb-4">
            Lifestyle at {projectData?.projectname}
          </h6>
          <p>{projectData?.about}</p>
          <iframe class="map mb-3" src={projectData?.location}></iframe>
          <div className="grid md:grid-cols-2">
            <div>
              <h6 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold mb-4">
                {projectData?.nearby1}
              </h6>
              <p>{projectData?.dec1}</p>
            </div>
            <div>
              <h6 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold mb-4">
                {projectData?.nearby2}
              </h6>
              <p>{projectData?.dec2}</p>
            </div>
            <div>
              <h6 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold mb-4">
                {projectData?.nearby3}
              </h6>
              <p>{projectData?.dec3}</p>
            </div>
            <div>
              <h6 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold mb-4">
                {projectData?.nearby4}
              </h6>
              <p>{projectData?.dec4}</p>
            </div>
          </div>
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