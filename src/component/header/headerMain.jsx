import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import dnkLogo from "../../assets/logo/dnklogo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const HeaderMain = () => {
  const [nav, setNav] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [params, setParams] = useState();
  //added sticky
   window.addEventListener("scroll", function () {
     var header = document.querySelector("header");

     header.classList.toggle("sticky", window.scrollY > 0);
   });

  //nav menu button
    const handleNav = () => {
      setNav(!nav);
  };
  
  //navigation
  const goToAboutHead = () => {
    navigate("/about")
  }
    const goToAbout = () => {
      navigate("/about");
      setNav(!nav);
  };
  
   const goToTeamHead = () => {
     navigate("/team");
  };
  
   const goToTeam = () => {
     navigate("/team");
     setNav(!nav);
  };
  const goToContactHead = () => {
    navigate("/contact")
  }
   const goToContact = () => {
     navigate("/contact");
     setNav(!nav);
  };
  
  const goToBuyHead = () => {
     navigate("/buy-project");
  };
  const goToBuy = () => {
    navigate("/buy-project");
    setNav(!nav);
  };
  const goToOffPlanHead = () => {
    navigate("/off-plan-project");
  };

  const goToOffPlan = () => {
    navigate("/off-plan-project");
    setNav(!nav);
  };

  const goToOffSellHead = () => {
    navigate("/sell-project");
  };
  const goToOffSell = () => {
    navigate("/sell-project");
    setNav(!nav);
  };

  const goToCareersHead = () => {
    navigate("/careers");
  };

  const goToCareers = () => {
    navigate("/careers");
    setNav(!nav);
  };

   const getActive = () => {
     switch (location.pathname) {
       case "/buy-project":
         return "active";
       case "/off-plan-project":
         return "active";
       case "/sell-project":
         return "active";
       case "/about":
         return "active";
       case "/team":
         return "active";
       case "/contact":
         return "active";
      
     }
   };

    return (
      <div>
        <header>
          <div className="header flex container items-center justify-between h-15 max-w-[1240px] mx-auto px-4">
            <div className="left-block flex items-center justify-center gap-4 md:gap-0">
              <div onClick={handleNav}>
                {!nav ? (
                  <IoClose className="menu-btn" />
                ) : (
                  <IoMenu className="menu-btn" />
                )}
              </div>
              <a href="/">
                <img
                  src={dnkLogo}
                  alt="DNK Logo"
                  className="site-logo h-[60px] md:h-[70px]"
                />
              </a>
            </div>
            <div className="right-block left-block flex items-center justify-center">
              <nav className="">
                <ul className="items-center justify-center gap-4 ">
                  <li
                    className={`relative inline-flex items-center justify-center group m-2 ${
                      location.pathname == "/buy-project" && "activeHead"
                    }`}
                    onClick={goToBuyHead}
                  >
                    <p className="group-hover:text-[#CE8745] transition duration-200 ease-out">
                      Buy
                    </p>
                    <span
                      class={
                        "absolute bottom-0 left-0 w-full h-0.5 bg-[#CE8745] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"
                      }
                    ></span>
                  </li>
                  <li
                    className={`relative inline-flex items-center justify-center group m-2 ${
                      location.pathname == "/off-plan-project" && "activeHead"
                    }`}
                    onClick={goToOffPlanHead}
                  >
                    <p className="group-hover:text-[#CE8745] transition duration-200 ease-out">
                      Off-Plan
                    </p>
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#CE8745] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                  </li>
                  <li
                    className={`relative inline-flex items-center justify-center group m-2 ${
                      location.pathname == "/sell-project" && "activeHead"
                    }`}
                    onClick={goToOffSellHead}
                  >
                    <p className="group-hover:text-[#CE8745] transition duration-200 ease-out">
                      Sell
                    </p>
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#CE8745] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                  </li>
                  {/* <li className="relative inline-flex items-center justify-center group m-2">
                    <p className="group-hover:text-[#CE8745] transition duration-200 ease-out">
                      Rent
                    </p>
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#CE8745] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                  </li> */}
                  <li
                    onClick={goToAboutHead}
                    className={`relative inline-flex items-center justify-center group m-2 ${
                      location.pathname == "/about" && "activeHead"
                    }`}
                  >
                    <p className="group-hover:text-[#CE8745] transition duration-200 ease-out">
                      About
                    </p>
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#CE8745] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                  </li>
                  <li
                    onClick={goToTeamHead}
                    className={`relative inline-flex items-center justify-center group m-2 ${
                      location.pathname == "/team" && "activeHead"
                    }`}
                  >
                    <p className="group-hover:text-[#CE8745] transition duration-200 ease-out">
                      Team
                    </p>
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#CE8745] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                  </li>
                  <li
                    onClick={goToCareersHead}
                    className={`relative inline-flex items-center justify-center group m-2 ${
                      location.pathname == "/careers" && "activeHead"
                    }`}
                  >
                    <p className="group-hover:text-[#CE8745] transition duration-200 ease-out">
                      Careers
                    </p>
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#CE8745] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                  </li>
                  <li
                    onClick={goToContactHead}
                    className={`relative inline-flex items-center justify-center group m-2 ${
                      location.pathname == "/contact" && "activeHead"
                    }`}
                  >
                    <p className="group-hover:text-[#CE8745] transition duration-200 ease-out">
                      Contact
                    </p>
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#CE8745] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                  </li>
                </ul>
              </nav>
              <div className="socials flex items-center justify-center">
                <ul className=" items-center justify-center gap-4 pr-2 border-r border-white hidden  md:flex">
                  <li className="group">
                    <a
                      href="https://www.facebook.com/dnkrealestate1/"
                      target="_blank"
                    >
                      <FaFacebookF className="group-hover:text-[#CE8745] text-xl  transition duration-200 ease-out" />
                    </a>
                  </li>
                  <li className="group">
                    <a href="https://www.instagram.com/dnk_re/" target="_blank">
                      <FaInstagram className="group-hover:text-[#CE8745] text-xl  transition duration-200 ease-out" />
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="https://www.linkedin.com/company/dnkrealestate/"
                      target="_blank"
                    >
                      <FaLinkedin className="group-hover:text-[#CE8745] text-xl  transition duration-200 ease-out" />
                    </a>
                  </li>
                </ul>
                <ul className="pl-2 flex items-center gap-4">
                  <li className="group">
                    <a href="tel:+971555769195">
                      <MdCall className="group-hover:text-[#CE8745] text-xl  transition duration-200 ease-out" />
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="https://wa.me/+971555769195?text=Hello,"
                      target="_blank"
                    >
                      <RiWhatsappFill className="group-hover:text-[#CE8745] text-xl  transition duration-200 ease-out" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div
          className={
            !nav
              ? "fixed left-0 top-[50px] w-[60%] bg-[#040406] h-full ease-in-out duration-500 slide-bar"
              : "fixed left-[-100%] slide-bar top-15 h-full"
          }
        >
          <ul className="uppercase p-4">
            <li
              onClick={goToBuy}
              className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]"
            >
              <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
                Buy
              </p>
            </li>
            <li
              onClick={goToOffPlan}
              className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]"
            >
              <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
                Off-Plan
              </p>
            </li>
            <li
              onClick={goToOffSell}
              className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]"
            >
              <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
                Sell
              </p>
            </li>
            {/* <li className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]">
              <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
                Rent
              </p>
            </li> */}
            <li
              onClick={goToAbout}
              className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]"
            >
              <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
                About
              </p>
            </li>
            <li
              onClick={goToTeam}
              className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]"
            >
              <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
                Team
              </p>
            </li>
            <li
              onClick={goToCareers}
              className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]"
            >
              <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
                Careers
              </p>
            </li>
            <li
              onClick={goToContact}
              className="text-white p-3 cursor-pointer group hover:bg-[#0F0F1A]"
            >
              <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
                Contact
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default HeaderMain;