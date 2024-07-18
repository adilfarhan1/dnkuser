import React from 'react'
import avatar from '../../../../assets/icons/avatar.svg'
import quotes from '../../../../assets/icons/quotes.svg'
import quotes01 from "../../../../assets/icons/quotes01.svg";
import Slider from 'react-slick';

export const ReviewSection = () => {
   var settings = {
     dots: true,
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     speed: 1000,
     autoplaySpeed: 3000,
     cssEase: "linear",
   };
  
  return (
    <div className="w-full bg-[#040406] flex items-center justify-center px-4 xl:px-0">
      <div className="ReviewSection container max-w-[1240px] py-5  px-4  md:py-9">
        <h1 className="m-auto w-fit">What Our Clients Say</h1>
        <p className="text-center m-auto w-[100%] md:w-[80%]">
          We would love to learn what our satisfied clients have to say about
          our services.
        </p>
        <Slider {...settings}>
          <div className="p-4">
            <div>
              <div className="py-5">
                <img
                  src={avatar}
                  alt="profile"
                  className="rounded-full m-auto w-[80px] h-[80px]"
                />
              </div>
              <div className="relative">
                <img
                  src={quotes}
                  alt=""
                  className="absolute left-0 top-0 animate-wiggle animate-once z-0 opacity-25 md:opacity-100"
                />
                <p className="text-center m-auto w-[100%] md:w-[80%] mb-4 relative z-40">
                  Wow! Made buying a Apartment such a breeze! I was new to home
                  buying, and have heard horror stories from friends and family
                  about terrible agents. DNK Real Estate and Mr Dann Leslie was
                  professional and personal! He never made me feel uncomfortable
                  and helped me every step of the way. Highly Recommended
                </p>
                <img
                  src={quotes01}
                  alt=""
                  className="absolute right-0 bottom-0 animate-wiggle z-0 opacity-25 md:opacity-100"
                />
              </div>

              <div className="relative m-auto w-[270px]">
                <span className="h-[0.1rem] w-[270px] bg-white m-auto rounded absolute"></span>
              </div>

              <h4 className="m-auto text-white text-[1rem] w-fit pt-4">
                Sagar Rahuja
              </h4>
              <p className="text-[0.8rem] m-auto w-fit">
                Director of Company name
              </p>
            </div>
          </div>

          <div className="p-4">
            <div>
              <div className="py-5">
                <img
                  src={avatar}
                  alt="profile"
                  className="rounded-full m-auto w-[80px] h-[80px]"
                />
              </div>
              <div className="relative">
                <img
                  src={quotes}
                  alt=""
                  className="absolute left-0 top-0 animate-wiggle animate-once z-0 opacity-25 md:opacity-100"
                />
                <p className="text-center m-auto w-[100%] md:w-[80%] mb-4 relative z-40">
                  I was searching for some good property from a long time also
                  some good dealers to deal with this. Fortunately, I had a word
                  with one of the professional agents of DNK Real Estate and the
                  way he was guiding me to get the best property within my
                  budget was so so professional. Special thanks to the team
                  their support and help made me to buy my own apartment in
                  Dubai. Thank you once again DNK Real Estate
                </p>
                <img
                  src={quotes01}
                  alt=""
                  className="absolute right-0 bottom-0 animate-wiggle z-0 opacity-25 md:opacity-100"
                />
              </div>

              <div className="relative m-auto w-[270px]">
                <span className="h-[0.1rem] w-[270px] bg-white m-auto rounded absolute"></span>
              </div>

              <h4 className="m-auto text-white text-[1rem] w-fit pt-4">
                Christopher Richard
              </h4>
              <p className="text-[0.8rem] m-auto w-fit">
                Director of Company name
              </p>
            </div>
          </div>

          <div className="p-4">
            <div>
              <div className="py-5">
                <img
                  src={avatar}
                  alt="profile"
                  className="rounded-full m-auto w-[80px] h-[80px]"
                />
              </div>
              <div className="relative">
                <img
                  src={quotes}
                  alt=""
                  className="absolute left-0 top-0 animate-wiggle animate-once z-0 opacity-25 md:opacity-100"
                />
                <p className="text-center m-auto w-[100%] md:w-[80%] mb-4 relative z-40">
                  First of all thankyou so much DNK Real Estate you made my
                  dream come true. Myself & my wife was planning to buy a luxury
                  villa in Dubai. We had a word with many of the agents, but the
                  level of transparency DNK Real Estate had with me was so
                  helpful for me to get my Villa booked in Dubai. I personally
                  suggest DNK Real Estate for trust, transparency and support if
                  you are looking forward to getting your Villa or Apartments in
                  Dubai.
                </p>
                <img
                  src={quotes01}
                  alt=""
                  className="absolute right-0 bottom-0 animate-wiggle z-0 opacity-25 md:opacity-100"
                />
              </div>

              <div className="relative m-auto w-[270px]">
                <span className="h-[0.1rem] w-[270px] bg-white m-auto rounded absolute"></span>
              </div>

              <h4 className="m-auto text-white text-[1rem] w-fit pt-4">
                Adil Farhan
              </h4>
              <p className="text-[0.8rem] m-auto w-fit">CEO of Company name</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ReviewSection