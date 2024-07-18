import React from 'react'
import asad from "../../../../assets/team-img/asad.png";
import vivek from "../../../../assets/team-img/vivek.png";
import emran from "../../../../assets/team-img/emran.png";
import ashik from "../../../../assets/team-img/ashik.png";

export const TeamList =()=> {
  return (
    <div className="w-full bg-[#040406] flex items-center justify-center">
      <div className=" container max-w-[1240px] py-5  px-4  md:py-9">
        <h1>Find your agent to find a Dream home</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {/* Asad Khan */}
          <div className="p-4">
            <div class="max-w-max bg-[#040406] cursor-pointer team-card">
              <img
                class="rounded-t-lg w-[70%] xl:w-[100%] md:w-[90%] m-auto"
                src={asad}
                alt="team image"
              />
              <div class="text-center pt-1">
                <h5 class="mb-2 text-[1rem] md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Asad Khan
                </h5>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  vice president sales
                </p>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  English, Arabic, Hindi, German
                </p>
              </div>
            </div>
          </div>
          {/* Vivek */}
          <div className="p-4">
            <div class="max-w-max bg-[#040406] cursor-pointer team-card">
              <img
                class="rounded-t-lg w-[70%] xl:w-[100%] md:w-[90%] m-auto"
                src={vivek}
                alt="team image"
              />
              <div class="text-center pt-1">
                <h5 class="mb-2 text-[1rem] md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Vivek Nair
                </h5>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  vice president sales
                </p>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  English, Arabic, Hindi, Malayalam
                </p>
              </div>
            </div>
          </div>
          {/* emran */}
          <div className="p-4">
            <div class="max-w-max bg-[#040406] cursor-pointer team-card">
              <img
                class="rounded-t-lg w-[70%] xl:w-[100%] md:w-[90%] m-auto"
                src={emran}
                alt="team image"
              />
              <div class="text-center pt-1">
                <h5 class="mb-2 text-[1rem] md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Emran Khan
                </h5>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  Sales Director
                </p>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  English, Arabic, Hindi
                </p>
              </div>
            </div>
          </div>
          {/* ashik */}
          <div className="p-4">
            <div class="max-w-max bg-[#040406] cursor-pointer team-card">
              <img
                class="rounded-t-lg w-[70%] xl:w-[100%] md:w-[90%] m-auto"
                src={ashik}
                alt="team image"
              />
              <div class="text-center pt-1">
                <h5 class="mb-2 text-[1rem] md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Ashik KC
                </h5>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  Sales Director
                </p>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  English, Hindi, German
                </p>
              </div>
            </div>
          </div>
          {/* emran */}
          <div className="p-4">
            <div class="max-w-max bg-[#040406] cursor-pointer team-card">
              <img
                class="rounded-t-lg w-[70%] xl:w-[100%] md:w-[90%] m-auto"
                src={emran}
                alt="team image"
              />
              <div class="text-center pt-1">
                <h5 class="mb-2 text-[1rem] md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Emran Khan
                </h5>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  Sales Director
                </p>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  English, Arabic, Hindi
                </p>
              </div>
            </div>
          </div>
          {/* ashik */}
          <div className="p-4">
            <div class="max-w-max bg-[#040406] cursor-pointer team-card">
              <img
                class="rounded-t-lg w-[70%] xl:w-[100%] md:w-[90%] m-auto"
                src={ashik}
                alt="team image"
              />
              <div class="text-center pt-1">
                <h5 class="mb-2 text-[1rem] md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Ashik KC
                </h5>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  Sales Director
                </p>
                <p class="m-0 font-normal text-gray-700 dark:text-gray-400">
                  English, Hindi, German
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamList