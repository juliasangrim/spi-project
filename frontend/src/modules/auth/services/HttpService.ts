import axios from 'axios';

const API_URL = 'http://185.117.155.233:9000/v1/api';

function signupRequest(email: string, password: string) {
  return axios.post(
    `${API_URL}/auth/signup`,
    {
      email,
      password,
    },
  );
  // return fetch(API_URL + '/auth/signup', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     email: email,
  //     password: password
  //   }),
  // })
}

export default signupRequest;
