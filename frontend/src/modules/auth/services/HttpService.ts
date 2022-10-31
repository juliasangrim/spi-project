import axios from 'axios'
const API_URL = "http://194.58.120.65:9000/v1/api";


export function signupRequest(email: string, password: string) {
    return axios.post(API_URL + '/auth/signup',
        {
            email: email,
            password: password
        }
    )
    // return fetch(API_URL + '/auth/signup', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     email: email,
    //     password: password
    //   }),        
    // })
}
