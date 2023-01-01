import axiosClient from "../axios"

class AuthService{
    static login = (data)=> axiosClient.post(`LoginAdmin/login`,data)
}  

export default AuthService