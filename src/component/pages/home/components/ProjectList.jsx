import React, { useEffect, useState } from 'react'
import DemoImage from '../../../../assets/icons/image-demo.svg'
import riverSide01 from "../../../../assets/project-img/river-side.png";
import binghattiHills01 from "../../../../assets/project-img/binghatti-hills.png";
import Slider from "react-slick";
import { useProjectServices } from '../../../../services/projectServices';
import { URL } from '../../../../url/axios';
import { useNavigate } from 'react-router-dom';


export const ProjectList = (props) => {
    const { params } = props;
    const [searchedList, setSearchedList] = useState([]);
    const [projectList, setProjectList] = useState([]);
  const { getProjectPublicList } = useProjectServices();
  const navigate = useNavigate();

  const statusValue = 'off-plan'

    useEffect(() => {
        const tempList = projectList.filter((data) => data.status === statusValue);
      setSearchedList(tempList);
      
    }, [params, projectList]);

  useEffect(() => {
    getData();
  }, []);

    const getData = async () => {
        try {
            const response = await getProjectPublicList();
            if (response.success) {
              setProjectList(response.data);
              setSearchedList(
                response.data.filter((data) => data.status === statusValue)
              );
            }

        } catch (err) {
            console.error("Failed to fatch project list", err);
        }
    }

    const handleCardClick = (id) => {
        navigate(`/project-detail/${id}`);
    }

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 992,

          settings: {
            slidesToShow: 2,

            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 640,

          settings: {
            slidesToShow: 1,

            slidesToScroll: 1,
          },
        },
      ],
    };
  return (
    <div>
      <Slider {...settings}>
        {searchedList.length > 0 ? (
          searchedList.map((data) => (
            <div
              className="p-4"
              key={data._id}
              onClick={() => handleCardClick(data._id)}
            >
              <div class="max-w-max overflow-hidden  border border-[#ffff] rounded-[10px] shadow bg-[#040406] cursor-pointer">
                <div
                  style={{
                    backgroundImage: `url(${
                      data?.thumbnail ? URL + data.thumbnail : DemoImage
                    })`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    minWidth: "380px",
                    height: "266px",
                  }}
                ></div>
                <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.projectname}
                  </h5>
                  <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                    {data.handover}
                  </p>
                  <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                    {data.developer}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center">
            <p className="text-center m-auto">No projects created yet</p>
          </div>
        )}

        {/* <div className="p-4">
          <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#040406] cursor-pointer">
            <img class="rounded-t-lg" src={riverSide01} alt="property image" />
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                River Side
              </h5>
              <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                Handover in 2027
              </p>
              <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                Damac
              </p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#040406] cursor-pointer">
            <img
              class="rounded-t-lg"
              src={binghattiHills01}
              alt="property image"
            />
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Binghatti Hills
              </h5>
              <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                Handover in 2026
              </p>
              <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                Binghatti
              </p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#040406] cursor-pointer">
            <img
              class="rounded-t-lg"
              src={luxuryVilla01}
              alt="property image"
            />
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Luxury Villas
              </h5>
              <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                Handover in 2027
              </p>
              <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                Damac
              </p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#040406] cursor-pointer">
            <img class="rounded-t-lg" src={riverSide01} alt="property image" />
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                River Side
              </h5>
              <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                Handover in 2027
              </p>
              <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                Damac
              </p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#040406] cursor-pointer">
            <img
              class="rounded-t-lg"
              src={binghattiHills01}
              alt="property image"
            />
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Binghatti Hills
              </h5>
              <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                Handover in 2026
              </p>
              <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                Binghatti
              </p>
            </div>
          </div>
        </div> */}
      </Slider>
    </div>
  );
}

export default ProjectList