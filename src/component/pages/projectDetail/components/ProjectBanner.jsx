import React from 'react'
import projectCover from "../../../../assets/project-cover/luxuryVilla.png"

export const ProjectBanner=()=> {
  return (
    <div
      className="banner w-full bg-[#040406] flex items-center justify-center"
      style={{ backgroundImage: `url(${projectCover})` }}
    >
      <div className="container max-w-[1240px] px-4 flex items-center justify-start">
        <div className="banner-content">
          <h1 className="banner-h1">Luxury Home Spotlight</h1>
          <p className="pb-4">
            welcome to your Dubai dream at luxury villa Walk
          </p>
          <button className="site-btn ">Request callback</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectBanner