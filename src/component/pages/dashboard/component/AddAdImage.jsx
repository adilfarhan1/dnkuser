import React, { useEffect, useState } from 'react'
import AdPoster from '../../../../assets/icons/AdPoster.png'
import { useProjectServices } from '../../../../services/projectServices';
import Swal from 'sweetalert2';
import { URL } from '../../../../url/axios';
import { useParams } from 'react-router-dom';

export const AddAdImage = (props) => {
  const { id } = useParams();
  const [adPoster, setAdPoster] = useState({
    image: null,
  });
  const [imageUrl, setImageURl] = useState(AdPoster);
   const [submit, setSubmit] = useState(false);
  
  const { putAd, getAd, postAdImage } = useProjectServices();


  useEffect(() => {

    fetchAd();
    
  },[]);

  const fetchAd = async () => {
    try {
      const response = await getAd();
      const adData = response.data;
      console.log("image data - ", adData);
      setAdPoster(adData);
      setImageURl(URL + adData.image);
    } catch (err) {
    console.error("Faild to fetch team details:", err);
    }
  }

  
  const handleFileInput = (e) => {
     let field = e?.target?.name;
    const file = e.target.files[0];
    setAdPoster((adPoster) => ({ ...adPoster, [field]: file }));

    setImageURl((prevState) => ({
      ...prevState,
      [field]: file? window.URL.createObjectURL(file) : prevState[field],
    }));
  };
  
  const handleSubmit =  async (e) => {
    e.preventDefault();
    try {
      // const submitData = { ...adPoster };
      console.log('ad poster data -', adPoster);
      const formdata = new FormData();
      for (const [key, value] of Object.entries(adPoster.image)) {
        console.log("form image data -", value);
        if (value instanceof File || typeof value === "string") {
          formdata.append(key, value);
        } else {
          
           Swal.fire("Failed", "Please upload image!form", "error");
           return;
        }
        console.log("form data -", formdata);
        
      }

      let response;
      if (adPoster._id) {
        // submitData._id = adPoster.id;
        response = await putAd(adPoster._id, formdata);
      } else {
        response = await postAdImage(formdata);
      }

      if (response.success) {
        Swal.fire("Success", "Successfully added/updated", "success");
        fetchAd();
      } else {
       Swal.fire("Failed", "Failed to added/updated project", "error");
      }
    } catch (err) {
      Swal.fire(
        "Failed",
        err?.response?.data?.message || "Ad poster operation failed",
        "error"
      );
    }
  }



  return (
    <div>
      <div>
        <h1 className="text-[#000] font-semibold">
          {id ? "Update" : "Add"} Advertisement Image
        </h1>
      </div>
      <form
        action="/team/add-team'"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div>
          <div>
            <label htmlFor="userIcon">
              <img
                className="w-[400px] h-[400px]"
                src={
                  imageUrl?.image ||
                  (adPoster.image ? URL + adPoster.image : AdPoster)
                }
                alt="Advertisement"
              />
            </label>
            <input
              type="file"
              className="d-none"
              name="image"
              onChange={handleFileInput}
              id="image"
            />
          </div>
          <button className=" bg-[#00A3FF] hover:bg-[#6A9F43] px-[2.5rem] py-[0.4rem] rounded-md text-[#ffffff] mt-6">
            {adPoster._id ? "Update" : "Submit"}
          </button>
          {/* {message && <p>{message}</p>} */}
        </div>
      </form>
    </div>
  );
}

export default AddAdImage