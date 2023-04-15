import axios from "axios";
import Cookies from "js-cookie";

// const base_url = "https://b4de-116-104-51-98.ngrok-free.app"
const base_url = "https://b4de-116-104-51-98.ngrok-free.app"

//Truoc khi call API
axios.interceptors.request.use((requestConfig) => {
    //Noi 2 url voi nhau
    const newUrl = base_url + requestConfig.url
    return{
        ...requestConfig,
        url: newUrl,
    }
})

//Sau khi co response tra ve
axios.interceptors.response.use((response) => {
    return response
}, (err) => {
    return Promise.reject(err)
})

export default axios