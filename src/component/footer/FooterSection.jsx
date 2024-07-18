import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo/dnklogo.svg";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

export const FooterSection = () => {

  const [showButton, setShowButton] = useState();

  // const toggleVisible = () => {
  //   const scrolled = document.documentElement.scrollTop;
  //   if (scrolled > 300) {
  //     setVisible(true)
  //   } else if (scrolled <= 300) {
  //     setVisible(false)
  //   }
  // }
  
  // const scrollTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   })
  // }

  // window.addEventListener('scroll', toggleVisible)
  
  useEffect(() => {
    const handleScrollButtonVisiblity = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    }
    window.addEventListener('scroll', handleScrollButtonVisiblity)
    
    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisiblity);
    }
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

 

  return (
    <footer>
      <div className="w-full bg-[#121218] flex items-center justify-center">
        <div className="footerSection container max-w-[1240px] py-5  px-4  md:py-9">
          <div className="flex items-center justify-between footer-head">
            <img src={logo} alt="logo" />
            <div>
              <ul className="social-links">
                <li>
                  <a href="">
                    <GrFacebookOption />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaYoutube />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="">
                    <IoLogoWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-body grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-7">
            <div>
              <ul>
                <li>
                  <h5>Popular Search</h5>
                </li>
                <li>
                  <a href="">Property for Rent</a>
                </li>
                <li>
                  <a href="">Property for Sale</a>
                </li>
                <li>
                  <a href="">Off Plan Properties</a>
                </li>
                <li>
                  <a href="">Property Management</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <h5>Quick Links</h5>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Meet The Team</a>
                </li>
                <li>
                  <a href="">Career</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <h5>Developers</h5>
                </li>
                <li>
                  <a href="">Emaar</a>
                </li>
                <li>
                  <a href="">Damac</a>
                </li>
                <li>
                  <a href="">Sobha</a>
                </li>
                <li>
                  <a href="">Aldar</a>
                </li>
                <li>
                  <a href="">Meraas</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="footer-connects">
                <li>
                  <h5>connect with us</h5>
                </li>
                <li>
                  <a href="">
                    <IoIosCall className="text-[1.4rem]" />
                    +971 4 554 6904
                  </a>
                </li>
                <li>
                  <a href="">
                    <MdEmail className="text-[1.2rem] mr-[3px]" />
                    info@dnkre.com
                  </a>
                </li>
                <li>
                  <a href="">
                    <MdLocationOn className="text-[1.6rem] mr-[3px]" />
                    Office 2602 Silver Tower Business Bay, Dubai.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#000000] w-full relative flex items-center justify-center">
        <p className="text-[#ffffff] text-[0.6rem] md:text-[0.7rem]  p-3 m-0 tracking-wider">
          © Copyright 2022.All Rights Reserved | designed by RNK Real estate
        </p>
      </div>
      {showButton && <div class="scrollTop-widget">
        <div class="scrollTop animate-bounce" onClick={handleScrollTop}>
          <IoIosArrowUp className="arrow-top " />
        </div>
      </div>}
    </footer>
  );
}

export default FooterSection