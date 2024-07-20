import axiosPrivate from "../url/axios";

export const useProjectServices = () => {

    const postProjectList = async (formdata) => {
        const response = await axiosPrivate.post('/task/add-task', formdata, {
            headers:{"Content-Type":'multipart/from-data'}
        })
        return response.data
    }
    const putProjectList = async (id, data) => {
        const response = await axiosPrivate.put('/api/projects/' + id, data, {
            headers: { "Content-Type":'multipart/from-data'}
        })
        return response.data
    }
    const getProjectList = async () => {
        const response = await axiosPrivate.get('/task/get-task')
        return response.data
    }
    const deletProjectList = async (id, data) => {
        const response = await axiosPrivate.get('/task/delete-task/' + id, data)
        return response.data
    }
    return {
        postProjectList,
        putProjectList,
        getProjectList,
        deletProjectList
    }
}