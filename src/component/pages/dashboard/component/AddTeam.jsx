import React from 'react'
import userProfile from "../../../../assets/icons/userProfile.svg"

export const AddTeam = () => {
    

  return (
    <div>
      <div>
        <h1 className="text-[#000] font-semibold">Add Team</h1>
      </div>
      <div>
        <div>
          <label for="userIcon">
            <img
              className="rounded-circle profile-block-main"
              src={ userProfile}
              alt="user-icon"
            />
          </label>
          <input
            type="file"
            className="d-none"
            // onChange={handleFileInput}
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
    </div>
  );
}

export default AddTeam