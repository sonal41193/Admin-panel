import axios from "axios";
const url ="http://localhost:3004";
const fetchData =  (endpoint,id='') =>{
    return axios.get(`${url}/${endpoint}/${id}`).then((result)=>{
        return result.data
    })
}

const deleteData = (endpoint,id) =>{
    return axios.delete(`${url}/${endpoint}/${id}`).then((result)=>{
        return result.data
    })
}

const AddData = (endpoint,data)=>{

    return axios.post(`${url}/${endpoint}`,data).then(result=>{
           return result.data
       })
} 

const Update = (endpoint,id,data)=>{

    return axios.put(`${url}/${endpoint}/${id}`,data).then(result=>{
           return result.data
       })
} 




export default
{
    fetchData, 
    deleteData,
    AddData,
    Update
}