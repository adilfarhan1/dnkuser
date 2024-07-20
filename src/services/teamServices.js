import axiosPrivate from "../url/axios";

export const userTeamServices = () => {
    
    const postTeamList = async (formdata) => {
        const response = await axiosPrivate.post('/team/add-team', formdata, {
            headers:{"Content-Type":'multipart/from-data'}
        })
        return response.data
    }

    const putTeamList = async (id, data) => {
        const response = await axiosPrivate.put('/team/updateteam/' + id, data)
        return response.data
    }
    const getTeamList = async (id, data) => {
        const response = await axiosPrivate.get('/team/get-team')
        return response.data
    }
    const deleteTeamList = async (id, data) => {
        const response = await axiosPrivate.get('/team/delete-team/' + id, data)
        return response.data
    }

    return {
        postTeamList,
        putTeamList,
        getTeamList,
        deleteTeamList
    }
}
