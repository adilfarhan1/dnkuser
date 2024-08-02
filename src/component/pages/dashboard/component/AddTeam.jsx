import React, { useState } from 'react'
import userProfile from "../../../../assets/icons/userProfile.svg"
import { userTeamServices } from '../../../../services/teamServices';
import Swal from 'sweetalert2';
import TeamViewList from './TeamViewList';


export const AddTeam = (props) => {
  const { imageUrl, setImageUrl } = props;
  const [createTeam, setCreateTeam] = useState({
    image: null,
    name: "",
    position: "",
    experience: "",
    specialization: "",
    language: "",
    email: "",
    phone: "",
    whatsapp: "",
    about: "",
  });

  const [submit, setSubmit] = useState(false);

  // const handleChange = (e) => {
  //   if (e.target.value == "") {
  //     setCreateTeam({ ...createTeam, [e.target.name]: null });
  //   } else {
  //     setCreateTeam({ ...createTeam, [e.target.name]: e.target.value });
  //   }
  // };

  const handleChange = (e) => {
    setCreateTeam({
      ...createTeam,
      [e.target.name]: e.target.value == '' ? null : e.target.value,
    });
  };

  const { postTeamList, putTeamList } = userTeamServices();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const submitData = {
      //   ...createTeam,
      // };
      // let response;
      // if (createTeam.id)
      //   response = await putTeamList(createTeam.id, submitData);
      // else response = await postTeamList(submitData);
      const formData = new FormData();
      for (const key in createTeam) {
        formData.append(key, createTeam[key]);
      }

      console.log("Form Data: ", createTeam); // Log form data for debugging

      let response;
      if (createTeam.id) {
        response = await putTeamList(createTeam.id, formData);
      } else {
        if (!createTeam.name || !createTeam.position) {
          Swal.fire(
            "Validation Error",
            "Name and Position are required fields",
            "error"
          );
          return;
        }
        response = await postTeamList(formData);
      }

      if (response.success) {
        Swal.fire("Success", "Successfully added team", "success");
        handleReset();
        setSubmit(!submit);
      } else {
        Swal.fire("Failed", response.message || "Failed to create team", "error");
      }
    } catch (err) {
      console.log(err);
      Swal.fire("Failed", "Failed to create team", "error");
    }
  };
  const handleReset = () => {
    setCreateTeam({
      image: null,
      name: null,
      position: null,
      experience: '',
      specialization: '',
      language: '',
      email: '',
      phone: '',
      whatsapp: '',
      about: '',
    });
    if (setImageUrl) {
      setImageUrl(null)
    }
  };

  const handleFileInput = (e) => {
    setCreateTeam({ ...createTeam, image: e.target.files[0] });
    if (setImageUrl) {
    setImageUrl(window.URL.createObjectURL(e.target.files[0]));
    }
    
  };

  return (
    <div>
      <div>
        <h1 className="text-[#000] font-semibold">Add Team</h1>
      </div>
      <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="userIcon">
              <img
                className="profile-block-main"
                src={imageUrl || userProfile}
                alt="user-icon"
              />
            </label>
            <input
              type="file"
              className="d-none"
              onChange={handleFileInput}
              id="userIcon"
            />
          </div>
          <label>Full Name</label>
          <input
            placeholder="Full Name"
            onChange={handleChange}
            name="name"
            value={createTeam.name || ""}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />
          <label>Position</label>
          <input
            placeholder="Position"
            onChange={handleChange}
            name="position"
            value={createTeam.position || ""}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />
          <label>Year of experience</label>
          <input
            placeholder="Year of experience"
            onChange={handleChange}
            name="experience"
            value={createTeam.experience || ""}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />
          <label>Specialization</label>
          <input
            placeholder="Specialization"
            onChange={handleChange}
            name="specialization"
            value={createTeam.specialization || ""}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />
          <label>Language</label>
          <input
            placeholder="Language"
            onChange={handleChange}
            name="language"
            value={createTeam.language || ""}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />
          <label>Email</label>
          <input
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={createTeam.email || ""}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />

          <label>Number</label>
          <input
            placeholder="Number"
            onChange={handleChange}
            name="phone"
            value={createTeam.phone}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />

          <label>Whats App Link</label>
          <input
            placeholder="Whats App Link"
            onChange={handleChange}
            name="whatsapp"
            value={createTeam.whatsapp || ""}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />

          <label>About</label>
          <textarea
            placeholder="About"
            onChange={handleChange}
            name="about"
            value={createTeam.about || ""}
            type=""
            cols="30"
            rows="5"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />
        </div>
        <div className="mb-3 flex gap-4 justify-end">
          <button
            onClick={handleReset}
            className=" bg-[#00A3FF] hover:bg-[#6A9F43] px-[2.5rem] py-[0.4rem] rounded-md text-[#ffffff]"
          >
            Clear
          </button>
          <button
            type="submit"
            // onClick={handleSubmit}
            className=" bg-[#00A3FF] hover:bg-[#6A9F43] px-[2.5rem] py-[0.4rem] rounded-md text-[#ffffff]"
          >
            {createTeam.id ? "Update" : "Submit"}
          </button>
        </div>
      </form>
      <TeamViewList {...{ createTeam, setCreateTeam, submit }} />
    </div>
  );
};

export default AddTeam