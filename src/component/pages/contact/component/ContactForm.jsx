import React, { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const ContactForm = () => {
      const [PhoneNumber, setPhoneNuber] = useState("");
      const [valid, setValid] = useState(true);

      const handleChange = (value) => {
        setPhoneNuber(value);
        setValid(validatePhoneNumber(value));
      };

      const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(phoneNumber);
      };
  return (
    <form action="">
      <div className="flex flex-col justify-between mx-[0px] md:mx-[10px] mt-3 md:mt-0">
        <div>
          <input
            placeholder="Full Name*"
            type="text"
            className="w-full bg-[#040406] border border-[#ffffff] p-[10px] rounded mb-[25px]"
          />
          <input
            placeholder="Email Address*"
            type="text"
            className="w-full bg-[#040406] border border-[#ffffff] p-[10px] rounded mb-[25px] "
          />
          <div className="mb-[25px] phoneInput">
            <PhoneInput
              placeholder="Mobile Number*"
              type="text"
              country={"ae"}
              value={PhoneNumber}
              onChange={handleChange}
              enableAreaCodeStretch
              inputProps={{
                required: true,
              }}
              className="w-full bg-[#040406] border border-[#ffffff] p-[5px] pl-0 rounded text-[#ffffff]"
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
            className="w-full bg-[#040406] border border-[#ffffff] p-[10px] rounded mb-[25px]"
          />
        </div>
        <div>
          <button className="bg-[#CE8745] hover:bg-[#ffffff] hover:text-[#CE8745] w-full p-[10px] rounded duration-100">
            Submit
          </button>
          <div className="flex items-center justify-center mt-4">
            <p className="mb-0">Or contact us right now via</p>
            <a href="" className="flex items-center justify-center group">
              <FaWhatsapp className="text-[#CE8745] text-[1.3rem] ml-2 group-hover:text-[#6B9B2D]" />
              <p className="mb-0 text-[#CE8745] group-hover:text-[#6B9B2D]">
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