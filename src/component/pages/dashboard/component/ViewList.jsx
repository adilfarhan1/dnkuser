import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import { useProjectServices } from '../../../../services/projectServices';



export const ViewList = (props) => {
    const { createProject, setCreateProject, submit, params } = props; 
    const [projectList, setProjectList] = useState([])
    const [searchedList, setSearchedList] = useState([])
    const { getProjectList, putProjectList } = useProjectServices()

    useEffect(() => {
      let tempList = projectList
      if (params !== 'allProject' && params) {
        tempList = projectList.filter((data) => {
          return data.status == params;
        });
      } setSearchedList(tempList);
    }, [params, projectList])

    useEffect(() => {
        getData()
    },[submit])
    
    const location = useLocation()

    const getData = async () => {
        try {
            const response = await getProjectList()
            if (response.success)
                setProjectList(response.data)
        } catch (err) {
        }
    }

    const handleEdit = (data) => {
        setCreateProject({
          id: data._id,
          projectname: data.projectname,
          image: data.image,
          developer: data.developer,
          type: data.type,
          bedroom: data.bedroom,
          handover: data.handover,
          totalarea: data.totalarea,
          handover: data.handover,
          dld: data.dld,
          coverimage: data.coverimage,
          bannertitile: data.bannertitile,
          bannersubtitile: data.bannersubtitile,
          gallary1: data.gallary1,
          gallary2: data.gallary2,
          gallary3: data.gallary2,
          mainhead: data.mainhead,
          about: data.about,
          location: data.location,
          nearby1: data.nearby1,
          dec1: data.dec1,
          nearby2: data.nearby2,
          dec2: data.dec2,
          nearby3: data.nearby3,
          dec3: data.dec3,
          nearby4: data.nearby4,
          dec4: data.dec4,
          status: data.status,
        });
  }

    return (
      <div>
        <table className="w-full border overflow-auto">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Developer</th>
              <th>Type</th>
              <th>Stutus</th>
              {location.pathname == "/dashboard/addProject" && <th></th>}
            </tr>
          </thead>
          <tbody>
            {searchedList.length > 0 ? (
              searchedList.map((data, i) => (
                <tr>
                  <td>{data.projectname}</td>
                  <td>{data.developer}</td>
                  <td>{data.type}</td>
                  <td>{data.status}</td>
                  {location.pathname == "/dashboard/addProject" && (
                    <td className='text-center'>
                      <MdModeEditOutline onClick={()=>handleEdit(data)} className="text-[1rem] text-center m-auto cursor-pointer" />
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <div className='flex justify-center'>
                <p className='text-center m-auto'>Not task created yet</p>
              </div>
            )}
          </tbody>
        </table>
      </div>
    );
}

export default ViewList