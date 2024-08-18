import React from 'react'
import { useEffect, useState } from 'react';
import asad from '../../../assets/team-img/asad.png'
import { MdEmail, MdCall } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import OurProcess from '../home/components/OurProcess';
import ReviewSection from '../home/components/ReviewSection';
import PartnerSection from '../home/components/PartnerSection';
import TalkSection from '../home/components/TalkSection';
import { useParams } from 'react-router-dom';
import { userTeamServices } from '../../../services/teamServices';
import { URL } from '../../../url/axios';


export const TeamDetail = () => {
  const { id } = useParams();
  // const { team } = location.state;
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(null); // Add an error state
  const { getTeamById } = userTeamServices();

  useEffect(() => {
    console.log("Fetched ID from useParams:", id);
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchTeam();
  }, [id]);

  const fetchTeam = async () => {
    try {
      const response = await getTeamById(id);
      console.log("API Response:", response); // Log the API response

      if (response.success) {
        // const teamData = response.data.find(
        //   (user) => user.id === id
        // );
        const teamData = response.data;
        console.log("Matching Team Data:", teamData); // Log the matched team data

        if (teamData) {
          setTeamData(teamData);
        } else {
          setError("No team member found with the provided ID.");
        }
      } else {
        setError("Failed to fetch team details.");
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

  return (
    <div>
      <div>
        <div className="team-section w-full bg-[#040406] flex items-center justify-center">
          <div className="container max-w-[1240px] py-5  px-4  md:py-9 grid  md:grid-cols-2 relative">
            <img
              src={teamData.image ? URL + teamData.image : asad}
              alt=""
              className="w-[80%] m-auto"
            />
            <div>
              <h1 className="banner-h1 mb-0">{teamData?.name}</h1>
              <p className="mb-2">{teamData?.position}</p>
              <div className="w-[100%] h-[1px] bg-white mb-3"></div>
              <div className="flex gap-4">
                <div>
                  <p className="mb-0 text-[#ffffff]">Experience:</p>
                  <p className="mb-0 text-[#ffffff]">Specialization:</p>
                  <p className="mb-0 text-[#ffffff]">Language:</p>
                </div>

                <div className="col-span-3">
                  <p className="mb-0">{teamData?.experience}</p>
                  <p className="mb-0">{teamData?.specialization}</p>
                  <p className="mb-0">{teamData?.language}</p>
                </div>
              </div>

              <div className="my-2 flex gap-4">
                <a
                  href={`mailto:${teamData?.email}`}
                  className="border px-12 py-2 rounded text-[#fff] hover:text-[#000] hover:bg-[#fff] duration-500"
                >
                  <MdEmail className="text-[1rem] md:text-[1.5rem]" />
                </a>
                <a
                  href={`tel:${teamData?.phone}`}
                  className="border px-12 py-2 rounded text-[#fff] hover:text-[#000] hover:bg-[#fff] duration-500"
                >
                  <MdCall className="text-[1rem] md:text-[1.5rem]" />
                </a>
                <a
                  href={`https://wa.me/${teamData.phone.replace(
                    /\s+/g,
                    ""
                  )}?text=Hello,${teamData.name}%20send%20more%20details`}
                  className="border px-12 py-2 rounded text-[#fff] hover:text-[#000] hover:bg-[#fff] duration-500"
                >
                  <IoLogoWhatsapp className="text-[1rem] md:text-[1.5rem]" />
                </a>
              </div>
              <p className="text-justify">{teamData?.aboutpara1}</p>
              <p className="text-justify">{teamData?.aboutpara2}</p>
              <p className="text-justify">{teamData?.aboutpara3}</p>
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

export default TeamDetail