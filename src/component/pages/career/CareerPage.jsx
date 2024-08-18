import React, { useState } from 'react'
import BannerCareer from './component/BannerCareer';
import { FaWhatsapp } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import PartnerSection from '../home/components/PartnerSection';
import { userUserServices } from '../../../services/userServices';


export const CareerPage = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [fullName, setFullName] = useState("");
    const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState(null)
  const [valid, setValid] = useState(true);
  const [loading, setLoading] = useState(false);
    const { careerMail } = userUserServices();

    const handleChange = (value) => {
      setPhoneNumber(value);
      setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber) => {
      const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
      return phoneNumberPattern.test(phoneNumber);
  };
  
  const handleFileInput = (e) => {
    setCv(e.target.files[0]);
  }
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("phoneNumber", phoneNumber);
      formData.append("city", city);
      if (cv) {
        formData.append("cv", cv);
      }

      const response = await careerMail(formData);
      alert("Email sent successfully");

      //Clear the form fields
      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setCity("");
      setCv(null);
    } catch (err) {
      console.error("Error submitting form:", err);
    } finally {
      setLoading(false)
    }
      
    }
  return (
    <div>
      <BannerCareer />
      <div className="about-section w-full bg-[#040406] flex items-center justify-center">
        <div className="container max-w-[1240px] py-5  px-4  md:py-9 relative">
          <h1 className="m-auto w-fit text-center">
            Build a career in an innovative real estate agency
          </h1>
          <p className="text-center m-auto w-[100%] md:w-[80%]">
            Welcome to DNK Real Estate, your trusted partner in Dubai’s vibrant
            real estate market. We are a licensed real estate brokerage company
            headquartered in the dynamic city of Dubai, operating under the
            regulatory authority of the Dubai Real Estate. With nearly two
            decades of experience in Dubai’s ever-evolving real estate
            landscape, we have witnessed its growth and transformation, and we
            are here to guide you through every step of your real estate
            journey.
          </p>

          <div className="border border-[#ffff] rounded-[10px] shadow bg-[#121218] group m-4 mt-14 py-8 px-9">
            <div>
              <h1 className="m-auto w-fit text-center">Send resume</h1>
              <p className="text-center m-auto w-[100%] mb-7">
                Let Us Know About Your Experience With Us
              </p>
              <div className="">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col justify-between mx-[0px] md:mx-[10px] mt-3 md:mt-0">
                    <div className="grid  md:grid-cols-2 gap-3">
                      <input
                        placeholder="Full Name*"
                        type="text"
                        className="w-full bg-transparent border border-[#ffffff] p-[10px] rounded mb-[25px] text-[#ffffff]"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                      <input
                        placeholder="Email Address*"
                        type="text"
                        className="w-full bg-transparent border border-[#ffffff] p-[10px] rounded mb-[25px] text-[#ffffff]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div className="mb-[25px] phoneInput">
                        <PhoneInput
                          placeholder="Mobile Number*"
                          type="text"
                          country={"ae"}
                          value={phoneNumber}
                          onChange={handleChange}
                          enableAreaCodeStretch
                          inputProps={{
                            required: true,
                          }}
                          className="w-full bg-transparent border border-[#ffffff] p-[5px] pl-0 rounded text-[#ffffff] text-[#ffffff]"
                        />
                        {/* {!valid && (
                  <p className="text-[0.8rem] text-[#ff0000] mb-0">
                    Please enter a valid phone number!
                  </p>
                )} */}
                      </div>
                      <input
                        placeholder="City"
                        type="text"
                        className="w-full bg-transparent border border-[#ffffff] p-[10px] rounded mb-[25px] text-[#ffffff]"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <label htmlFor="" className="text-[#ffffff]">
                      Attach CV
                    </label>
                    <input
                      type="file"
                      className="w-full bg-transparent border border-[#ffffff] p-[10px] rounded mb-[25px] text-[#ffffff]"
                      onChange={handleFileInput}
                    />
                    <div>
                      <button
                        className="bg-[#CE8745] hover:bg-[#ffffff] hover:text-[#CE8745] w-full p-[10px] rounded duration-100 flex justify-center"
                        disabled={loading}
                      >
                        {loading ? (
                          <div className="loader !w-[24px] !h-[24px]"></div>
                        ) : (
                          "Submit"
                        )}
                      </button>
                      <div className="flex items-center justify-center mt-4">
                        <p className="mb-0 text-center m-auto w-[100%] md:w-[80%]">
                          DNK Real Estate is always interested in motivated
                          people on its team. Send your CV and we will contact
                          you if we find a suitable position.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PartnerSection />
    </div>
  );
}

export default CareerPage