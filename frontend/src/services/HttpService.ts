import axios from 'axios'
const CRUD_API_BASE_URL = "http://localhost:9000/";


export function signupRequest(email: string, password: string) {
    const json_obj = {
        email: email,
        password: password
    }
    console.log(json_obj)
    return axios.post(CRUD_API_BASE_URL + 'signup')
}

