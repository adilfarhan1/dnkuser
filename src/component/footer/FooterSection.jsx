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
import { useNavigate } from 'react-router-dom';

export const FooterSection = () => {
  const [showButton, setShowButton] = useState();
  const [nav, setNav] = useState(true);
  const navigate = useNavigate();

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

  //navigation
  const goToAboutHead = () => {
    navigate("/about");
  };

  const goToTeam = () => {
    navigate("/team");
    setNav(!nav);
  };
  const goToContactHead = () => {
    navigate("/contact");
  };
 

  const goToCareers = () => {
    navigate("/careers")
  }

  const goToServices = () => {
    navigate("/services")
  }

  const goToOffPlan = () => {
    navigate("/off-plan-project");
  };

  const goToBuy = () => {
    navigate("/buy-project");
  };

  const goToSell = () => {
    navigate("/sell-project");
  };

  useEffect(() => {
    const handleScrollButtonVisiblity = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisiblity);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisiblity);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="w-full bg-[#121218] flex items-center justify-center">
        <div className="footerSection container max-w-[1240px] py-5  px-4  md:py-9">
          <div className="flex items-center justify-between footer-head">
            <img src={logo} alt="logo" />
            <div>
              <ul className="social-links">
                <li>
                  <a
                    href="https://www.facebook.com/dnkrealestate1/"
                    target="_blank"
                  >
                    <GrFacebookOption />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/dnk_re/" target="_blank">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCKH7d3Sx2dkfb4pEXXaMpFA"
                    target="_blank"
                  >
                    <FaYoutube />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/dnkrealestate/"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/+971555769195?text=Hello,"
                    target="_blank"
                  >
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
                  <a className="cursor-pointer" onClick={goToOffPlan}>
                    Off Plan Properties
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer" onClick={goToBuy}>
                    Property for Sale
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer" onClick={goToSell}>
                    Property for Sell
                  </a>
                </li>
                {/* <li>
                  <a href="" className="cursor-pointer" onClick={goToAboutHead}>
                    Property Management
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="col-span-2">
              <ul>
                <li>
                  <h5>Quick Links</h5>
                </li>
                <li>
                  <a className="cursor-pointer" onClick={goToAboutHead}>
                    About
                  </a>
                </li>
                <li>
                  <a onClick={goToServices} className="cursor-pointer">
                    Services
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer" onClick={goToTeam}>
                    Meet The Team
                  </a>
                </li>
                <li>
                  <a onClick={goToCareers} className="cursor-pointer">
                    Career
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer" onClick={goToContactHead}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* <div>
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
            </div> */}
            <div>
              <ul className="footer-connects">
                <li>
                  <h5>connect with us</h5>
                </li>
                <li>
                  <a href="tel:+971555769195">
                    <IoIosCall className="text-[1.4rem]" />
                    +971 55 576 9195
                  </a>
                </li>
                <li>
                  <a href="mailto:info@dnkre.com">
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
      {showButton && (
        <div class="scrollTop-widget">
          <div class="scrollTop animate-bounce" onClick={handleScrollTop}>
            <IoIosArrowUp className="arrow-top " />
          </div>
        </div>
      )}
    </footer>
  );
}

export default FooterSection