import axiosPrivate from "../url/axios";

export const useProjectServices = () => {

    const postProjectList = async (formdata) => {
        const response = await axiosPrivate.post('/task/add-task', formdata, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
        return response.data
    }
    const putProjectList = async (id, data) => {
        const response = await axiosPrivate.put('/task/updatetask/' + id, data, {
            headers: { "Content-Type":'multipart/form-data'}
        })
        return response.data
    }
    const getProjectList = async () => {
        const response = await axiosPrivate.get('/task/get-task')
        return response.data
    }
    const getProjectPublicList = async () => {
        const response = await axiosPrivate.get('/task/get-task-public')
        return response.data
    }
    const getProjectById = async (id) => {
        const response = await axiosPrivate.get('/task/project/' + id)
        return response.data
    }
    const deleteProjectList = async (id, data) => {
        const response = await axiosPrivate.delete('/task/delete-task/' + id)
        return response.data
    }
    const postAdImage = async (formdata) => {
        const response = await axiosPrivate.post('/task/add-ad', formdata, {
            headers: { "Content-Type": 'multipart/form-data' }
        })
        return response.data
    }
    const getAd = async () => {
        const response = await axiosPrivate.get('/task/get-ad')
        return response.data
    }
    const putAd = async (id, data) => {
        try {
            const response = await axiosPrivate.put('/task/update-ad/' + id, data, {
                headers: { "Content-Type": 'multipart/form-data' }
            })
            return response.data
        } catch (err) {
            console.error("Error in putAd:", err);
            throw err;
        }
        
    }

    
    return {
        postProjectList,
        putProjectList,
        getProjectList,
        getProjectPublicList,
        deleteProjectList,
        getProjectById,
        postAdImage,
        getAd,
        putAd
    }
}