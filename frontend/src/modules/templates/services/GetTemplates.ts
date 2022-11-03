import API from '../../general/Api'

const getTemplates = () => API.makeRequest({
   endpoint: 'templates', 
   method: 'GET',
   headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('jwt'),
        }
   });

export default getTemplates;
