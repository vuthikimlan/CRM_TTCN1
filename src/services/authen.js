import request from "./request"

export const login = ({userName,password}) => {
    return request.post(`/auth/login`, 
    {userName,password}).then((res) => res)
}