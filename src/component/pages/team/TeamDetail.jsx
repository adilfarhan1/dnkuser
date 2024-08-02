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
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(null); // Add an error state
  const { getTeamById } = userTeamServices();

  useEffect(() => {
    console.log("Fetched ID from useParams:", id);
    fetchTeam();
  }, [id]);

  const fetchTeam = async () => {
    try {
      const response = await getTeamById();
      console.log("API Response:", response); // Log the API response

      if (response.success) {
        const teamData = response.data.find(
          (user) => user._id === id
        );
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
      setLoading(false)
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Loading indicator
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
              <div className="flex gap-5">
                <p className="mb-0">Experience:</p>
                <p className="mb-0">{teamData?.experience}</p>
              </div>
              <div className="flex gap-5">
                <p className="mb-0">Specialization:</p>
                <p className="mb-0">{teamData?.specialization}</p>
              </div>
              <div className="flex gap-5">
                <p className="mb-0">Language:</p>
                <p className="mb-0">{teamData?.language}</p>
              </div>
              <div className="my-2 flex gap-4">
                <button className="border px-12 py-2 rounded text-[#fff] hover:text-[#000] hover:bg-[#fff] duration-500">
                  <MdEmail className="text-[1rem] md:text-[1.5rem]" />
                </button>
                <button className="border px-12 py-2 rounded text-[#fff] hover:text-[#000] hover:bg-[#fff] duration-500">
                  <MdCall className="text-[1rem] md:text-[1.5rem]" />
                </button>
                <button className="border px-12 py-2 rounded text-[#fff] hover:text-[#000] hover:bg-[#fff] duration-500">
                  <IoLogoWhatsapp className="text-[1rem] md:text-[1.5rem]" />
                </button>
              </div>
              <p className="text-justify">{teamData?.about}</p>
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