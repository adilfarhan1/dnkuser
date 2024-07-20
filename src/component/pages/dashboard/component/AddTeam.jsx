import React, { useState } from 'react'
import userProfile from "../../../../assets/icons/userProfile.svg"
import { userTeamServices } from '../../../../services/teamServices';
import Swal from 'sweetalert2';
import TeamViewList from './TeamViewList';


export const AddTeam = (props) => {
  const { imageURL, setImageURL } = props;
  const [createTeam, setCreateTeam] = useState({
    image: null,
    name: null,
    position: null,
    experience: null,
    specialization: null,
    language: null,
    email: null,
    phone: null,
    whatsapp: null,
    about: null,
  });

  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    if (e.target.value == "") {
      setCreateTeam({ ...createTeam, [e.target.name]: null });
    } else {
      setCreateTeam({ ...createTeam, [e.target.name]: e.target.value });
    }
  };

  const { postTeamList, putTeamList } = userTeamServices();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitData = {
        ...createTeam,
      };
      let response;
      if (createTeam.id)
        response = await putTeamList(createTeam.id, submitData);
      else response = await postTeamList(submitData);

      if (response.success) {
        Swal.fire("Success", "Successfully added team", "success");
        handleReset();
        setSubmit(!submit);
      } else {
        Swal.fire("Failed", "Failed to create team", "error");
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
      experience: null,
      specialization: null,
      language: null,
      email: null,
      phone: null,
      whatsapp: null,
      about: null,
    });
  };

  const handleFileInput = (e) => {
    console.log(e.target.files);
    setCreateTeam({ ...createTeam, image: e.target.files[0] });
    setImageURL(window.URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <div>
        <h1 className="text-[#000] font-semibold">Add Team</h1>
      </div>
      <form
        action="/team/add-team"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div>
          <div>
            <label for="userIcon">
              <img
                className="rounded-circle profile-block-main"
                src={imageURL || userProfile}
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
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />
          <label>Position</label>
          <input
            placeholder="Position"
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />
          <label>Year of experience</label>
          <input
            placeholder="Year of experience"
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />
          <label>Specialization</label>
          <input
            placeholder="Specialization"
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />
          <label>Language</label>
          <input
            placeholder="Language"
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />
          <label>Email</label>
          <input
            placeholder="Email"
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />

          <label>Number</label>
          <input
            placeholder="Number"
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />

          <label>Whats App Link</label>
          <input
            placeholder="Whats App Link"
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />

          <label>About</label>
          <textarea
            placeholder="About"
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
            onClick={handleSubmit}
            className=" bg-[#00A3FF] hover:bg-[#6A9F43] px-[2.5rem] py-[0.4rem] rounded-md text-[#ffffff]"
          >
            {createTeam.id ? "Update" : "Submit"}
          </button>
        </div>
      </form>
      <TeamViewList />
    </div>
  );
};

export default AddTeam