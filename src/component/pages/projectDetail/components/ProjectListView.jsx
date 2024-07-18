import React, { useEffect, useState } from 'react'
import { useProjectServices } from '../../../../services/projectServices'

export const ProjectListView = (props) => {
    const { setPeojectDataPass } = props
    const [projectList, setProjectList] = useState([])
    const [searchedList, setSearchedList] = useState([])
    const { getProjectList } = useProjectServices()
    
    useEffect(() => {
        let tempList = projectList
        setProjectList(tempList)
    }, [params, projectList])

    useEffect(() => {
        getData()
    })
    const getData = async () => {
        try {
            const response = await getProjectList()
            if (response.success)
                getProjectList(response.data)
        } catch (err) {
        }
    }

    return (
      <div>
        {searchedList.length > 0 ? (
          searchedList.map((data, i) => (
            <div className="p-4">
              <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#040406] cursor-pointer">
                <img
                  class="rounded-t-lg"
                  src={luxuryVilla01}
                  alt="property image"
                />
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
            <p className="text-center m-auto">No project yet</p>
          </div>
        )}
      </div>
    );
}

export default ProjectListView