const adress = '185.117.155.233:9000';

const makeRequest = ({
  endpoint, method, body, errorText, headers,
}: {endpoint: string, method: string, body?: object, errorText?: string, headers?: object}) => fetch(`http://${adress}/v1/api/${endpoint}`, {
  method,
  body: JSON.stringify(body),
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    ...headers,
  },
})
  .then((response) => response.json())
  .catch((error) => {
    console.log(`${errorText}:`);
    console.log(error);
    return error;
  });

const downloadFileRequest = ({
  endpoint, method, body, errorText, headers, filename,
}: {endpoint: string, method: string, filename: string, body?: object, errorText?: string, headers?: object}) => {
  fetch(`http://${adress}/v1/api/${endpoint}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      ...headers,
    },
  })
    .then((response) => response.blob())
    .then((data) => {
      const downloadUrl = window.URL.createObjectURL(data);
      const linkUrl = document.createElement('a');
      linkUrl.download = filename;
      linkUrl.href = downloadUrl;
      document.body.appendChild(linkUrl);
      linkUrl.click();
      document.body.removeChild(linkUrl);
      linkUrl.remove();
    })
    .catch((error) => {
      console.log(`${errorText}:`);
      console.log(error);
      return error;
    });
};
const API = { makeRequest, downloadFileRequest };

export default API;
