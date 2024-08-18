import React, { useEffect, useState } from 'react'
import projectCover from "../../../../assets/icons/coverImage.svg"
import { useParams } from 'react-router-dom';
import { useProjectServices } from '../../../../services/projectServices';
import { PopupModel } from "../../../model/PopupModel"; 
import { URL } from '../../../../url/axios';

export const ProjectBanner = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ShowPopup, setShowPopup] = useState(false);
  const { getProjectById } = useProjectServices();

  useEffect(() => {
    fetchProject();
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

  return (
    <div
      className="banner w-full bg-[#040406] flex items-center justify-center"
      style={{
        backgroundImage: `url(${
          projectData?.coverimage ? URL + projectData.coverimage : projectCover
        })`,
      }}
    >
      <div className="container max-w-[1240px] px-4 flex items-center justify-start">
        <div className="banner-content">
          <h1 className="banner-h1">Luxury Home Spotlight</h1>
          <p className="pb-4">
            welcome to your Dubai dream at luxury villa Walk
          </p>
          <button onClick={() => setShowPopup(true)} className="site-btn ">
            Request callback
          </button>
        </div>
      </div>
      <div>
        {ShowPopup && <PopupModel onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
}

export default ProjectBanner