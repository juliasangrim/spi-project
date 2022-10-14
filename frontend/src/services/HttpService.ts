import axios from 'axios'
const API_URL = "http://localhost:9000/v1/api/auth/";


export function signupRequest(email: string, password: string) {
    const json_obj = {
        email: email,
        password: password
    }
    console.log(json_obj)
    return axios.post(API_URL + 'signup')
}

