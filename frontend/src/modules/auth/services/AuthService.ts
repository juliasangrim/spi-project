const sendLoginRequest = (email: string, password: string) => fetch('http://194.58.120.65:9000/v1/api/auth/signIn', {
  method: 'POST',
  body: JSON.stringify({
    email,
    password,
  }),
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Login error');
  });

const AuthService = {
  sendLoginRequest,
};

export default AuthService;
