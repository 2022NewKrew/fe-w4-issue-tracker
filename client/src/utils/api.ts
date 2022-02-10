import axios from "axios";

axios.defaults.baseURL = "http://49.50.174.24:1234/api";
const server = "http://49.50.174.24:1234/api/";

// get user token
const setCommonParams = ({ params }: any) => {
  return params;
};

const api = {
  async get(endpoint: string, param?: any) {
    const params = param;
    try {
      const token = localStorage.getItem("authToken");
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.get(`${server}${endpoint}`, { headers });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(`ERROR: ${error}`);
      }
      return false;
    }
  },

  async post(endpoint: string, data: any) {
    // api.setAxiosDefaultHeader();
    try {
      const token = localStorage.getItem("authToken");
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.post(`${server}${endpoint}`, { ...data }, { headers });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(`ERROR: ${error}`);
      }
      return error;
    }
  },
};

export default api;
