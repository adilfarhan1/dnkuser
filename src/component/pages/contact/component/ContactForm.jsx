import React, { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { userUserServices } from '../../../../services/userServices';

export const ContactForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);
   const [loading, setLoading] = useState(false);
  const { contactData } = userUserServices();
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    let formErrors = {};
    if (!fullName) formErrors.fullName = "Full Name is required.";
    if (!email) {
      formErrors.email = "Email is required.";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) formErrors.email = "Invalid email.";
    }
    if (!phoneNumber) formErrors.phoneNumber = "Phone Number is required.";
    if (!city) formErrors.city = "City is required.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };


  const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
  };
      

  const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
        return phoneNumberPattern.test(phoneNumber);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    try {
      await contactData({
        fullName,
        email,
        phoneNumber,
        city,
      });
      alert("Email sent successfully");

      // Clear the form fields
      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setCity("");
    } catch (err) {
    console.error('Error submitting form:', err);
    alert("Failed to send email");
    } finally {
      setLoading(false)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-between mx-[0px] md:mx-[10px] mt-3 md:mt-0">
        <div>
          <input
            placeholder="Full Name*"
            type="text"
            className="w-full bg-transparent border border-[#ffffff] p-[10px] rounded  text-[#ffffff]"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && (
            <p className="error text-[0.9rem] m-0 text-[#FF0202]">
              {errors.fullName}
            </p>
          )}
          <input
            placeholder="Email Address*"
            type="text"
            className="w-full bg-transparent border border-[#ffffff] p-[10px] rounded mt-[25px] text-[#ffffff]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="error text-[0.9rem] m-0 text-[#FF0202]">
              {errors.email}
            </p>
          )}

          <div className=" phoneInput">
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
              className="w-full bg-transparent border border-[#ffffff] p-[5px] pl-0 mt-[25px] rounded text-[#ffffff]"
            />
            {errors.phoneNumber && (
              <p className="error text-[0.9rem] m-0 text-[#FF0202]">
                {errors.phoneNumber}
              </p>
            )}
          </div>
          <input
            placeholder="City"
            type="text"
            className="w-full bg-transparent border border-[#ffffff] p-[10px] rounded mt-[25px] text-[#ffffff]"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {errors.city && (
            <p className="error text-[0.9rem] m-0 text-[#FF0202]">
              {errors.city}
            </p>
          )}
        </div>
        <div>
          <button
            className="bg-[#CE8745] hover:bg-[#ffffff] hover:text-[#CE8745] w-full p-[10px] mt-[25px] rounded duration-100 flex justify-center"
            disabled={loading}
          >
            {loading ? (
              <div className="loader !w-[24px] !h-[24px]"></div>
            ) : (
              "Submit"
            )}
          </button>
          <div className="flex items-center justify-center mt-4">
            <p className="mb-0">Or contact us right now via</p>
            <a
              href="https://wa.me/+971555769195?text=Hello,"
              target="_blank"
              className="flex items-center justify-center group"
            >
              <FaWhatsapp className="text-[#CE8745] text-[1.3rem] ml-2 group-hover:text-[#6B9B2D]" />
              <p className="mb-0 !text-[#CE8745] group-hover:!text-[#6B9B2D]">
                WhatsApp
              </p>
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm