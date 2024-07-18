import React, { useState } from 'react'
import userProfile from "../../../../assets/icons/userProfile.svg";
import projectImage from "../../../../assets/icons/image-demo.svg";
import ViewList from './ViewList';
import { useProjectServices } from '../../../../services/projectServices';
import { FaGlasses } from 'react-icons/fa';
import { URL } from '../../../../url/axios';
import qrcode from '../../../../assets/icons/qrcode.svg'
import Swal from 'sweetalert2';
import cvrImage from '../../../../assets/icons/coverImage.svg'

export const AddProject = (props) => {
  const [err, setErr] = useState(false)
  const [imageUrl, setImageUrl] = useState();
  
  const [createProject, setCreateProject] = useState({
    projectname: null,
    image: null,
    developer: null,
    type: null,
    bedroom: null,
    handover: null,
    totalarea: null,
    handover: null,
    dld: null,
    coverimage: null,
    bannertitile: null,
    bannersubtitile: null,
    gallary1: null,
    gallary2: null,
    gallary3: null,
    mainhead: null,
    about: null,
    location: null,
    nearby1: null,
    dec1: null,
    nearby2: null,
    dec2: null,
    nearby3: null,
    dec3: null,
    nearby4: null,
    dec4: null,
    status: null,
  });

  const [submit, setSubmit] = useState(false);

  const { postProjectList, putProjectList } = useProjectServices();

  const handleChange = (e) => {
    // if (e.target.value == "") {
    // setCreateProject({ ...createProject, [e.target.name]:null})
    // } else {
      setCreateProject({...createProject,[e.target.name]: e.target.value})
    // }
  }
  const thumbnailFileInput = (e) => {
    console.log(e.target.files);
    setCreateProject({ ...createProject, image: e.target.files[0] });
    setImageUrl(window.URL.createObjectURL(e.target.files[0]));
  }

   const dldFileInput = (e) => {
     console.log(e.target.files);
     setCreateProject({ ...createProject, image: e.target.files[0] });
     setImageUrl(window.URL.createObjectURL(e.target.files[0]));
  };

   const coverimageFileInput = (e) => {
     console.log(e.target.files);
     setCreateProject({ ...createProject, image: e.target.files[0] });
     setImageUrl(window.URL.createObjectURL(e.target.files[0]));
  };
  
  const gallary1FileInput = (e) => {
    console.log(e.target.files);
    setCreateProject({ ...createProject, image: e.target.files[0] });
    setImageUrl(window.URL.createObjectURL(e.target.files[0]));
  };

  const gallary2FileInput = (e) => {
    console.log(e.target.files);
    setCreateProject({ ...createProject, image: e.target.files[0] });
    setImageUrl(window.URL.createObjectURL(e.target.files[0]));
  };

  const gallary3FileInput = (e) => {
    console.log(e.target.files);
    setCreateProject({ ...createProject, image: e.target.files[0] });
    setImageUrl(window.URL.createObjectURL(e.target.files[0]));
  };

  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const submitData = {
          ...createProject,
          // projectname:createProject.projectname
        }
        let response
        if (createProject.id)
          response = await putProjectList(createProject.id, submitData)
        else
          response = await postProjectList(submitData);
        if (response.success) {
          Swal.fire('Success', 'Successfully added new project', 'success')
          handleReset()
          setSubmit(!submit)
        } else {
          Swal.fire('Failed', 'Failed to create project', 'error')
        }
      } catch (err) {
        console.log(err)
        Swal.fire('Failed', 'Failed to create project', 'error')
      
      }
  }

  const handleReset = () => {
    setCreateProject({
      projectname: null,
      image: null,
      developer: null,
      type: null,
      bedroom: null,
      handover: null,
      totalarea: null,
      handover: null,
      dld: null,
      coverimage: null,
      bannertitile: null,
      bannersubtitile: null,
      gallary1: null,
      gallary2: null,
      gallary3: null,
      mainhead: null,
      about: null,
      location: null,
      nearby1: null,
      dec1: null,
      nearby2: null,
      dec2: null,
      nearby3: null,
      dec3: null,
      nearby4: null,
      dec4: null,
      status: null,
    });
  }


  return (
    <div>
      <div>
        <h1 className="text-[#000] font-semibold">Add Project</h1>
      </div>
      <form>
        <div className="w-fit mb-3">
          <label>Thumbnail</label>
          <label for="userIcon" className="cursor-pointer">
            <img
              className="w-[380px] h-[266px]"
              src={imageUrl || projectImage}
              alt="user-icon"
            />
          </label>
          <input
            type="file"
            className="hidden"
            onChange={thumbnailFileInput}
            id="thumbnail"
          />
        </div>

        <label>Project Name</label>
        <input
          placeholder="Project Name"
          onChange={handleChange}
          value={createProject.projectname}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Developer</label>
        <input
          placeholder="Developer"
          onChange={handleChange}
          value={createProject.developer || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Type</label>
        <input
          placeholder="Type"
          onChange={handleChange}
          value={createProject.type || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Bedroom</label>
        <input
          placeholder="Bedroom"
          onChange={handleChange}
          value={createProject.bedroom || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Handover date</label>
        <input
          placeholder="Handover date"
          onChange={handleChange}
          value={createProject.handover || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Total Area</label>
        <input
          placeholder="Total Area"
          onChange={handleChange}
          value={createProject.totalarea || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <div className="flex gap-3 mb-4">
          <div className="w-fit mb-3">
            <label>DLD Permit Number</label>
            <label for="userIcon" className="cursor-pointer">
              <img
                className="w-[120px] h-[120px]"
                src={imageUrl || qrcode}
                alt="qr-icon"
              />
            </label>
            <input
              type="file"
              className="hidden"
              onChange={dldFileInput}
              value={createProject.dld || ""}
              id="dldcode"
            />
          </div>
        </div>

        <div className="flex gap-3 mb-4">
          <div className="w-fit mb-3">
            <label>Cover Image</label>
            <label for="userIcon" className="cursor-pointer">
              <img
                className="w-[700px] h-[266px]"
                src={imageUrl || cvrImage}
                alt="cover image"
              />
            </label>
            <input
              type="file"
              className="hidden"
              onChange={coverimageFileInput}
              value={createProject.coverimage || ""}
              id="coverImage"
            />
          </div>
        </div>

        <label>Banner title</label>
        <input
          placeholder="Banner Title"
          type="text"
          onChange={handleChange}
          value={createProject.bannertitile || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <label>Banner sub title</label>
        <input
          placeholder="Banner sub title"
          type="text"
          onChange={handleChange}
          value={createProject.bannersubtitile || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <div className="flex gap-2">
          <div className="flex gap-3 mb-4">
            <div className="w-fit mb-3">
              <label>Gallary Image 1</label>
              <label for="userIcon" className="cursor-pointer">
                <img
                  className="w-[380px] h-auto"
                  src={imageUrl || projectImage}
                  alt="gallary image"
                />
              </label>
              <input
                type="file"
                className="hidden"
                onChange={gallary1FileInput}
                value={createProject.gallary1 || ""}
                id="gallaryImage1"
              />
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-fit mb-3">
              <label>Gallary Image 2</label>
              <label for="userIcon" className="cursor-pointer">
                <img
                  className="w-[380px] h-auto"
                  src={imageUrl || projectImage}
                  alt="gallary image"
                />
              </label>
              <input
                type="file"
                className="hidden"
                onChange={gallary2FileInput}
                value={createProject.gallary2 || ""}
                id="gallaryImage2"
              />
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-fit mb-3">
              <label>Gallary Image 3</label>
              <label for="userIcon" className="cursor-pointer">
                <img
                  className="w-[380px] h-auto"
                  src={imageUrl || projectImage}
                  alt="gallary image"
                />
              </label>
              <input
                type="file"
                className="hidden"
                onChange={gallary3FileInput}
                value={createProject.gallary3 || ""}
                id="gallaryImage3"
              />
            </div>
          </div>
        </div>
        <label>Main head</label>
        <input
          placeholder="Main head"
          type="text"
          onChange={handleChange}
          value={createProject.mainhead || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <label>About</label>
        <textarea
          placeholder="About"
          type="text"
          onChange={handleChange}
          value={createProject.about || ""}
          cols="30"
          rows="5"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Nearby option1</label>
        <input
          placeholder="Nearby option1"
          type="text"
          onChange={handleChange}
          value={createProject.nearby1 || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
      </form>
      {err && <span>{err}</span>}

      <div className="mb-3 flex gap-4 justify-end">
        <button
          onClick={handleReset}
          className=" bg-[#00A3FF] hover:bg-[#6A9F43] px-[2.5rem] py-[0.4rem] rounded-md text-[#ffffff]"
        >
          Clear
        </button>
        <button
          onClick={handleSubmit}
          className=" bg-[#00A3FF] hover:bg-[#6A9F43] px-[2.5rem] py-[0.4rem] rounded-md text-[#ffffff]"
        >
          {createProject.id ? "Update" : "Submit"}
        </button>
      </div>
      <div className="mb-4">
        <ViewList {...{ createProject, setCreateProject, submit }} />
      </div>
    </div>
  );
};

export default AddProject