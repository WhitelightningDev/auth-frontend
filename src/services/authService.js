import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const AuthService = {
  login: (email, password) => {
    return axios
      .post(`${API_URL}/login`, { email, password })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  },

  logout: () => {
    localStorage.removeItem('user');
  },

  register: (email, password) => {
    return axios.post(`${API_URL}/register`, { email, password });
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },
};

export default AuthService;
