const API_URL = "http://194.58.120.65:9000/v1/api";


export function getTemplates() {
  const token = localStorage.getItem('jwt');
  return fetch(API_URL + '/templates', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    }
  })
}