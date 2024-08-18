import React, { useEffect, useState } from 'react'
import { useProjectServices } from '../../../../services/projectServices';
import { URL } from '../../../../url/axios';
import { useNavigate } from 'react-router-dom';
import DemoImage from '../../../../assets/icons/image-demo.svg'

export const ProjectGridList = (props) => {
  const { params } = props;
  const [projectList, setProjectList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const { getProjectPublicList } = useProjectServices();
  const navigate = useNavigate();

  const statusValue = 'buy';

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
  };
  console.log(getData);

  const handleCardClick = (id) => {
    navigate(`/project-detail/${id}`);
  };

  return (
    <div className="about-section w-full bg-[#040406] flex items-center justify-center">
      <div className="container max-w-[1240px] py-5  px-4  md:py-9 relative">
        {searchedList.length > 0 ? (
          searchedList.map((data) => (
            <div className="grid grid-cols-2  md:grid-cols-3">
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
            </div>
          ))
        ) : (
          <div className="flex justify-center">
            <div>
              <h1 className="text-center m-auto text-[1.4rem]">
                No property found
              </h1>
              <p className="text-center m-auto text-[#CE8745]">
                We have many amazing property for you.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectGridList