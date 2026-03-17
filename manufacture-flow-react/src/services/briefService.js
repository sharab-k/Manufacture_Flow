import apiClient from '../api/client';

const briefService = {
  getBriefs: async () => {
    // const response = await apiClient.get('/briefs');
    // return response.data;

    // Mock data for readiness demonstration
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 'BR12345678',
            title: 'Premium Vitamin D3 Supplement',
            company: 'Evergreenapparel.co',
            status: 'Invited',
            category: 'Dietry Supplements',
            budget: '€1000 - €100000',
            units: '400 units',
            date: '2026-04-15',
          },
          // ... more briefs
        ]);
      }, 1000);
    });
  },

  getBriefById: async (id) => {
    const response = await apiClient.get(`/briefs/${id}`);
    return response.data;
  },
};

export default briefService;
