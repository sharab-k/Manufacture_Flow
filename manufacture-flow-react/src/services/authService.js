import apiClient from '../api/client';

const authService = {
  login: async (email, password) => {
    // In a real scenario, this would be an actual API call
    // const response = await apiClient.post('/auth/login', { email, password });
    // return response.data;

    // Mock response for now to show readiness
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: { id: 1, name: 'Michael Thompson', email },
          token: 'mock-jwt-token',
        });
      }, 1000);
    });
  },

  signup: async (userData) => {
    const response = await apiClient.post('/auth/signup', userData);
    return response.data;
  },

  logout: async () => {
    // Optional: call backend to invalidate session
    // await apiClient.post('/auth/logout');
  },
};

export default authService;
