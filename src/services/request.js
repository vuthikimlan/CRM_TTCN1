import axios from "axios";
import Cookies from "js-cookie";

const jwt = Cookies.get('jwt')
// const jwt = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaWVubHR3MTIzNCIsIlhBVVRIT1IiOiJBRE1JTiIsImlhdCI6MTY4MTcxNTgyOCwiZXhwIjoxNjgxNzUxODI4fQ.rDhKiMGVrJlYHXepMhrWV68OKFWurnGYZR9A6ExX-whVTAQpl-nynqFZ2OnVPRyJgiXFb27Pi9LgozbduIVfQg"

const base_url = "https://f2fd-27-76-111-171.ngrok-free.app"

const login_path = "/auth/login"

//Truoc khi call API
axios.interceptors.request.use((req) => {
    //Noi 2 url voi nhau
    const newUrl = base_url + req.url
    // const Authorization = login_path === req.url ? undefined : `Bearer ${jwt}`
    return{
        ...req,
        url: newUrl,
        headers: {
            ...req.headers,
            // Authorization,
            'ngrok-skip-browser-warning': '1'
        }
    }
})

//Sau khi co response tra ve
axios.interceptors.response.use((response) => {
    return response
}, (err) => {
    return Promise.reject(err)
})

export default axios