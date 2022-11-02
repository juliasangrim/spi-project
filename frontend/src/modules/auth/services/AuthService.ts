import API from '../../general/Api';

const sendLoginRequest = (email: string, password: string) => API.makeRequest({ endpoint: 'auth/signIn', method: 'POST', body: { email, password } });

const AuthService = {
  sendLoginRequest,
};

export default AuthService;
