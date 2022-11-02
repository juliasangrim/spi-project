import axios from "axios";

export default  axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    },
})