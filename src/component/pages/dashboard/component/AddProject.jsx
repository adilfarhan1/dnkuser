import React, { useEffect, useState } from 'react'
import userProfile from "../../../../assets/icons/userProfile.svg";
import projectImage from "../../../../assets/icons/image-demo.svg";
import ViewList from './ViewList';
import { useProjectServices } from '../../../../services/projectServices';
import { FaGlasses } from 'react-icons/fa';
import qrcode from '../../../../assets/icons/qrcode.svg'
import Swal from 'sweetalert2';
import cvrImage from '../../../../assets/icons/coverImage.svg'
import { URL } from '../../../../url/axios';

export const AddProject = (props) => {
  const [err, setErr] = useState(false)
  const initialState = {
    projectname: "",
    thumbnail: null,
    developer: "",
    type: "",
    bedroom: "",
    handover: "",
    totalarea: "",
    handover: "",
    dld: null,
    coverimage: null,
    bannertitile: "",
    bannersubtitile: "",
    gallary1: null,
    gallary2: null,
    gallary3: null,
    mainhead: "",
    about: "",
    location: "",
    nearby1: "",
    dec1: "",
    nearby2: "",
    dec2: "",
    nearby3: "",
    dec3: "",
    nearby4: "",
    dec4: "",
    status: "",
  };

  const [createProject, setCreateProject] = useState(initialState);
  const [imageUrls, setImageUrls] = useState({
    thumbnail: null,
    dld: null,
    coverimage: null,
    gallary1: null,
    gallary2: null,
    gallary3: null,
  });

  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState("");

   const handleChange = (e) => {
     if (e.target.value === "") {
       setCreateProject({ ...createProject, [e.target.name]: null });
     } else {
       setCreateProject({ ...createProject, [e.target.name]: e.target.value });
     }
   };

  const { postProjectList, putProjectList, getProjectList, deletProjectList } =
    useProjectServices();

  useEffect(() => {
    if (props.mode === "update" && props.user_id) {
      fetchProjectDetails(props.user_id);
    }
  }, [props.mode, props.user_id]);

  const fetchProjectDetails = async (id) => {
    try {
      const response = await getProjectList(id);
      setCreateProject(response.data);
      setImageUrls({
        thumbnail: response.data.imageUrl?.thumbnail || null,
        dld: response.data.imageUrl?.dld || null,
        coverimage: response.data.imageUrl?.coverimage || null,
        gallary1: response.data.imageUrl?.gallary1 || null,
        gallary2: response.data.imageUrl?.gallary2 || null,
        gallary3: response.data.imageUrl?.gallary3 || null,
      });
      console.log('images - ',imageUrls)
    } catch (err) {
      console.error("Faild to fetch project details:", err);
    }
  };

 

  const handleFileInput = (e) => {
    let field = e?.target?.name;
    console.log(" image field name-", field);
    const file = e.target.files[0]
    setCreateProject((createProject) => ({ ...createProject, [field]: file }))
     
     setImageUrls((prevState) => ({
       ...prevState,
       [field]: window.URL.createObjectURL(file),
     }));
    // setImageUrls((prevState) => ({
    //   ...prevState,
    //   [field]: file,
    // }));
    console.log('thumbnail image-',imageUrls)
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitData = { ...createProject };
      const formdata = new FormData();
      for (const [key, value] of Object.entries(submitData)) {
        // formdata.append(key, value);
        if (value instanceof File || typeof value === 'string') {
          formdata.append(key, value);
        } else {
          Swal.fire("Failed", "Please upload all images!", "error");
          return;
        }
      }
      console.log("Form -", formdata)
      // console.log("project id -", createProject);
     
      let response;
      if (createProject.id) {
        // For update, ensure that the _id field is included
        submitData._id = createProject.id;
        response = await putProjectList(createProject.id, formdata);
      } else {
        // For create, remove the _id field to allow MongoDB to generate a new one
        delete submitData._id;
        response = await postProjectList(formdata);
      }
      if (response.success) {
        Swal.fire("Success", "Successfully added/updated", "success");
        handleReset()
        setMessage("Please refresh the page");
        setSubmit(!submit);
        fetchProjectDetails();
      } else {
        Swal.fire("Failed", "Failed to added/updated project", "error");
      }
      } catch (err) {
        console.log(err)
        Swal.fire("Failed", "Failed to added/updated project", "error");
      
      }
  }

  const handleReset = () => {
    setCreateProject(initialState);
    setImageUrls({
      image: null,
      dld: null,
      coverimage: null,
      gallary1: null,
      gallary2: null,
      gallary3: null,
    });
  };


  return (
    <div>
      <div>
        <h1 className="text-[#000] font-semibold">Add Project</h1>
      </div>
      <form
        action="/task/add-task"
        method="POST"
        enctype="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="w-fit mb-3">
          <label>Thumbnail</label>
          <label htmlFor="thumbnail" className="cursor-pointer">
            <img
              className="w-[380px] h-[266px]"
              src={
                imageUrls.thumbnail ||
                (createProject.thumbnail
                  ? URL + createProject.thumbnail
                  : projectImage)
              }
              alt="user-icon"
            />
          </label>
          <input
            type="file"
            placeholder="choose an thumbnail to upload"
            className=""
            name="thumbnail"
            onChange={handleFileInput}
            id="thumbnail"
          />
        </div>
        <label>Status</label>
        <select
          placeholder="Status"
          onChange={handleChange}
          name="status"
          required
          value={createProject.status || ""}
          type="select"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        >
          <option value={""}></option>
          <option value={"buy"}>Buy</option>
          <option value={"off-plan"}>Off-Plan</option>
          {/* <option value={"sell"}>Sell</option> */}
          <option value={"rent"}>Rent</option>
        </select>

        <label>Project Name</label>
        <input
          placeholder="Project Name"
          onChange={handleChange}
          name="projectname"
          value={createProject.projectname || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Developer</label>
        <input
          placeholder="Developer"
          onChange={handleChange}
          name="developer"
          value={createProject.developer || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Type</label>
        <input
          placeholder="Type"
          onChange={handleChange}
          name="type"
          value={createProject.type || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Bedroom</label>
        <input
          placeholder="Bedroom"
          onChange={handleChange}
          name="bedroom"
          value={createProject.bedroom || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Handover date</label>
        <input
          placeholder="Handover date"
          onChange={handleChange}
          name="handover"
          value={createProject.handover || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Total Area</label>
        <input
          placeholder="Total Area"
          onChange={handleChange}
          name="totalarea"
          value={createProject.totalarea || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <div className="flex gap-3 mb-4">
          <div className="w-fit mb-3">
            <label>DLD Permit Number</label>
            <label htmlFor="dldqr" className="cursor-pointer">
              <img
                className="w-[120px] h-[120px]"
                src={
                  imageUrls.dld ||
                  (createProject.dld ? URL + createProject.dld : qrcode)
                }
                alt="qr-icon"
              />
            </label>
            <input
              type="file"
              className=""
              onChange={handleFileInput}
              id="dldcode"
              name="dld"
            />
          </div>
        </div>

        <div className="flex gap-3 mb-4">
          <div className="w-fit mb-3">
            <label>Cover Image</label>
            <label htmlFor="coverImage" className="cursor-pointer">
              <img
                className="w-[700px] h-[266px]"
                src={
                  imageUrls?.coverimage ||
                  (createProject.coverimage
                    ? URL + createProject.coverimage
                    : cvrImage)
                }
                alt="cover image"
              />
            </label>
            <input
              type="file"
              className=""
              onChange={handleFileInput}
              id="coverImage"
              name="coverimage"
            />
          </div>
        </div>

        <label>Banner title</label>
        <input
          placeholder="Banner Title"
          type="text"
          name="bannertitile"
          onChange={handleChange}
          value={createProject.bannertitile || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <label>Banner sub title</label>
        <input
          placeholder="Banner sub title"
          type="text"
          name="bannersubtitile"
          onChange={handleChange}
          value={createProject.bannersubtitile || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <div className="flex gap-2">
          <div className="flex gap-3 mb-4">
            <div className="w-fit mb-3">
              <label>Gallary Image 1</label>
              <label htmlFor="Gallary" className="cursor-pointer">
                <img
                  className="w-[380px] h-auto"
                  src={
                    imageUrls.gallary1 ||
                    (createProject.gallary1
                      ? URL + createProject.gallary1
                      : projectImage)
                  }
                  alt="gallary image"
                />
              </label>
              <input
                type="file"
                className=""
                onChange={handleFileInput}
                id="gallaryImage1"
                name="gallary1"
              />
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-fit mb-3">
              <label>Gallary Image 2</label>
              <label htmlFor="gallary" className="cursor-pointer">
                <img
                  className="w-[380px] h-auto"
                  src={
                    imageUrls.gallary2 ||
                    (createProject.gallary2
                      ? URL + createProject.gallary2
                      : projectImage)
                  }
                  alt="gallary image"
                />
              </label>
              <input
                type="file"
                className=""
                onChange={handleFileInput}
                id="gallaryImage2"
                name="gallary2"
              />
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-fit mb-3">
              <label>Gallary Image 3</label>
              <label htmlFor="gallary" className="cursor-pointer">
                <img
                  className="w-[380px] h-auto"
                  src={
                    imageUrls.gallary3 ||
                    (createProject.gallary3
                      ? URL + createProject.gallary3
                      : projectImage)
                  }
                  alt="gallary image"
                />
              </label>
              <input
                type="file"
                className=""
                onChange={handleFileInput}
                id="gallaryImage3"
                name="gallary3"
              />
            </div>
          </div>
        </div>
        <label>Main head</label>
        <input
          placeholder="Main head"
          type="text"
          name="mainhead"
          onChange={handleChange}
          value={createProject.mainhead || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <label>About</label>
        <textarea
          placeholder="About"
          type="text"
          name="about"
          onChange={handleChange}
          value={createProject.about || ""}
          cols="30"
          rows="5"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <label>Location</label>
        <input
          placeholder="Google map embed a map src= link "
          type="text"
          name="location"
          onChange={handleChange}
          value={createProject.location || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label>Nearby option1</label>
            <input
              placeholder="eg: School"
              type="text"
              name="nearby1"
              onChange={handleChange}
              value={createProject.nearby1 || ""}
              class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
            />
          </div>
          <div className="col-span-2">
            <label>Nearby option1 Description</label>
            <input
              placeholder="eg: MES School Road,  Uptown Motor CityDistance:  2.59 km"
              type="text"
              name="dec1"
              onChange={handleChange}
              value={createProject.dec1 || ""}
              class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label>Nearby option2</label>
            <input
              placeholder="eg: School"
              type="text"
              name="nearby2"
              onChange={handleChange}
              value={createProject.nearby2 || ""}
              class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
            />
          </div>
          <div className="col-span-2">
            <label>Nearby option2 Description</label>
            <input
              placeholder="eg: MES School Road,  Uptown Motor CityDistance:  2.59 km"
              type="text"
              name="dec2"
              onChange={handleChange}
              value={createProject.dec2 || ""}
              class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label>Nearby option3</label>
            <input
              placeholder="eg: School"
              type="text"
              name="nearby3"
              onChange={handleChange}
              value={createProject.nearby3 || ""}
              class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
            />
          </div>
          <div className="col-span-2">
            <label>Nearby option3 Description</label>
            <input
              placeholder="eg: MES School Road,  Uptown Motor CityDistance:  2.59 km"
              type="text"
              name="dec3"
              onChange={handleChange}
              value={createProject.dec3 || ""}
              class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label>Nearby option4</label>
            <input
              placeholder="eg: School"
              type="text"
              name="nearby4"
              onChange={handleChange}
              value={createProject.nearby4 || ""}
              class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
            />
          </div>
          <div className="col-span-2">
            <label>Nearby option4 Description</label>
            <input
              placeholder="eg: MES School Road,  Uptown Motor CityDistance:  2.59 km"
              type="text"
              name="dec4"
              onChange={handleChange}
              value={createProject.dec4 || ""}
              class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
            />
          </div>
        </div>
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
        {message && <p>{message}</p>}
      </div>
      <div className="mb-4">
        <ViewList {...{ createProject, setCreateProject, submit }} />
      </div>
    </div>
  );
};

export default AddProject;